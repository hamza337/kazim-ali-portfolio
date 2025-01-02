import axois from 'axios';
import { APP_SETTINGS } from '../../../config';

export const getAllNewsLetter = () => {
    return axois.get(`${APP_SETTINGS.API_PATH.NEWSLETTER.getAll}`);
}


export const editNewsLetter = (newsLetterBody) => {
    return axois.put(`${APP_SETTINGS.API_PATH.NEWSLETTER.update}`, newsLetterBody);
}