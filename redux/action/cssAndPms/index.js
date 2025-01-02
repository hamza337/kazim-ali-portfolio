
import {
    getLookUpLoading, getLookUpFailure, getLookUpSuccess,
    editLookupLoading, editLookupFailure, editLookupSuccess,
    cssAndPmsByIDLoading, cssAndPmsByIDFailure, cssAndPmsByIDSuccess,
    allCssAndPmsFailure, allCssAndPmsSuccess, allCssAndPmsLoading,
    addCssAndPmsFailure, addCssAndPmsSuccess, addCssAndPmsLoading,
    editCssAndPmsFailure, editCssAndPmsSuccess, editCssAndPmsLoading,
    removeCssAndPmsFailure, removeCssAndPmsSuccess, removeCssAndPmsLoading,
} from '../../reducer';
import { addCSS, deleteCSS, editCSS, editLookup, getAllCSS, getAllLookUps, } from '../../api';

// export const GetAllCSS = (onError) => {
//     return dispatch => {

//         dispatch(allCssAndPmsLoading())
//         getAllCSS().then(
//             response => {
//                 console.log("rrrrrrrr", response)
//                 if (response.status === 200) {
//                     dispatch(allCssAndPmsSuccess(
//                         response.data,
//                     ));

//                 }
//                 else {
//                     dispatch(allCssAndPmsFailure(response?.data?.message || 'Login failed'));
//                     if (onError) {
//                         onError(response?.data?.message || 'Something Went Wrong')
//                     }
//                 }
//             }, error => {

//                 console.log("error", error)
//                 if (onError) {
//                     onError(error?.message || 'Something Went Wrong')
//                 }
//                 dispatch(allCssAndPmsFailure(error?.message || 'Login failed'));
//             }
//         )
//     }
// };

export const GetAllCSS = (onError) => {
    return dispatch => {
      dispatch(allCssAndPmsLoading());
  
      getAllCSS().then(
        response => {
          if (response.status === 200) {
            // Generate slug for each service
            const pmsWithSlug = response.data.map((item) => ({
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

export const GetAllCSSANDPMSById = (id, onError) => {
    return dispatch => {
        dispatch(cssAndPmsByIDLoading())
        getAllCSS().then(
            response => {
                if (response.status === 200) {
                    const find = response.data.find((item) => item?.id === id);
                    dispatch(cssAndPmsByIDSuccess(
                        find
                    ));

                }
                else {
                    dispatch(cssAndPmsByIDFailure(response?.data?.message || 'Login failed'));
                    if (onError) {
                        onError(response?.data?.message || 'Something Went Wrong')
                    }
                }
            }, error => {
                dispatch(cssAndPmsByIDFailure(error?.message || 'Login failed'));
                if (onError) {
                    onError(error?.message || 'Something Went Wrong')
                }
            }
        )
    }
};
export const AddCSS = (cssBody, moveToNext, onError) => {
    return dispatch => {
        dispatch(addCssAndPmsLoading())
        addCSS(cssBody).then(
            response => {

                if (response.status === 200 || response.status === 201) {
                    dispatch(GetAllCSS());
                    if (moveToNext) {
                        moveToNext()
                    }
                }
                else {
                    dispatch(addCssAndPmsFailure(response?.data?.message || 'Login failed'));
                    if (onError) {
                        onError(response?.data?.message || 'Something Went Wrong')
                    }
                }
            }, error => {
                if (onError) {
                    onError(error?.message || 'Something Went Wrong')
                }
                dispatch(addCssAndPmsFailure(error?.message || 'Login failed'));
            }
        )
    }
};
export const EditCSS = (cssBody, moveToNext, onError) => {
    return dispatch => {
        dispatch(editCssAndPmsLoading())
        editCSS(cssBody).then(
            response => {
                if (response.status === 200 || response.status === 201) {
                    dispatch(editCssAndPmsSuccess(response));
                    dispatch(GetAllCSS());
                    if (moveToNext) {
                        moveToNext()
                    }
                }
                else {
                    dispatch(editCssAndPmsFailure(response?.data?.message || 'Login failed'));
                    if (onError) {
                        onError(response?.data?.message || 'Something Went Wrong')
                    }
                }
            }, error => {
                if (onError) {
                    onError(error?.message || 'Something Went Wrong')
                }
                dispatch(editCssAndPmsFailure(error?.message || 'Login failed'));
            }
        )
    }
};
export const DeleteCSS = (cssId, onError) => {
    return dispatch => {
        dispatch(removeCssAndPmsLoading())
        deleteCSS(cssId).then(
            response => {
                if (response.status === 200) {
                    dispatch(removeCssAndPmsSuccess(
                        cssId
                    ));

                }
                else {
                    dispatch(removeCssAndPmsFailure(response?.data?.message || 'Login failed'));
                    if (onError) {
                        onError(response?.data?.message || 'Something Went Wrong')
                    }
                }
            }, error => {
                if (onError) {
                    onError(error?.message || 'Something Went Wrong')
                }
                dispatch(removeCssAndPmsFailure(error?.message || 'Login failed'));
            }
        )
    }
};

export const GetAllLOOKUPS = (onError) => {
    return dispatch => {

        dispatch(getLookUpLoading())
        getAllLookUps().then(
            response => {
                if (response.status === 200) {
                    dispatch(getLookUpSuccess(
                        response.data,
                    ));

                }
                else {
                    dispatch(getLookUpFailure(response?.data?.message || 'Login failed'));
                    if (onError) {
                        onError(response?.data?.message || 'Something Went Wrong')
                    }
                }
            }, error => {

                if (onError) {
                    onError(error?.message || 'Something Went Wrong')
                }
                dispatch(getLookUpFailure(error?.message || 'Login failed'));
            }
        )
    }
};

export const EditLOOKUPS = (cssBody, moveToNext, onError) => {
    return dispatch => {
        dispatch(editLookupLoading())
        editLookup(cssBody).then(
            response => {
                if (response.status === 200 || response.status === 201) {
                    dispatch(GetAllLOOKUPS());
                    if (moveToNext) {
                        moveToNext()
                    }
                }
                else {
                    dispatch(editLookupFailure(response?.data?.message || 'Login failed'));
                    if (onError) {
                        onError(response?.data?.message || 'Something Went Wrong')
                    }
                }
            }, error => {
                if (onError) {
                    onError(error?.message || 'Something Went Wrong')
                }
                dispatch(editLookupFailure(error?.message || 'Login failed'));
            }
        )
    }
};