import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getUsers,updateUserRole } from '../../api/user'
console.log("calıstı123123")
const initialState = {
    items: [],
    getUsersIsPending: false,
    getUsersIsRejected: null,
    updateRolePending:false,
    updateRoleIsRejected:false
}
export const getUsersDatasAsync = createAsyncThunk('reduxExample/getUsersDatasAsync', async () => {
    console.log("calıstı")
   return await getUsers();
   
})
export const putUsersDatasAsync = createAsyncThunk('reduxExample/putUsersDatasAsync', async (data) => {
    
    await updateUserRole(data)
 
 return getUsers();

 

})
export const reduxUsersSlice = createSlice({
    name: 'reduxUsers',
    initialState,
    reducers: {

    },
    extraReducers: {


        [getUsersDatasAsync.fulfilled]: (state, action) => {
            state.items = action.payload
            state.getUsersIsPending = false;
        },
        [getUsersDatasAsync.pending]: (state, action) => {
            state.getUsersIsPending = true;
            
        },
        [getUsersDatasAsync.rejected]: (state, action) => {
            
            state.getUsersIsPending = false;
            state.getUsersIsRejected = action.error.message;
        },
        [putUsersDatasAsync.fulfilled]: (state, action) => {

            state.items = action.payload
            state.updateRolePending = false;
        },
        [putUsersDatasAsync.pending]: (state, action) => {

            state.updateRolePending = true;

        },
        [putUsersDatasAsync.rejected]: (state, action) => {

            state.updateRolePending = false;
            state.updateRoleIsRejected = action.error.message;

        },
    },
})



export default reduxUsersSlice.reducer