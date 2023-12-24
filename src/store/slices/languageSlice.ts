import ILanguageState from '@/model/store/languageState';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import contentHeaderJson from '@/utils/jsons/headerContent/headerContent.json';
import contentGraphiQlJson from '@/utils/jsons/graphiQlContent/graphiQlContent.json';
import contentSignInJson from '@/utils/jsons/signInContent/signInContent.json';
import { RootState } from '@/store/store';

const initialState: ILanguageState = {
  eng: true,
  contentHeader: contentHeaderJson.eng,
  contentGraphiQl: contentGraphiQlJson.eng,
  contentSignIn: contentSignInJson.eng,
};

const languageSlice = createSlice({
  name: 'languageValue',
  initialState,
  reducers: {
    setEng: (state, action: PayloadAction<boolean>) => {
      state.eng = action.payload;

      state.contentHeader = action.payload
        ? contentHeaderJson.eng
        : contentHeaderJson.ru;
      state.contentGraphiQl = action.payload
        ? contentGraphiQlJson.eng
        : contentGraphiQlJson.ru;
      state.contentSignIn = action.payload
        ? contentSignInJson.eng
        : contentSignInJson.ru;
    },
  },
});

export const selectEng = (state: RootState) => state.languageSlice.eng;
export const selectContentHeader = (state: RootState) =>
  state.languageSlice.contentHeader;
export const selectContentGraphiQl = (state: RootState) =>
  state.languageSlice.contentGraphiQl;
export const selectContentSignIn = (state: RootState) =>
  state.languageSlice.contentSignIn;

export const { setEng } = languageSlice.actions;
export default languageSlice;
