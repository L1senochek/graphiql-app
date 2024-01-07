import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';
import IHeadersSliceState from '@/model/store/headersState';
import IHeaders from '@/model/components/HeadersEditor/HeadersEditor';

const initialState: IHeadersSliceState = {
  headersValue: [{ headerKey: '', value: '' }],
};

const headersSlice = createSlice({
  name: 'headersValues',
  initialState,
  reducers: {
    setHeadersValue: (state, action: PayloadAction<IHeaders[]>) => {
      state.headersValue = action.payload;
    },
  },
});

export const selectHeadersValue = (state: RootState) =>
  state.headersSlice.headersValue;

export const { setHeadersValue } = headersSlice.actions;

export default headersSlice;
