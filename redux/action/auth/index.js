import axios from 'axios';
import { loginFailure, loginStart, loginSuccess } from '../../reducer';
import { loginAPi } from '../../api';

export const login = (loginBody, moveToNext) => {
    return dispatch => {
        dispatch(loginStart())
        loginAPi(loginBody).then(
            response => {
                if (response.status === 200) {
                    dispatch(loginSuccess({
                        user: { email: loginBody.email }, // Assuming the API returns user data
                    }));
                    if (moveToNext) {
                        moveToNext({ email: loginBody.email })
                    }
                }
                else {
                    dispatch(loginFailure(response?.data?.message || 'Login failed'));
                }
            }, error => {
                dispatch(loginFailure(error?.message || 'Login failed'));
            }
        )
    }
};