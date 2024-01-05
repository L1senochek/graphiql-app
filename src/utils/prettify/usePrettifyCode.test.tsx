import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import usePrettifyCode from './usePrettifyCode';
import {
  setRequestCode,
  setRequestLineNumbers,
} from '@/store/slices/queryEditorSlice';

vi.mock('react-redux', async () => {
  const actualRedux = await vi.importActual('react-redux');
  return {
    ...actualRedux,
    useSelector: vi.fn(),
    useDispatch: vi.fn(() => vi.fn()),
  };
});

describe('usePrettifyCode', () => {
  const mockDispatch = vi.fn();
  let mockSelectRequestCode = '';

  beforeEach(() => {
    mockDispatch.mockClear();
    vi.mocked(useSelector).mockClear();
    vi.mocked(useDispatch).mockClear();

    vi.mocked(useSelector).mockImplementation((selector) => {
      if (selector.name === 'selectRequestCode') {
        return mockSelectRequestCode;
      }
      return undefined;
    });

    vi.mocked(useDispatch).mockImplementation(() => mockDispatch);
  });

  it('should dispatch actions to format unformatted code', () => {
    const mockRequestCode = '{code}';
    const mockFormattedCode = '{\n  code\n}';
    const mockLineNumbers = [1, 2, 3, 4];

    mockSelectRequestCode = mockRequestCode;

    const { result } = renderHook(() => usePrettifyCode());

    act(() => {
      result.current();
    });

    expect(mockDispatch).toHaveBeenCalledWith(
      setRequestCode(mockFormattedCode)
    );
    expect(mockDispatch).toHaveBeenCalledWith(
      setRequestLineNumbers(mockLineNumbers)
    );
    expect(mockDispatch).toHaveBeenCalledTimes(2);
  });
});
