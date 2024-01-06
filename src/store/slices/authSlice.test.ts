import { describe, expect, it } from 'vitest';
import authSlice, { setAuth } from './authSlice';
import IAuthState from '@/model/store/authState';

describe('Auth Slice', () => {
  const mockInitialState: IAuthState = {
    auth: false,
  };

  it('should set initial state', () => {
    const initialState = authSlice.reducer(mockInitialState, {
      type: 'unknown',
    });
    expect(initialState).toEqual({ auth: false });
  });

  it('should set auth value', () => {
    let state = authSlice.reducer({ auth: false }, setAuth(true));
    expect(state).toEqual({ auth: true });

    state = authSlice.reducer(state, setAuth(false));
    expect(state).toEqual({ auth: false });
  });
});
