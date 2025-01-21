import axois from 'axios';
import { APP_SETTINGS } from '../../../config';

export const getAllCSS = () => {
    return axois.get(`${APP_SETTINGS.API_PATH.CSSANDPMS.getAll}`);
}