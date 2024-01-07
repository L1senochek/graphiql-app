import { describe, it, expect } from 'vitest';
import {
  setRequestCode,
  setRequestLineNumbers,
  setVariablesCode,
  setVariablesLineNumbers,
  selectRequestCode,
  selectRequestLineNumbers,
  selectVariablesCode,
  selectVariablesLineNumbers,
} from './queryEditorSlice';
import getStore from '@/store/store';

const store = getStore();

describe('queryEditorSlice tests', () => {
  it('should handle setRequestCode', () => {
    const newRequestCode = 'new request code';
    store.dispatch(setRequestCode(newRequestCode));
    expect(selectRequestCode(store.getState())).toBe(newRequestCode);
  });

  it('should handle setRequestLineNumbers', () => {
    const newRequestLineNumbers = [17, 18, 19];
    store.dispatch(setRequestLineNumbers(newRequestLineNumbers));
    expect(selectRequestLineNumbers(store.getState())).toEqual(
      newRequestLineNumbers
    );
  });

  it('should handle setVariablesCode', () => {
    const newVariablesCode = 'new variables code';
    store.dispatch(setVariablesCode(newVariablesCode));
    expect(selectVariablesCode(store.getState())).toBe(newVariablesCode);
  });

  it('should handle setVariablesLineNumbers', () => {
    const newVariablesLineNumbers = [5, 6, 7];
    store.dispatch(setVariablesLineNumbers(newVariablesLineNumbers));
    expect(selectVariablesLineNumbers(store.getState())).toEqual(
      newVariablesLineNumbers
    );
  });
});
