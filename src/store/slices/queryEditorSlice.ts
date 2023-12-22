import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IQueryEditorState {
  requestCode: string;
  requestLineNumbers: number[];
  variablesCode: string;
  variablesLineNumbers: number[];
}

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
    setLineNumbers: (state, action: PayloadAction<number[]>) => {
      state.requestLineNumbers = action.payload;
    },
    setVariablesCode: (state, action: PayloadAction<string>) => {
      state.requestCode = action.payload;
    },
    setVariablesLineNumbers: (state, action: PayloadAction<number[]>) => {
      state.requestLineNumbers = action.payload;
    },
  },
});

export const {
  setRequestCode,
  setLineNumbers,
  setVariablesCode,
  setVariablesLineNumbers,
} = queryEditorSlice.actions;

export default queryEditorSlice;
