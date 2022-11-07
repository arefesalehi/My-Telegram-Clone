import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
export const getSidebarContacts= createAsyncThunk('contacts/getSidebarContacts', async()=>{

    try {
        const response = await axios ({
            url:"http://localhost:7000/profile",
            method: 'GET'
        })
        return(response.data.friends)
    }catch (error) {
      console.log(error);
    }
  });
 

    const initialState = {
        sidebarContacts: [],   
    }

    const sidebarContactSlice = createSlice({
        name: 'sidebarContacts',
        initialState,
        extraReducers: {
            [getSidebarContacts.fulfilled]: (state,action) => {
                state.sidebarContacts = action.payload;
            }, 
        },
    })

    export default sidebarContactSlice.reducer