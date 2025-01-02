// redux/reducer/contact/index.js
import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    loading: false,
    success: false,
    error: null,
  },
  reducers: {
    contactFormLoading: (state) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    },
    contactFormSuccess: (state) => {
      state.loading = false;
      state.success = true;
      state.error = null;
    },
    contactFormFailure: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
    },
  },
});

// Export actions to be used in the action creators
export const {
  contactFormLoading,
  contactFormSuccess,
  contactFormFailure,
} = contactSlice.actions;

// Export the reducer to be combined in root reducer
export default contactSlice.reducer;