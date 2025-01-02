import axois from 'axios';
import { APP_SETTINGS } from '../../../config';

export const getAllServices = () => {
    return axois.get(`${APP_SETTINGS.API_PATH.SERVICES.getAll}`);
}

export const addService = (ServiceBody) => {
    return axois.post(`${APP_SETTINGS.API_PATH.SERVICES.add}`, ServiceBody, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }
    );
}
export const editService = (ServiceBody) => {
    return axois.put(`${APP_SETTINGS.API_PATH.SERVICES.update}`, ServiceBody);
}
export const deleteService = (ServiceId) => {
    return axois.delete(`${APP_SETTINGS.API_PATH.SERVICES.delete}/${ServiceId}`);
}