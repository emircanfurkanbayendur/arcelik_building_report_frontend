import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { postRoleAuthority, getRoleAuthority } from '../../api/Role'
const initialState = {
    items: [],
    getDatasIsPending: false,
    getDatasIsRejected: null,
    updateRolePending:false,
    updateRoleIsRejected:null,
    updateRoleIsAccepted:"false"
}
export const getDatasAsync = createAsyncThunk('reduxExample/getDatasAsync', async () => {

    return await getRoleAuthority();

})
export const postDatasAsync = createAsyncThunk('reduxExample/postDatasAsync', async (data) => {


    let role = Number(data.role);
    let authority = Number(data.authority);
    let result = await postRoleAuthority(role, authority)
    return result;

})
export const reduxRoleSlice = createSlice({
    name: 'reduxRole',
    initialState,
    reducers: {

    },
    extraReducers: {


        [getDatasAsync.fulfilled]: (state, action) => {
            state.items = action.payload
            state.getDatasIsPending = false;
            state.getDatasIsRejected=null;
        },
        [getDatasAsync.pending]: (state, action) => {
            state.getDatasIsPending = true;
            state.getDatasIsRejected=null;
        },
        [getDatasAsync.rejected]: (state, action) => {
            state.getDatasIsPending = false;
            state.getDatasIsRejected = action.error.message;
        },
        ///////////////////////////////////
        [postDatasAsync.fulfilled]: (state, action) => {
          
            state.items.push(action.payload)
            state.updateRolePending = false;
            state.updateRoleIsRejected=null
            state.updateRoleIsAccepted="true";
        },
        [postDatasAsync.pending]: (state, action) => {
            state.updateRolePending = true;
            state.updateRoleIsRejected=null
        },
        [postDatasAsync.rejected]: (state, action) => {
            state.updateRolePending = false;
            state.updateRoleIsRejected = action.error.message;
        },
    },
})



export default reduxRoleSlice.reducer