import ILanguageState from '@/model/store/languageState';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import contentHeaderJson from '@/utils/jsons/headerContent/headerContent.json';
import contentGraphiQlJson from '@/utils/jsons/graphiQlContent/graphiQlContent.json';
import contentSignInJson from '@/utils/jsons/signInContent/signInContent.json';
import contentSignUpJson from '@/utils/jsons/signUpContent/signUpContent.json';
import contentWelcomeJson from '@/utils/jsons/welcomeContent/welcomeContent.json';
import contentValidationErrors from '@/utils/jsons/validationErrors/validationErrors.json';
import contentErrorMessage from '@/utils/jsons/errorMessage/errorMessage.json';
import contentNotFoundJson from '@/utils/jsons/notFound/notFound.json';
import contentErrorModalJson from '@/utils/jsons/errorModal/errorModal.json';
import { RootState } from '@/store/store';

const initialState: ILanguageState = {
  eng: true,
  contentHeader: contentHeaderJson.eng,
  contentGraphiQl: contentGraphiQlJson.eng,
  contentSignIn: contentSignInJson.eng,
  contentSignUp: contentSignUpJson.eng,
  contentWelcome: contentWelcomeJson.eng,
  contentValidationErrors: contentValidationErrors.eng,
  contentErrorMassage: contentErrorMessage.eng,
  contentNotFound: contentNotFoundJson.eng,
  contentErrorModal: contentErrorModalJson.eng,
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
      state.contentValidationErrors = action.payload
        ? contentValidationErrors.eng
        : contentValidationErrors.ru;
      state.contentErrorMassage = action.payload
        ? contentErrorMessage.eng
        : contentErrorMessage.ru;
      state.contentNotFound = action.payload
        ? contentNotFoundJson.eng
        : contentNotFoundJson.ru;
      state.contentErrorModal = action.payload
        ? contentErrorModalJson.eng
        : contentErrorModalJson.ru;
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
export const selectContentValidationErrors = (state: RootState) =>
  state.languageSlice.contentValidationErrors;
export const selectContentErrorMessage = (state: RootState) =>
  state.languageSlice.contentErrorMassage;
export const selectContentNotFound = (state: RootState) =>
  state.languageSlice.contentNotFound;
export const selectContentErrorModal = (state: RootState) =>
  state.languageSlice.contentErrorModal;

export const { setEng } = languageSlice.actions;
export default languageSlice;
