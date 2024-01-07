import IDocumentationState from '@/model/store/documentationState';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';

const initialState: IDocumentationState = {
  clickDocBtn: false,
  btnDocDisabled: true,
  docObj: null,
  docsLoading: true,
};

const documentationSlice = createSlice({
  name: 'documentationValue',
  initialState,
  reducers: {
    setClickDocBtn: (state, action: PayloadAction<boolean>) => {
      state.clickDocBtn = action.payload;
    },
    setBtnDocDisabled: (state, action: PayloadAction<boolean>) => {
      state.btnDocDisabled = action.payload;
    },
    setDocObj: (state, action: PayloadAction<object | string>) => {
      state.docObj = action.payload;
    },
    setDocLoading: (state, action: PayloadAction<boolean>) => {
      state.docsLoading = action.payload;
    },
  },
});

export const selectClickDocBtn = (state: RootState) =>
  state.documentationSlice.clickDocBtn;
export const selectBtnDocDisabled = (state: RootState) =>
  state.documentationSlice.btnDocDisabled;
export const selectDocObj = (state: RootState) =>
  state.documentationSlice.docObj;
export const selectDocLoading = (state: RootState) =>
  state.documentationSlice.docsLoading;

export const { setClickDocBtn, setBtnDocDisabled, setDocObj, setDocLoading } =
  documentationSlice.actions;
export default documentationSlice;
