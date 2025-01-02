import {
    allNewsLetterLoading, allNewsLetterSuccess, allNewsLetterFailure,
    
    editNewsLetterLoading, editNewsLetterSuccess, editNewsLetterFailure
} from '../../reducer';
import {  editNewsLetter, getAllNewsLetter, } from '../../api';

export const GetAllNEWSLETTER = (onError) => {
    return dispatch => {
        dispatch(allNewsLetterLoading())
        getAllNewsLetter().then(
            response => {
                if (response.status === 200) {
                    dispatch(allNewsLetterSuccess(
                        response.data,
                    ));
                }
                else {
                    dispatch(allNewsLetterFailure(response?.data?.message || 'Login failed')); if (onError) {
                        onError(response?.data?.message || 'Something Went Wrong')
                    }
                }
            }, error => {
                if (onError) {
                    onError(error?.message || 'Something Went Wrong')
                }
                dispatch(allNewsLetterFailure(error?.message || 'Login failed'));
            }
        )
    }
};


export const EditNEWSLETTER = (ServiceBody, moveToNExt, onError) => {
    return dispatch => {
        dispatch(editNewsLetterLoading())
        editNewsLetter(ServiceBody).then(
            response => {
                if (response.status === 200 || response.status === 201) {
                    dispatch(editNewsLetterSuccess(
                        response.data,
                    ));
                    if (moveToNExt) {
                        moveToNExt()
                    }
                }
                else {
                    dispatch(editNewsLetterFailure(response?.data?.message || 'Login failed'));
                    if (onError) {
                        onError(response?.data?.message || 'Something Went Wrong')
                    }
                }
            }, error => {
                if (onError) {
                    onError(error?.message || 'Something Went Wrong')
                }
                dispatch(editNewsLetterFailure(error?.message || 'Login failed'));
            }
        )
    }
};