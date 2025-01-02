import { createSlice } from '@reduxjs/toolkit';


const reviewSlice = createSlice({
    name: 'review',
    initialState: {
        allReviews: [],
        getLoading: false,
        getError: null,
        reviewById: null,
        loading: false,
        error: null,
        addLoading: false,
        addError: null,
        deleteLoading: false,
        deleteError: null,
        editLoading: false,
        editError: null
    },
    reducers: {
        reviewByIDLoading: (state) => {
            state.reviewById = null;
            state.loading = true;
            state.error = null;
        },
        reviewByIDSuccess: (state, action) => {
            state.reviewById = action.payload;
            state.loading = false;
            state.error = null;

        },
        reviewByIDFailure: (state, action) => {
            state.reviewById = null;
            state.loading = false;
            state.error = action.payload;
        },
        allReviewsLoading: (state) => {
            state.allReviews = [];
            state.getLoading = true;
            state.getError = null;
        },
        allReviewsSuccess: (state, action) => {
            state.allReviews = action.payload;
            state.getLoading = false;
            state.getError = null;

        },
        allReviewsFailure: (state, action) => {
            state.allReviews = [];
            state.getLoading = false;
            state.getError = action.payload;
        },
        addReviewLoading: (state) => {

            state.addLoading = true;
            state.addError = null;
        },
        addReviewSuccess: (state, action) => {
            let all = state.allReviews;
            all.push(action.payload)
            state.allReviews = all;
            state.addLoading = false;
            state.addError = null;

        },
        addReviewFailure: (state, action) => {

            state.addLoading = false;
            
            state.addError = action.payload;
        },
        editReviewLoading: (state) => {

            state.editLoading = true;
            state.addLoading = true;
            state.editError = null;
        },
        editReviewSuccess: (state, action) => {
            let all_ = state.allReviews;
            for (let i = 0; i < all_.length; i++) {
                if (all_[i].id === action.payload.id) {
                    all_[i] = action.payload
                }
            }
            state.allReviews = all_;
            state.editLoading = false;
            state.addLoading = false;
            state.editError = null;

        },
        editReviewFailure: (state, action) => {

            state.editLoading = false;
            state.addLoading = false;
            state.editError = action.payload;
        },
        removeReviewLoading: (state) => {

            state.deleteLoading = true;
            state.deleteError = null;
        },
        removeReviewSuccess: (state, action) => {
            let _all_ = state.allReviews;
            for (let i = 0; i < _all_.length; i++) {
                if (_all_[i].id === action.payload) {
                    _all_.splice(i, 1)
                }
            }
            state.allReviews = _all_;
            state.deleteLoading = false;
            state.deleteError = null;

        },
        removeReviewFailure: (state, action) => {

            state.deleteLoading = false;
            state.deleteError = action.payload;
        },
    },
});

export const {
    reviewByIDFailure, reviewByIDSuccess, reviewByIDLoading,
    allReviewsFailure, allReviewsSuccess, allReviewsLoading,
    addReviewFailure, addReviewSuccess, addReviewLoading,
    editReviewFailure, editReviewSuccess, editReviewLoading,
    removeReviewFailure, removeReviewSuccess, removeReviewLoading, } = reviewSlice.actions;
export default reviewSlice.reducer;

