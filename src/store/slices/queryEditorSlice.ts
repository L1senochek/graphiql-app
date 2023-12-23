import IQueryEditorState from '@/model/store/queryEditorSlice';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

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

export const {
  setRequestCode,
  setRequestLineNumbers,
  setVariablesCode,
  setVariablesLineNumbers,
} = queryEditorSlice.actions;

export default queryEditorSlice;
