import { describe, it, expect } from 'vitest';
import {
  setRequest,
  setResponse,
  setLoadingRes,
  selectRequest,
  selectResponse,
  selectLoadingRes,
} from './requestResponseSlice';
import getStore from '@/store/store';

const store = getStore();

describe('requestResponseSlice tests', () => {
  it('should handle initial state', () => {
    expect(selectRequest(store.getState())).toBe('');
    expect(selectResponse(store.getState())).toBe('');
    expect(selectLoadingRes(store.getState())).toBe(false);
  });

  it('should handle setRequest', () => {
    const newRequest = 'new request';
    store.dispatch(setRequest(newRequest));
    expect(selectRequest(store.getState())).toBe(newRequest);
  });

  it('should handle setResponse', () => {
    const newResponse = 'new response';
    store.dispatch(setResponse(newResponse));
    expect(selectResponse(store.getState())).toBe(newResponse);
  });

  it('should handle setLoadingRes', () => {
    const newLoadingState = true;
    store.dispatch(setLoadingRes(newLoadingState));
    expect(selectLoadingRes(store.getState())).toBe(newLoadingState);
  });
});
