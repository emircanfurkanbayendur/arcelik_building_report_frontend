import { createSlice } from '@reduxjs/toolkit';
import { postUserAsync, postAuthenticateAsync } from './services';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        token: null,
        isLoading: false,
        postUser: {
            status: 'idle',
            error: null,
        },
        postAuthenticate: {
            status: 'idle',
            error: null,
        },
    },
    reducers: {
        clearErrors: (state) => {
            state.postUser = {
                status: 'idle',
                error: null,
            };
            state.postAuthenticate = {
                status: 'idle',
                error: null,
            };
            state.isLoading = false;
        },
    },
    extraReducers: {
        // post user
        [postUserAsync.pending]: (state, action) => {
            state.isLoading = true;
            state.postUser.error = null;
            state.postUser.status = 'loading';
        },
        [postUserAsync.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.postUser.status = 'succeeded';
            state.user = action.payload;
        },
        [postUserAsync.rejected]: (state, action) => {
            state.isLoading = false;
            state.postUser.status = 'failed';
            state.postUser.error = action.payload.Message;
        },
        // post authenticate
        [postAuthenticateAsync.pending]: (state, action) => {
            state.isLoading = true;
            state.postAuthenticate.error = null;
            state.postAuthenticate.status = 'loading';
        },
        [postAuthenticateAsync.fulfilled]: (state, action) => {
            state.postAuthenticate.status = 'succeeded';
            state.user = action.payload;
            state.token = action.payload.token;
        },
        [postAuthenticateAsync.rejected]: (state, action) => {
            state.isLoading = false;
            state.postAuthenticate.status = 'failed';
            state.postAuthenticate.error = action.payload.Message;
        },
    },
});

export const userSelector = (state) => state.auth.user;
export const tokenSelector = (state) => state.auth.token;
export const isVerificationRequiredSelector = (state) =>
    state.auth.isVerificationRequired;
export const isLoadingSelector = (state) => state.auth.isLoading;
export const postUserSelector = (state) => state.auth.postUser;
export const postAuthenticateSelector = (state) => state.auth.postAuthenticate;

export const { clearErrors } = authSlice.actions;

export default authSlice.reducer;
