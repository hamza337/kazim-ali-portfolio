import axios from 'axios';
import {
    allCategoriesFailure, allCategoriesSuccess, allCategoriesLoading,
    addCategoryFailure, addCategorySuccess, addCategoryLoading,
    editCategoryFailure, editCategorySuccess, editCategoryLoading,
    removeCategoryFailure, removeCategorySuccess, removeCategoryLoading
} from '../../reducer';
import { addCategory, deleteCategory, editCategory, getAllCategories, } from '../../api';

export const GetAllCategories = (onError) => {
    return dispatch => {
        dispatch(allCategoriesLoading())
        getAllCategories().then(
            response => {
                if (response.status === 200) {
                    dispatch(allCategoriesSuccess(
                        response.data,
                    ));

                }
                else {
                    dispatch(allCategoriesFailure(response?.data?.message || 'Login failed'));
                    if (onError) {
                        onError(response?.data?.message || 'Something Went Wrong')
                    }
                }
            }, error => {
                if (onError) {
                    onError(error?.message || 'Something Went Wrong')
                }
                dispatch(allCategoriesFailure(error?.message || 'Login failed'));
            }
        )
    }
};

export const AddCategory = (categoryBody, moveToNext, onError) => {
    return dispatch => {
        dispatch(addCategoryLoading())
        addCategory(categoryBody).then(
            response => {

                if (response.status === 200 || response.status === 201) {
                    dispatch(GetAllCategories());
                    if (moveToNext) {
                        moveToNext()
                    }
                }
                else {
                    dispatch(addCategoryFailure(response?.data?.message || 'Login failed'));
                    if (onError) {
                        onError(response?.data?.message || 'Something Went Wrong')
                    }
                }
            }, error => {
                if (onError) {
                    onError(error?.message || 'Something Went Wrong')
                }
                dispatch(addCategoryFailure(error?.message || 'Login failed'));
            }
        )
    }
};
export const EditCategory = (categoryBody, moveToNext, onError) => {
    return dispatch => {
        dispatch(editCategoryLoading())
        editCategory(categoryBody).then(
            response => {
                if (response.status === 200 || response.status === 201) {
                    dispatch(GetAllCategories());
                    if (moveToNext) {
                        moveToNext()
                    }
                }
                else {
                    dispatch(editCategoryFailure(response?.data?.message || 'Login failed'));
                    if (onError) {
                        onError(response?.data?.message || 'Something Went Wrong')
                    }
                }
            }, error => {
                if (onError) {
                    onError(error?.message || 'Something Went Wrong')
                }
                dispatch(editCategoryFailure(error?.message || 'Login failed'));
            }
        )
    }
};
export const DeleteCategory = (categoryId, onError) => {
    return dispatch => {
        dispatch(removeCategoryLoading())
        deleteCategory(categoryId).then(
            response => {
                if (response.status === 200) {
                    dispatch(removeCategorySuccess(
                        categoryId
                    ));

                }
                else {
                    dispatch(removeCategoryFailure(response?.data?.message || 'Login failed'));
                    if (onError) {
                        onError(response?.data?.message || 'Something Went Wrong')
                    }
                }
            }, error => {
                if (onError) {
                    onError(error?.message || 'Something Went Wrong')
                }
                dispatch(removeCategoryFailure(error?.message || 'Login failed'));
            }
        )
    }
};