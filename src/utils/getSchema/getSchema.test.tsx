import { it, expect, vi, Mock } from 'vitest';
import getSchema from './getSchema';

global.fetch = vi.fn();

const mockSuccessResponse = {
  data: {
    __schema: {},
  },
};

it('should return a schema when the endpoint is correct', async () => {
  (global.fetch as Mock).mockResolvedValueOnce({
    ok: true,
    json: async () => mockSuccessResponse,
  });

  const schema = await getSchema('http://correct-endpoint.com');
  expect(schema).toEqual(mockSuccessResponse);
});

it('should throw an error when the endpoint is incorrect', async () => {
  (global.fetch as Mock).mockResolvedValueOnce({
    ok: false,
    status: 404,
    statusText: 'Not Found',
  });

  const testError = async () => {
    await getSchema('http://incorrect-endpoint.com');
  };

  await expect(testError).rejects.toThrow('404 - Not Found');
});
