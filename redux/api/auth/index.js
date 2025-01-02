import axois from 'axios';
import { APP_SETTINGS } from '../../../config';
import { getFilteredQuery } from '../../../assets';

export const loginAPi = (loginBody) => {
    return axois.get(`${APP_SETTINGS.API_PATH.AUTH.login}?${getFilteredQuery(loginBody)}`);
}

