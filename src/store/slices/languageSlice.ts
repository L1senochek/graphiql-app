import ILanguageState from '@/model/store/languageState';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import contentHeaderJson from '@/utils/jsons/HeaderContent/headerContent.json';
import contentGraphiQlJson from '@/utils/jsons/GraphiQlContent/graphiQlContent.json';
import { RootState } from '@/store/store';

const initialState: ILanguageState = {
  eng: true,
  contentHeader: contentHeaderJson.eng,
  contentGraphiQl: contentGraphiQlJson.eng,
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
    },
  },
});

export const selectEng = (state: RootState) => state.languageSlice.eng;
export const selectContentHeader = (state: RootState) =>
  state.languageSlice.contentHeader;
export const selectContentGraphiQl = (state: RootState) =>
  state.languageSlice.contentGraphiQl;

export const { setEng } = languageSlice.actions;
export default languageSlice;
