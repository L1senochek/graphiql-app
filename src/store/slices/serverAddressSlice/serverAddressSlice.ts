import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';
import IServerAddressState from '@/model/store/serverAddressState';

const initialState: IServerAddressState = {
  serverAddressInputValue: 'https://rickandmortyapi.com/graphql',
};

const serverAddressSlice = createSlice({
  name: 'serverAddressValues',
  initialState,
  reducers: {
    setServerAddressInputValue: (state, action: PayloadAction<string>) => {
      state.serverAddressInputValue = action.payload;
    },
  },
});

export const selectServerAddressInputValue = (state: RootState) =>
  state.serverAddressSlice.serverAddressInputValue;

export const { setServerAddressInputValue } = serverAddressSlice.actions;

export default serverAddressSlice;
