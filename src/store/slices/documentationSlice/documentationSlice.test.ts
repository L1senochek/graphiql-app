import { describe, expect, it } from 'vitest';
import documentationSlice, { setClickDocBtn } from './documentationSlice';
import IDocumentationState from '@/model/store/documentationState';

describe('Documentation Slice', () => {
  const mockInitialState: IDocumentationState = {
    clickDocBtn: false,
    btnDocDisabled: true,
    docObj: null,
    docsLoading: true,
  };

  it('should set initial state', () => {
    const initialState = documentationSlice.reducer(mockInitialState, {
      type: 'unknown',
    });
    expect(initialState).toEqual(mockInitialState);
  });

  it('should set clickDocBtn value', () => {
    let state = documentationSlice.reducer(
      mockInitialState,
      setClickDocBtn(true)
    );
    expect(state.clickDocBtn).toBe(true);

    state = documentationSlice.reducer(state, setClickDocBtn(false));
    expect(state.clickDocBtn).toBe(false);
  });
});
