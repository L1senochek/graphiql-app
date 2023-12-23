import IDocumentationState from '@/model/store/documentationState';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';

const initialState: IDocumentationState = {
  clickDocBtn: false,
};

const documentationSlice = createSlice({
  name: 'documentationValue',
  initialState,
  reducers: {
    setClickDocBtn: (state, action: PayloadAction<boolean>) => {
      state.clickDocBtn = action.payload;
    },
  },
});

export const selectClickDocBtn = (state: RootState) =>
  state.documentationSlice.clickDocBtn;

export const { setClickDocBtn } = documentationSlice.actions;
export default documentationSlice;
