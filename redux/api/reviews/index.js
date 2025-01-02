import axois from 'axios';
import { APP_SETTINGS } from '../../../config';

export const getAllReviews = () => {
    return axois.get(`${APP_SETTINGS.API_PATH.REVIEWS.getAll}`);
}

export const addReview = (reviewBody) => {
    return axois.post(`${APP_SETTINGS.API_PATH.REVIEWS.add}`, reviewBody);
}
export const editReview = (reviewBody) => {
    return axois.put(`${APP_SETTINGS.API_PATH.REVIEWS.update}`, reviewBody);
}
export const deleteReview = (reviewId) => {
    return axois.delete(`${APP_SETTINGS.API_PATH.REVIEWS.delete}/${reviewId}`);
}