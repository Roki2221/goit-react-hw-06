import contactsReducer from './contactsSlice.js';
import filtersReducer from './filtersSlice.js';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});
