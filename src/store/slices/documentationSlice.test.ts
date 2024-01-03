import { describe, expect, it } from 'vitest';
import documentationSlice, { setClickDocBtn } from './documentationSlice';
import IDocumentationState from '@/model/store/documentationState';

describe('Documentation Slice', () => {
  const mockInitialState: IDocumentationState = {
    clickDocBtn: false,
  };

  it('should set initial state', () => {
    const initialState = documentationSlice.reducer(mockInitialState, {
      type: 'unknown',
    });
    expect(initialState).toEqual({ clickDocBtn: false });
  });

  it('should set clickDocBtn value', () => {
    let state = documentationSlice.reducer(
      { clickDocBtn: false },
      setClickDocBtn(true)
    );
    expect(state).toEqual({ clickDocBtn: true });

    state = documentationSlice.reducer(state, setClickDocBtn(false));
    expect(state).toEqual({ clickDocBtn: false });
  });
});
