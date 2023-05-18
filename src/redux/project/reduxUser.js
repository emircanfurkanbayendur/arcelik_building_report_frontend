import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getUserFromId,updateUser } from '../../api/user'



const initialState = {
    items: [],
    getUserDatasPending: false,
    getUserDatasRejected: null,
    patchUsersDatasPending:false,
    patchUsersDatasRejected:null
}
export const getUserDatasAsync = createAsyncThunk('reduxExample/getUserDatasAsync', async (data) => {
console.log("123")
   return await getUserFromId(data);

})
export const patchUsersDatasAsync = createAsyncThunk('reduxExample/patchUsersDatasAsync', async (data) => {
    console.log(data)
    let id= data.id;
    let firstName =data.firstName;
    let lastName = data.lastName;
    let email = data.email;
    const user = {id,firstName,lastName,email}
  
let result = await updateUser(user)

 return getUserFromId(id);

 

})
export const reduxUserSlice = createSlice({
    name: 'reduxUser',
    initialState,
    reducers: {

    },
    extraReducers: {


        [getUserDatasAsync.fulfilled]: (state, action) => {
           
            state.items = action.payload
            state.getUserDatasPending = false;
        },
        [getUserDatasAsync.pending]: (state, action) => {
           
            state.getUserDatasPending = true;
        },
        [getUserDatasAsync.rejected]: (state, action) => {
           
            state.getUserDatasPending = false;
            state.getUserDatasRejected=action.error.message;
        },
       [patchUsersDatasAsync.fulfilled]: (state, action) => {

        state.items = action.payload
        state.patchUsersDatasPending = false;
        state.patchUsersDatasRejected=null;
        },
        [patchUsersDatasAsync.pending]: (state, action) => {

            state.patchUsersDatasPending = true;
            state.patchUsersDatasRejected=null;
            },
        [patchUsersDatasAsync.rejected]: (state, action) => {

            state.patchUsersDatasPending = false;
           // state.patchUsersDatasRejected="action.error.message";
            
        
            },
    },
})



export default reduxUserSlice.reducer