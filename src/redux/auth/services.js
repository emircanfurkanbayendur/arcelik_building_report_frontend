import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const USER_ENDPOINT_URL = `${process.env.REACT_APP_BASE_URL}/api/User`;

export const postUserAsync = createAsyncThunk(
    'auth/postUserAsync',

    async (user, { rejectWithValue }) => {
        try {
            const res = await axios.post(`${USER_ENDPOINT_URL}`, user);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const postAuthenticateAsync = createAsyncThunk(
    'auth/postAuthenticateAsync',

    async (user, { rejectWithValue }) => {
        try {
            const res = await axios.post(
                `${USER_ENDPOINT_URL}/authenticate`,
                user
            );
            return res.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const postVerifyTokenAsync = createAsyncThunk(
    'auth/postVerifyTokenAsync',
    async (token, { rejectWithValue }) => {
        try {
            const res = await axios.post(
                `${process.env.REACT_APP_BASE_URL}/verifyToken?token=` + token
            );
            return res.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const postForgotPasswordAsync = createAsyncThunk(
    'auth/postVerifyTokenAsync',
    async (mail, { rejectWithValue }) => {
        try {
            const res = await axios.post(
                `${process.env.REACT_APP_BASE_URL}/api/User/ForgotPassword?mail=` +
                    mail
            );
            return res.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);
