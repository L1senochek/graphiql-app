import { beforeEach, describe, expect, it, vi } from 'vitest';
import getData from './getData';

beforeEach(() => {
  vi.restoreAllMocks();
});

describe('getData', () => {
  it('should fetch data with correct headers and query', async () => {
    const endpoint = 'https://example.com/graphql';
    const headers = { Authorization: 'Bearer token' };
    const query = '{ users { id name } }';

    const mockJsonResponse = {
      data: {
        users: [
          { id: '1', name: 'Timur' },
          { id: '2', name: 'Tatyana' },
          { id: '2', name: 'Dmitrij' },
        ],
      },
    };

    vi.spyOn(global, 'fetch').mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockJsonResponse),
    } as unknown as Response);

    const result = await getData(endpoint, headers, query);

    expect(fetch).toHaveBeenCalledWith(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer token',
      },
      mode: 'cors',
      body: JSON.stringify({ query }),
    });
    expect(result).toEqual(mockJsonResponse);
  });

  it('should throw an error when the response is not ok', async () => {
    const endpoint = 'https://example.com/graphql';
    const headers = { Authorization: '' };
    const query = '{ users { id name } }';

    vi.spyOn(global, 'fetch').mockResolvedValueOnce({
      ok: false,
      status: 401,
      statusText: 'Unauthorized',
    } as unknown as Response);

    const fetchPromise = getData(endpoint, headers, query);

    expect(fetch).toHaveBeenCalledWith(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify({ query }),
    });
    await expect(fetchPromise).rejects.toThrow('401 - Unauthorized');
  });
});
