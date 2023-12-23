import IQueryEditorState from '@/model/store/queryEditorSlice';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';

const initialState: IQueryEditorState = {
  requestCode: `query ExampleQuery($characterId: ID!) {
  
}`,
  requestLineNumbers: [1, 2, 3],
  variablesCode: '',
  variablesLineNumbers: [1],
};

const queryEditorSlice = createSlice({
  name: 'queryEditorValues',
  initialState,
  reducers: {
    setRequestCode: (state, action: PayloadAction<string>) => {
      state.requestCode = action.payload;
    },
    setRequestLineNumbers: (state, action: PayloadAction<number[]>) => {
      state.requestLineNumbers = action.payload;
    },
    setVariablesCode: (state, action: PayloadAction<string>) => {
      state.variablesCode = action.payload;
    },
    setVariablesLineNumbers: (state, action: PayloadAction<number[]>) => {
      state.variablesLineNumbers = action.payload;
    },
  },
});

export const selectRequestCode = (state: RootState) =>
  state.queryEditorSlice.requestCode;
export const selectRequestLineNumbers = (state: RootState) =>
  state.queryEditorSlice.requestLineNumbers;

export const selectVariablesCode = (state: RootState) =>
  state.queryEditorSlice.variablesCode;
export const selectVariablesLineNumbers = (state: RootState) =>
  state.queryEditorSlice.variablesLineNumbers;

export const {
  setRequestCode,
  setRequestLineNumbers,
  setVariablesCode,
  setVariablesLineNumbers,
} = queryEditorSlice.actions;

export default queryEditorSlice;
