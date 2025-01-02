import axois from 'axios';
import { APP_SETTINGS } from '../../../config';

export const getAllCSS = () => {
    return axois.get(`${APP_SETTINGS.API_PATH.CSSANDPMS.getAll}`);
}

export const addCSS = (cssBody) => {
    return axois.post(`${APP_SETTINGS.API_PATH.CSSANDPMS.add}`, cssBody);
}
export const editCSS = (cssBody) => {
    return axois.put(`${APP_SETTINGS.API_PATH.CSSANDPMS.update}`, cssBody);
}
export const deleteCSS = (cssId) => {
    return axois.delete(`${APP_SETTINGS.API_PATH.CSSANDPMS.delete}/${cssId}`);
}
export const getAllLookUps = () => {
    return axois.get(`${APP_SETTINGS.API_PATH.LOOKUPS.getAll}`);
}
export const editLookup = (cssBody) => {
    return axois.put(`${APP_SETTINGS.API_PATH.LOOKUPS.update}`, cssBody);
}