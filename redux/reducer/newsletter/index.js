import { createSlice } from '@reduxjs/toolkit';


const newsLetterSlice = createSlice({
    name: 'newsLetter',
    initialState: {
        allNewsLetter: [],
        getLoading: false,
        getError: null,

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

        allNewsLetterLoading: (state) => {
            state.allNewsLetter = [];
            state.getLoading = true;
            state.getError = null;
        },
        allNewsLetterSuccess: (state, action) => {
            state.allNewsLetter = action.payload;
            state.getLoading = false;
            state.getError = null;

        },
        allNewsLetterFailure: (state, action) => {
            state.allNewsLetter = [];
            state.getLoading = false;
            state.getError = action.payload;
        },
        addNewsLetterLoading: (state) => {

            state.addLoading = true;
            state.addError = null;
        },
        addNewsLetterSuccess: (state, action) => {
            let all = state.allNewsLetter;
            all.push(action.payload)
            state.allNewsLetter = all;
            state.addLoading = false;
            state.addError = null;

        },
        addNewsLetterFailure: (state, action) => {

            state.addLoading = false;
            state.addError = action.payload;
        },
        editNewsLetterLoading: (state) => {
            state.addLoading = true;
            state.editLoading = true;
            state.editError = null;
        },
        editNewsLetterSuccess: (state, action) => {
            let all_ = state.allNewsLetter;
            for (let i = 0; i < all_.length; i++) {
                if (all_[i].id === action.payload.id) {
                    all_[i] = action.payload
                }
            }
            state.addLoading = false;
            state.allNewsLetter = all_;
            state.editLoading = false;
            state.editError = null;

        },
        editNewsLetterFailure: (state, action) => {
            state.addLoading = false;
            state.editLoading = false;
            state.editError = action.payload;
        },

    },
});

export const {
    allNewsLetterLoading, allNewsLetterSuccess, allNewsLetterFailure,
    addNewsLetterLoading, addNewsLetterSuccess, addNewsLetterFailure,
    editNewsLetterLoading, editNewsLetterSuccess, editNewsLetterFailure
} = newsLetterSlice.actions;
export default newsLetterSlice.reducer;

