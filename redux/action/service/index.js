
import {
    servicesByIDLoading, servicesByIDFailure, servicesByIDSuccess,
    allServicesFailure, allServicesSuccess, allServicesLoading,
    addServiceFailure, addServiceSuccess, addServiceLoading,
    editServiceFailure, editServiceSuccess, editServiceLoading,
    removeServiceFailure, removeServiceSuccess, removeServiceLoading,
} from '../../reducer';
import { addService, deleteService, editService, getAllServices, } from '../../api';

// export const GetAllServices = (onError) => {
//     return dispatch => {
//         dispatch(allServicesLoading())
//         getAllServices().then(
//             response => {
//                 if (response.status === 200) {
//                     dispatch(allServicesSuccess(
//                         response.data,
//                     ));
//                 }
//                 else {
//                     dispatch(allServicesFailure(response?.data?.message || 'Login failed')); if (onError) {
//                         onError(response?.data?.message || 'Something Went Wrong')
//                     }
//                 }
//             }, error => {
//                 if (onError) {
//                     onError(error?.message || 'Something Went Wrong')
//                 }
//                 dispatch(allServicesFailure(error?.message || 'Login failed'));
//             }
//         )
//     }
// };

export const GetAllServices = (onError) => {
    return dispatch => {
      dispatch(allServicesLoading());
  
      getAllServices().then(
        response => {
          if (response.status === 200) {
            // Generate slug for each service
            const servicesWithSlug = response.data.map((item) => ({
              ...item,
              slug: item.slug || generateSlug(item.title), // Generate slug from title
            }));
  
            dispatch(allServicesSuccess(servicesWithSlug));
          } else {
            dispatch(allServicesFailure(response?.data?.message || 'Failed to load services'));
            if (onError) {
              onError(response?.data?.message || 'Something went wrong');
            }
          }
        },
        error => {
          if (onError) {
            onError(error?.message || 'Something went wrong');
          }
          dispatch(allServicesFailure(error?.message || 'Failed to load services'));
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

export const GetAllServicesBySlug = (slug, onError) => {
    return (dispatch) => {
      dispatch(servicesByIDLoading());
      getAllServices().then(
        (response) => {
          if (response.status === 200) {
            // Find the service based on the slug
            const service = response.data.find(
              (item) => item?.slug === slug // Compare using slug
            );
            dispatch(servicesByIDSuccess(service));
          } else {
            dispatch(servicesByIDFailure(response?.data?.message || "Fetching failed"));
            if (onError) {
              onError(response?.data?.message || "Something Went Wrong");
            }
          }
        },
        (error) => {
          if (onError) {
            onError(error?.message || "Something Went Wrong");
          }
          dispatch(servicesByIDFailure(error?.message || "Fetching failed"));
        }
      );
    };
  };

export const GetAllServicesById = (id, onError) => {
    return dispatch => {
        dispatch(servicesByIDLoading())
        getAllServices().then(
            response => {
                if (response.status === 200) {
                    const find = response.data.find((item) => item?.id === id);
                    dispatch(servicesByIDSuccess(
                        find
                    ));

                }
                else {
                    dispatch(servicesByIDFailure(response?.data?.message || 'Login failed')); if (onError) {
                        onError(response?.data?.message || 'Something Went Wrong')
                    }
                }
            }, error => {
                if (onError) {
                    onError(error?.message || 'Something Went Wrong')
                }
                dispatch(servicesByIDFailure(error?.message || 'Login failed'));
            }
        )
    }
};
export const AddService = (ServiceBody, moveToNExt, onError) => {
    return dispatch => {
        dispatch(addServiceLoading())
        addService(ServiceBody).then(
            response => {
                if (response.status === 200 || response.status === 201) {
                    dispatch(addServiceSuccess(
                        response.data,
                    ));
                    if (moveToNExt) {
                        moveToNExt()
                    }
                }
                else {
                    dispatch(addServiceFailure(response?.data?.message || 'Login failed'));
                    if (onError) {
                        onError(response?.data?.message || 'Something Went Wrong')
                    }
                }
            }, error => {
                if (onError) {
                    onError(error?.message || 'Something Went Wrong')
                }
                dispatch(addServiceFailure(error?.message || 'Login failed'));
            }
        )
    }
};
export const EditService = (ServiceBody, moveToNExt, onError) => {
    return dispatch => {
        dispatch(editServiceLoading())
        editService(ServiceBody).then(
            response => {
                if (response.status === 200 || response.status === 201) {
                    dispatch(addServiceSuccess(
                        response.data,
                    ));
                    if (moveToNExt) {
                        moveToNExt()
                    }
                }
                else {
                    dispatch(editServiceFailure(response?.data?.message || 'Login failed'));
                    if (onError) {
                        onError(response?.data?.message || 'Something Went Wrong')
                    }
                }
            }, error => {
                if (onError) {
                    onError(error?.message || 'Something Went Wrong')
                }
                dispatch(editServiceFailure(error?.message || 'Login failed'));
            }
        )
    }
};
export const DeleteService = (ServiceId, onError) => {
    return dispatch => {
        dispatch(removeServiceLoading())
        deleteService(ServiceId).then(
            response => {
                if (response.status === 200) {
                    dispatch(removeServiceSuccess(
                        ServiceId,
                    ));

                }
                else {
                    dispatch(removeServiceFailure(response?.data?.message || 'Login failed'));
                    if (onError) {
                        onError(response?.data?.message || 'Something Went Wrong')
                    }
                }
            }, error => {
                if (onError) {
                    onError(error?.message || 'Something Went Wrong')
                }
                dispatch(removeServiceFailure(error?.message || 'Login failed'));
            }
        )
    }
};

// Helper function to generate slugs
