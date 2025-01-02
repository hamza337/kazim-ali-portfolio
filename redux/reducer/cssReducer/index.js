import { createSlice } from '@reduxjs/toolkit';


const cssSlice = createSlice({
    name: 'cssAndPms',
    initialState: {
        allCssAndPms: [],
        getLoading: false,
        getError: null,
        cssAndPmsByID: null,
        loading: false,
        error: null,
        addLoading: false,
        addError: null,
        deleteLoading: false,
        deleteError: null,
        editLoading: false,
        editError: null,

        getLookUps: null,
        getLoading: false,
        getSuccess: false,

        editLookUpLoading: false,
        editLookUpSuccess: false,
        editLookUpError: null,
    },
    reducers: {
        getLookUpLoading: (state) => {
            state.getLookUps = null;
            state.getLoading = true;
            state.getSuccess = false;
        },
        getLookUpSuccess: (state, action) => {
            state.getLookUps = action.payload;
            state.getLoading = false;
            state.getSuccess = true;
        },
        getLookUpFailure: (state, action) => {

            state.getLoading = false;
            state.getSuccess = false;
        },
        editLookupLoading: (state) => {
            state.editLookUpLoading = true;
            state.editLookUpSuccess = false;
            state.editLookUpError = null;

        },
        editLookupSuccess: (state, action) => {
            state.editLookUpLoading = false;
            state.editLookUpSuccess = true;
            state.editLookUpError = null;
            state.getLookUps = action.payload

        },
        editLookupFailure: (state, action) => {
            state.editLookUpLoading = false;
            state.editLookUpSuccess = false;
            state.editLookUpError = action.payload;

        },
        cssAndPmsByIDLoading: (state) => {
            state.cssAndPmsByID = null;
            state.loading = true;
            state.error = null;
        },
        cssAndPmsByIDSuccess: (state, action) => {
            state.cssAndPmsByID = action.payload;
            state.loading = false;
            state.error = null;

        },
        cssAndPmsByIDFailure: (state, action) => {
            state.cssAndPmsByID = null;
            state.loading = false;
            state.error = action.payload;
        },
        allCssAndPmsLoading: (state) => {
            state.allCssAndPms = [];
            state.getLoading = true;
            state.getError = null;
        },
        allCssAndPmsSuccess: (state, action) => {
            state.allCssAndPms = action.payload;
            state.getLoading = false;
            state.getError = null;

        },
        allCssAndPmsFailure: (state, action) => {
            state.allCssAndPms = [];
            state.getLoading = false;
            state.getError = action.payload;
        },
        addCssAndPmsLoading: (state) => {

            state.addLoading = true;
            state.addError = null;
        },
        addCssAndPmsSuccess: (state, action) => {
            let all = state.allCssAndPms;
            all.push(action.payload)
            state.allCssAndPms = all;
            state.addLoading = false;
            state.addError = null;

        },
        addCssAndPmsFailure: (state, action) => {

            state.addLoading = false;
            state.addError = action.payload;
        },
        editCssAndPmsLoading: (state) => {
            state.addLoading = true;
            state.editLoading = true;
            state.editError = null;
        },
        editCssAndPmsSuccess: (state, action) => {
            // let all_ = state.allCssAndPms;
            // for (let i = 0; i < all_.length; i++) {
            //     if (all_[i].id === action.payload.id) {
            //         all_[i] = action.payload
            //     }
            // }
            state.addLoading = false;
            // state.allCssAndPms = all_;
            state.editLoading = false;
            state.editError = null;

        },
        editCssAndPmsFailure: (state, action) => {
            state.addLoading = false;
            state.editLoading = false;
            state.editError = action.payload;
        },
        removeCssAndPmsLoading: (state) => {

            state.deleteLoading = true;
            state.deleteError = null;
        },
        removeCssAndPmsSuccess: (state, action) => {
            let _all_ = state.allCssAndPms;
            for (let i = 0; i < _all_.length; i++) {
                if (_all_[i].id === action.payload) {
                    _all_.splice(i, 1)
                }
            }
            state.allCssAndPms = _all_;
            state.deleteLoading = false;
            state.deleteError = null;

        },
        removeCssAndPmsFailure: (state, action) => {

            state.deleteLoading = false;
            state.deleteError = action.payload;
        },
    },
});

export const {
    getLookUpLoading, getLookUpFailure, getLookUpSuccess,
    editLookupLoading, editLookupFailure, editLookupSuccess,
    cssAndPmsByIDLoading, cssAndPmsByIDFailure, cssAndPmsByIDSuccess,
    allCssAndPmsFailure, allCssAndPmsSuccess, allCssAndPmsLoading,
    addCssAndPmsFailure, addCssAndPmsSuccess, addCssAndPmsLoading,
    editCssAndPmsFailure, editCssAndPmsSuccess, editCssAndPmsLoading,
    removeCssAndPmsFailure, removeCssAndPmsSuccess, removeCssAndPmsLoading, } = cssSlice.actions;
export default cssSlice.reducer;

