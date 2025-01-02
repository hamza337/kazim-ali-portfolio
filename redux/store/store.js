import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reducer/authReducer';
import categoriesReducer from '../reducer/categoriesReducer';
import reviewReducer from '../reducer/reviewReducer';
import serviceReducer from '../reducer/serviceReducer';
import contactReducer from '../reducer/contactReducer';
import cssReducer from '../reducer/cssReducer';
import newsLetterReducer from '../reducer/newsletter'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    category: categoriesReducer,
    review: reviewReducer,
    service: serviceReducer,
    contact: contactReducer,
    cssAndPms: cssReducer,
    newsLetter: newsLetterReducer
  },
});

