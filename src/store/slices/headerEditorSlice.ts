import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';
import IHeaderEditorState from '@/model/store/headerEditorState';

const initialState: IHeaderEditorState = {
  headersInputValue: '',
};

const headersEditorSlice = createSlice({
  name: 'headerEditorValues',
  initialState,
  reducers: {
    setHeadersInputValue: (state, action: PayloadAction<string>) => {
      state.headersInputValue = action.payload;
    },
  },
});

export const selectInputValue = (state: RootState) =>
  state.headersEditorSlice.headersInputValue;

export const { setHeadersInputValue } = headersEditorSlice.actions;

export default headersEditorSlice;
