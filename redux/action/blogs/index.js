import {
  allReviewsFailure, allReviewsSuccess, allReviewsLoading,
} from '../../reducer';
import { getAllBlogs } from '../../api/blogs/index';

export const GetAllBlogs = (onError) => {
  return dispatch => {
    dispatch(allReviewsLoading());

    getAllBlogs().then(
      response => {
        if (response.status === 200) {
          // Generate slug for each service
          const reviewsWithSlug = response.data.data.map((item) => ({
            ...item,
            slug: item.slug || generateSlug(item.title), // Generate slug from title
          }));

          dispatch(allReviewsSuccess(reviewsWithSlug));
        } else {
          dispatch(allReviewsFailure(response?.data?.message || 'Failed to load reviews'));
          if (onError) {
            onError(response?.data?.message || 'Something went wrong');
          }
        }
      },
      error => {
        if (onError) {
          onError(error?.message || 'Something went wrong');
        }
        dispatch(allReviewsFailure(error?.message || 'Failed to load reviews'));
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