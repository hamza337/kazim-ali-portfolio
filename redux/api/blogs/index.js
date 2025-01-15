import axois from 'axios';
import { APP_SETTINGS } from '../../../config';

export const getAllBlogs = () => {
    console.log('check kr 2', APP_SETTINGS.API_PATH.BLOGS.getAll )
    return axois.get(`${APP_SETTINGS.API_PATH.BLOGS.getAll}`);
}
