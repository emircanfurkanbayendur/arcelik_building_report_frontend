import { createSlice } from '@reduxjs/toolkit';
import {
    getBuildingByCodeAsync,
    getBuildingsAsync,
    postBuildingAsync,
} from './services';

export const buildingsSlice = createSlice({
    name: 'buildings',
    initialState: {
        buildings: [],
        selectedBuilding: null,
        isLoading: false,
        getBuildings: {
            status: 'idle',
            error: null,
        },
        postBuilding: {
            status: 'idle',
            error: null,
        },
        getBuildingByCode: {
            status: 'idle',
            error: null,
        },
    },
    reducers: {
        clearErrors: (state) => {
            state.getBuildings = {
                status: 'idle',
                error: null,
            };
            state.postBuilding = {
                status: 'idle',
                error: null,
            };
            state.isLoading = false;
        },

        addNewBuilding: (state, action) => {
            state.buildings.push(action.payload);
        },
    },
    extraReducers: {
        // get buildings
        [getBuildingsAsync.pending]: (state, action) => {
            state.getBuildings.error = null;
            state.getBuildings.status = 'loading';
        },
        [getBuildingsAsync.fulfilled]: (state, action) => {
            state.getBuildings.status = 'succeeded';
            state.buildings = action.payload;
        },
        [getBuildingsAsync.rejected]: (state, action) => {
            state.getBuildings.status = 'failed';
            state.getBuildings.error = action.payload.Message;
        },
        // post building
        [postBuildingAsync.pending]: (state, action) => {
            state.postBuilding.error = null;
            state.postBuilding.status = 'loading';
        },
        [postBuildingAsync.fulfilled]: (state, action) => {
            state.postBuilding.status = 'succeeded';
            buildingsSlice.reducers.addNewBuilding(state, {
                payload: action.payload,
            });
        },
        [postBuildingAsync.rejected]: (state, action) => {
            state.postBuilding.status = 'failed';
            state.postBuilding.error = action.payload.Message;
        },
        // get building by code
        [getBuildingByCodeAsync.pending]: (state, action) => {
            state.getBuildingByCode.error = null;
            state.getBuildingByCode.status = 'loading';
        },
        [getBuildingByCodeAsync.fulfilled]: (state, action) => {
            state.getBuildingByCode.status = 'succeeded';
            state.selectedBuilding = action.payload;
        },
        [getBuildingByCodeAsync.rejected]: (state, action) => {
            state.getBuildingByCode.status = 'failed';
            state.getBuildingByCode.error = action.payload.Message;
        },
    },
});

export const buildingsSelector = (state) => state.buildings.buildings;
export const selectedBuildingSelector = (state) =>
    state.buildings.selectedBuilding;
export const isLoadingSelector = (state) => state.buildings.isLoading;
export const getBuildingsSelector = (state) => state.buildings.getBuildings;
export const postBuildingSelector = (state) => state.buildings.postBuilding;
export const getBuildingByCodeSelector = (state) =>
    state.buildings.getBuildingByCode;

export default buildingsSlice.reducer;
