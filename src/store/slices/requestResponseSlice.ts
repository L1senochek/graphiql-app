import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';
import IRequestResponseState from '@/model/store/requestResponseState';

const initialState: IRequestResponseState = {
  request: '',
  response: '',
  loadingRes: false,
};

const requestResponseSlice = createSlice({
  name: 'requestResponseValues',
  initialState,
  reducers: {
    setRequest: (state, action: PayloadAction<string>) => {
      state.request = action.payload;
    },
    setResponse: (state, action: PayloadAction<string>) => {
      state.response = action.payload;
    },
    setLoadingRes: (state, action: PayloadAction<boolean>) => {
      state.loadingRes = action.payload;
    },
  },
});

export const selectRequest = (state: RootState) =>
  state.requestResponseSlice.request;
export const selectResponse = (state: RootState) =>
  state.requestResponseSlice.response;
export const selectLoadingRes = (state: RootState) =>
  state.requestResponseSlice.loadingRes;

export const { setRequest, setResponse, setLoadingRes } =
  requestResponseSlice.actions;

export default requestResponseSlice;
