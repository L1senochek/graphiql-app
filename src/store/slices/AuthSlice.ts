import IAuthState from '@/model/store/authState';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';

const initialState: IAuthState = {
  auth: false,
};

const authSlice = createSlice({
  name: 'authValue',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.auth = action.payload;
    },
  },
});

export const selectAuth = (state: RootState) => state.authSlice.auth;

export const { setAuth } = authSlice.actions;
export default authSlice;
