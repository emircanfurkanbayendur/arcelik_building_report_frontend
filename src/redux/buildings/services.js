import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BUILDING_ENDPOINT_URL = `${process.env.REACT_APP_BASE_URL}/api/Building`;

export const getBuildingsAsync = createAsyncThunk(
    'buildings/getBuildingsAsync',
    async (_, { rejectWithValue }) => {
        try {
            const res = await axios.get(`${BUILDING_ENDPOINT_URL}`);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const postBuildingAsync = createAsyncThunk(
    'buildings/postBuildingAsync',

    async (building, { rejectWithValue }) => {
        try {
            const res = await axios.post(`${BUILDING_ENDPOINT_URL}`, building);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const getBuildingByCodeAsync = createAsyncThunk(
    'buildings/getBuildingByCodeAsync',

    async (code, { rejectWithValue }) => {
        try {
            const res = await axios.post(
                `${BUILDING_ENDPOINT_URL}/code/${code}`
            );
            return res.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);
