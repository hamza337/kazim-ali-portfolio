import {
    reviewByIDFailure, reviewByIDSuccess, reviewByIDLoading,
    allReviewsFailure, allReviewsSuccess, allReviewsLoading,
    addReviewFailure, addReviewSuccess, addReviewLoading,
    editReviewFailure, editReviewSuccess, editReviewLoading,
    removeReviewFailure, removeReviewSuccess, removeReviewLoading
} from '../../reducer';
import { addReview, deleteReview, editReview, getAllReviews, } from '../../api';

// export const GetAllReviews = (onError) => {
//     return dispatch => {
//         dispatch(allReviewsLoading())
//         getAllReviews().then(
//             response => {
//                 if (response.status === 200) {
//                     dispatch(allReviewsSuccess(
//                         response.data,
//                     ));

//                 }
//                 else {
//                     dispatch(allReviewsFailure(response?.data?.message || 'Something Went Wrong'));
//                     if (onError) {
//                         onError(response?.data?.message || 'Something Went Wrong')
//                     }
//                 }
//             }, error => {
//                 dispatch(allReviewsFailure(error?.message || 'Login failed'));
//                 if (onError) {
//                     onError(error?.message || 'Something Went Wrong')
//                 }
//             }
//         )
//     }
// };

export const GetAllReviews = (onError) => {
    return dispatch => {
      dispatch(allReviewsLoading());
  
      getAllReviews().then(
        response => {
          if (response.status === 200) {
            // Generate slug for each service
            const reviewsWithSlug = response.data.map((item) => ({
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
export const GetAllReviewsById = (id, onError) => {
    return dispatch => {
        dispatch(reviewByIDLoading())
        getAllReviews().then(
            response => {
                if (response.status === 200) {
                    const find = response.data.find((item) => item?.id === id);
                    dispatch(reviewByIDSuccess(
                        find
                    ));

                }
                else {
                    dispatch(reviewByIDFailure(response?.data?.message || 'Login failed'));
                    if (onError) {
                        onError(response?.data?.message || 'Something Went Wrong')
                    }
                }
            }, error => {
                dispatch(reviewByIDFailure(error?.message || 'Login failed'));
                if (onError) {
                    onError(error?.message || 'Something Went Wrong')
                }
            }
        )
    }
};
export const AddReview = (ReviewBody, moveToNext, onError) => {
    return dispatch => {
        dispatch(addReviewLoading())
        addReview(ReviewBody).then(
            response => {
                if (response.status === 200 || response.status === 201) {
                    dispatch(addReviewSuccess(
                        response.data,
                    ));
                    if (moveToNext) {
                        moveToNext()
                    }
                }
                else {
                    dispatch(addReviewFailure(response?.data?.message || 'Login failed'));
                    if (onError) {
                        onError(response?.data?.message || 'Something Went Wrong')
                    }
                }
            }, error => {
                if (onError) {
                    onError(error?.message || 'Something Went Wrong')
                }
                dispatch(addReviewFailure(error?.message || 'Login failed'));
            }
        )
    }
};
export const EditReview = (ReviewBody, moveToNext, onError) => {
    return dispatch => {
        dispatch(editReviewLoading())
        editReview(ReviewBody).then(
            response => {
                if (response.status === 200 || response.status === 201) {
                    dispatch(editReviewSuccess(
                        response.data,
                    ));
                    if (moveToNext) {
                        moveToNext()
                    }
                }
                else {
                    dispatch(editReviewFailure(response?.data?.message || 'Login failed')); if (onError) {
                        onError(response?.data?.message || 'Something Went Wrong')
                    }
                }
            }, error => {
                if (onError) {
                    onError(error?.message || 'Something Went Wrong')
                }
                dispatch(editReviewFailure(error?.message || 'Login failed'));
            }
        )
    }
};
export const DeleteReview = (ReviewId, onError) => {
    return dispatch => {
        dispatch(removeReviewLoading())
        deleteReview(ReviewId).then(
            response => {
                if (response.status === 200) {
                    dispatch(removeReviewSuccess(
                        ReviewId,
                    ));

                }
                else {
                    dispatch(removeReviewFailure(response?.data?.message || 'Login failed'));
                    if (onError) {
                        onError(response?.data?.message || 'Something Went Wrong')
                    }
                }
            }, error => {
                if (onError) {
                    onError(error?.message || 'Something Went Wrong')
                }
                dispatch(removeReviewFailure(error?.message || 'Login failed'));
            }
        )
    }
};