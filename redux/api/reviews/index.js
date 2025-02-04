import axois from 'axios';
import { APP_SETTINGS } from '../../../config';

export const getAllReviews = () => {
    return axois.get(`${APP_SETTINGS.API_PATH.REVIEWS.getAll}`);
}
