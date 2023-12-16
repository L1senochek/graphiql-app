import ILanguageState from '@/model/store/languageState';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: ILanguageState = {
  eng: true,
};

const languageSlice = createSlice({
  name: 'languageValue',
  initialState,
  reducers: {
    setEng: (state, action: PayloadAction<boolean>) => {
      state.eng = action.payload;
    },
  },
});

export const { setEng } = languageSlice.actions;
export default languageSlice;
