import IFirebaseUserState from '@/model/store/firebaseUserState';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';

const initialState: IFirebaseUserState = {
  firebaseUser: {
    uid: null,
    email: null,
    displayName: null,
  },
};

const firebaseUserSlice = createSlice({
  name: 'firebaseUserValue',
  initialState,
  reducers: {
    setUserUid: (state, action: PayloadAction<string>) => {
      state.firebaseUser.uid = action.payload;
    },
    setUserEmail: (state, action: PayloadAction<string>) => {
      state.firebaseUser.email = action.payload;
    },
    setUserDisplayName: (state, action: PayloadAction<string>) => {
      state.firebaseUser.displayName = action.payload;
    },
  },
});

export const selectFirebaseUser = (state: RootState) =>
  state.firebaseUserSlice.firebaseUser;

export const { setUserUid, setUserEmail, setUserDisplayName } =
  firebaseUserSlice.actions;
export default firebaseUserSlice;
