import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';
import IRequestResponseState from '@/model/store/requestResponseState';

const initialState: IRequestResponseState = {
  request: '',
  response: '',
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
  },
});

export const selectRequest = (state: RootState) =>
  state.requestResponseSlice.request;
export const selectResponse = (state: RootState) =>
  state.requestResponseSlice.response;

export const { setRequest, setResponse } = requestResponseSlice.actions;

export default requestResponseSlice;
