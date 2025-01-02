// actions/contact/index.js
import axios from 'axios';
import { contactFormLoading, contactFormSuccess, contactFormFailure } from '../../reducer';
import { submitContactFormApi } from '../../api';

// Contact form submission action
export const submitContactForm = (formData) => async (dispatch) => {
  try {
    // Dispatch loading state
    dispatch(contactFormLoading());

    // Call the API to submit form
    const response = await submitContactFormApi(formData);

    // Dispatch success on successful API response
    dispatch(contactFormSuccess());
    
    return response.data; // In case you need to do something else with the response
  } catch (error) {
    // Dispatch failure if something goes wrong
    dispatch(contactFormFailure(error.response?.data?.message || 'Failed to send message'));
    
    throw error; // In case you want to handle it elsewhere
  }
};