import axois from 'axios';
import { APP_SETTINGS } from '../../../config';

export const getAllCategories = () => {
    return axois.get(`${APP_SETTINGS.API_PATH.CATEGORIES.getAll}`);
}

export const addCategory = (categoryBody) => {
    return axois.post(`${APP_SETTINGS.API_PATH.CATEGORIES.add}`, categoryBody);
}
export const editCategory = (categoryBody) => {
    return axois.put(`${APP_SETTINGS.API_PATH.CATEGORIES.update}`, categoryBody);
}
export const deleteCategory = (categoryId) => {
    return axois.delete(`${APP_SETTINGS.API_PATH.CATEGORIES.delete}/${categoryId}`);
}