import axois from 'axios';
import { APP_SETTINGS } from '../../../config';

export const getAllInternationalCourses = () => {
    return axois.get(`${APP_SETTINGS.API_PATH.INTERNATIONALCOURSES.getAll}`);
}
