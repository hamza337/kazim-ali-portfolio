import { createSlice } from '@reduxjs/toolkit';


const serviceSlice = createSlice({
    name: 'service',
    initialState: {
        allServices: [],
        getLoading: false,
        getError: null,
        serviceByID: null,
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
        servicesByIDLoading: (state) => {
            state.serviceByID = null;
            state.loading = true;
            state.error = null;
        },
        servicesByIDSuccess: (state, action) => {
            state.serviceByID = action.payload;
            state.loading = false;
            state.error = null;

        },
        servicesByIDFailure: (state, action) => {
            state.serviceByID = null;
            state.loading = false;
            state.error = action.payload;
        },
        allServicesLoading: (state) => {
            state.allServices = [];
            state.getLoading = true;
            state.getError = null;
        },
        allServicesSuccess: (state, action) => {
            state.allServices = action.payload;
            state.getLoading = false;
            state.getError = null;

        },
        allServicesFailure: (state, action) => {
            state.allServices = [];
            state.getLoading = false;
            state.getError = action.payload;
        },
        addServiceLoading: (state) => {

            state.addLoading = true;
            state.addError = null;
        },
        addServiceSuccess: (state, action) => {
            let all = state.allServices;
            all.push(action.payload)
            state.allServices = all;
            state.addLoading = false;
            state.addError = null;

        },
        addServiceFailure: (state, action) => {

            state.addLoading = false;
            state.addError = action.payload;
        },
        editServiceLoading: (state) => {
            state.addLoading = true;
            state.editLoading = true;
            state.editError = null;
        },
        editServiceSuccess: (state, action) => {
            let all_ = state.allServices;
            for (let i = 0; i < all_.length; i++) {
                if (all_[i].id === action.payload.id) {
                    all_[i] = action.payload
                }
            }
            state.addLoading = false;
            state.allServices = all_;
            state.editLoading = false;
            state.editError = null;

        },
        editServiceFailure: (state, action) => {
            state.addLoading = false;
            state.editLoading = false;
            state.editError = action.payload;
        },
        removeServiceLoading: (state) => {

            state.deleteLoading = true;
            state.deleteError = null;
        },
        removeServiceSuccess: (state, action) => {
            let _all_ = state.allServices;
            for (let i = 0; i < _all_.length; i++) {
                if (_all_[i].id === action.payload) {
                    _all_.splice(i, 1)
                }
            }
            state.allServices = _all_;
            state.deleteLoading = false;
            state.deleteError = null;

        },
        removeServiceFailure: (state, action) => {

            state.deleteLoading = false;
            state.deleteError = action.payload;
        },
    },
});

export const {
    servicesByIDLoading,servicesByIDFailure,servicesByIDSuccess,
    allServicesFailure, allServicesSuccess, allServicesLoading,
    addServiceFailure, addServiceSuccess, addServiceLoading,
    editServiceFailure, editServiceSuccess, editServiceLoading,
    removeServiceFailure, removeServiceSuccess, removeServiceLoading, } = serviceSlice.actions;
export default serviceSlice.reducer;

