import IAuthState from '@/model/store/AuthState';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

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

export const { setAuth } = authSlice.actions;
export default authSlice;
