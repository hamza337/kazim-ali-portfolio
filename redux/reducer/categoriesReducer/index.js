import { createSlice } from '@reduxjs/toolkit';


const categorySlice = createSlice({
    name: 'category',
    initialState: {
        allCategories: [],
        getLoading: false,
        getError: null,
        addLoading: false,
        addError: null,
        deleteLoading: false,
        deleteError: null,
        editLoading: false,
        editError: null
    },
    reducers: {
        allCategoriesLoading: (state) => {
            state.allCategories = [];
            state.getLoading = true;
            state.getError = null;
        },
        allCategoriesSuccess: (state, action) => {
            state.allCategories = action.payload;
            state.getLoading = false;
            state.getError = null;

        },
        allCategoriesFailure: (state, action) => {
            state.allCategories = [];
            state.getLoading = false;
            state.getError = action.payload;
        },
        addCategoryLoading: (state) => {

            state.addLoading = true;
            state.addError = null;
        },
        addCategorySuccess: (state, action) => {
            let all = state.allCategories;
            all.push(action.payload)
            state.allCategories = all;
            state.addLoading = false;
            state.addError = null;

        },
        addCategoryFailure: (state, action) => {

            state.addLoading = false;
            state.addError = action.payload;
        },
        editCategoryLoading: (state) => {
            state.addLoading = true;
            state.editLoading = true;
            state.editError = null;
        },
        editCategorySuccess: (state, action) => {
            let all_ = state.allCategories;
            for (let i = 0; i < all_.length; i++) {
                if (all_[i].id === action.payload.id) {
                    all_[i] = action.payload
                }
            }
            state.addLoading = false;
            state.allCategories = all_;
            state.editLoading = false;
            state.editError = null;

        },
        editCategoryFailure: (state, action) => {
            state.addLoading = false;
            state.editLoading = false;
            state.editError = action.payload;
        },
        removeCategoryLoading: (state) => {

            state.deleteLoading = true;
            state.deleteError = null;
        },
        removeCategorySuccess: (state, action) => {
            let _all_ = state.allCategories;
            for (let i = 0; i < _all_.length; i++) {
                if (_all_[i].id === action.payload) {
                    _all_.splice(i, 1)
                }
            }
            state.allCategories = _all_;
            state.deleteLoading = false;
            state.deleteError = null;

        },
        removeCategoryFailure: (state, action) => {

            state.deleteLoading = false;
            state.deleteError = action.payload;
        },
    },
});

export const {
    allCategoriesFailure, allCategoriesSuccess, allCategoriesLoading,
    addCategoryFailure, addCategorySuccess, addCategoryLoading,
    editCategoryFailure, editCategorySuccess, editCategoryLoading,
    removeCategoryFailure, removeCategorySuccess, removeCategoryLoading, } = categorySlice.actions;
export default categorySlice.reducer;

