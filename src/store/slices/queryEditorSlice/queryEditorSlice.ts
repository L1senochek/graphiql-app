import IQueryEditorState from '@/model/store/queryEditorSlice';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';

const initialState: IQueryEditorState = {
  requestCode: `query ExampleQuery ($locationId: ID!, $name: String!)
{
  characters(page: 2, filter:
  {
    name: $name
  }
  )
  {
    info 
    {
      count
    }
    results
    {
      name
    }
  }
  location(id: $locationId)
  {
    id
  }
  episodesByIds(ids: [1, 2])
  {
    id
  }
}
`,
  requestLineNumbers: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27,
  ],
  variablesCode: `{
  "locationId": "2",
  "name": "Morty"
}`,
  variablesLineNumbers: [1, 2, 3, 4],
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
