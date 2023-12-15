import { combineReducers, configureStore } from '@reduxjs/toolkit';
import languageSlice from './slices/languageSlice';
import authSlice from './slices/AuthSlice';

const rootReducer = combineReducers({
  languageSlice: languageSlice.reducer,
  authSlice: authSlice.reducer,
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
