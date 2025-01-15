import axois from 'axios';
import { APP_SETTINGS } from '../../../config';

export const getAllNationalCourses = () => {
    return axois.get(`${APP_SETTINGS.API_PATH.NATIONALCOURSES.getAll}`);
}
