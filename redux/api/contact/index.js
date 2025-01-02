// api/index.js
import axios from 'axios';
import { CONTACTUS } from '../../../config';

// API call for submitting the contact form
export const submitContactFormApi = (formData) => {
  return axios.post(`${CONTACTUS.CONTACT_PATH.CONTACT.send}`, formData);
};