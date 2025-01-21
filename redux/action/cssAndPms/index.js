
import {
    allCssAndPmsFailure, allCssAndPmsSuccess, allCssAndPmsLoading,
} from '../../reducer';
import { getAllCSS, } from '../../api';

export const GetAllCSS = (onError) => {
    return dispatch => {
      dispatch(allCssAndPmsLoading());
  
      getAllCSS().then(
        response => {
          if (response.status === 200) {
            // Generate slug for each service
            const pmsWithSlug = response.data.data.map((item) => ({
              ...item,
              slug: item.slug || generateSlug(item.title), // Generate slug from title
            }));
  
            dispatch(allCssAndPmsSuccess(pmsWithSlug));
          } else {
            dispatch(allCssAndPmsFailure(response?.data?.message || 'Failed to load CSS PMS'));
            if (onError) {
              onError(response?.data?.message || 'Something went wrong');
            }
          }
        },
        error => {
          if (onError) {
            onError(error?.message || 'Something went wrong');
          }
          dispatch(allCssAndPmsFailure(error?.message || 'Failed to load CSS PMS'));
        }
      );
    };
  };
  
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '');
  };
