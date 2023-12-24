import ILanguageState from '@/model/store/languageState';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import contentHeaderJson from '@/utils/jsons/headerContent/headerContent.json';
import contentGraphiQlJson from '@/utils/jsons/graphiQlContent/graphiQlContent.json';
import contentSignInJson from '@/utils/jsons/signInContent/signInContent.json';
import contentSignUpJson from '@/utils/jsons/signUpContent/signUpContent.json';
import contentWelcomeJson from '@/utils/jsons/welcomeContent/welcomeContent.json';
import { RootState } from '@/store/store';

const initialState: ILanguageState = {
  eng: true,
  contentHeader: contentHeaderJson.eng,
  contentGraphiQl: contentGraphiQlJson.eng,
  contentSignIn: contentSignInJson.eng,
  contentSignUp: contentSignUpJson.eng,
  contentWelcome: contentWelcomeJson.eng,
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
      state.contentSignUp = action.payload
        ? contentSignUpJson.eng
        : contentSignUpJson.ru;
      state.contentWelcome = action.payload
        ? contentWelcomeJson.eng
        : contentWelcomeJson.ru;
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
export const selectContentSignUp = (state: RootState) =>
  state.languageSlice.contentSignUp;
export const selectContentWelcome = (state: RootState) =>
  state.languageSlice.contentWelcome;

export const { setEng } = languageSlice.actions;
export default languageSlice;
