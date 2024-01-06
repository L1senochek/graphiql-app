import { combineReducers, configureStore } from '@reduxjs/toolkit';
import languageSlice from './slices/languageSlice';
import firebaseUserSlice from './slices/firebaseUserSlice';
import authSlice from './slices/authSlice';
import documentationSlice from './slices/documentationSlice';
import queryEditorSlice from './slices/queryEditorSlice';
import serverAddressSlice from './slices/serverAddressSlice';
import headersSlice from './slices/headersSlice';
import requestResponseSlice from './slices/requestResponseSlice';

const rootReducer = combineReducers({
  languageSlice: languageSlice.reducer,
  authSlice: authSlice.reducer,
  firebaseUserSlice: firebaseUserSlice.reducer,
  documentationSlice: documentationSlice.reducer,
  queryEditorSlice: queryEditorSlice.reducer,
  serverAddressSlice: serverAddressSlice.reducer,
  headersSlice: headersSlice.reducer,
  requestResponseSlice: requestResponseSlice.reducer,
});

export const store = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore['dispatch'];
export default store;
