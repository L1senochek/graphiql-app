import IDocumentationState from '@/model/store/documentationState';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

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

export const { setClickDocBtn } = documentationSlice.actions;
export default documentationSlice;
