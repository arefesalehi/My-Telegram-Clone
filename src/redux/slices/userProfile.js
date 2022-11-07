import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getUserProfile = createAsyncThunk("userProfile/getUserProfile", async () => {
    try {
      const response = await axios({
        url: "http://localhost:7000/friends",
        method: "GET",
      });
      return (response.data);
      } catch (error) {
        console.log(error);
       }
      }
    );

    const initialState = {
      value: [],
    };

    const userProfileSlice = createSlice({
      name: "userProfile",
      initialState,
      extraReducers: {
          [getUserProfile.fulfilled]: (state, action) => {
            state.userProfile = action.payload;
          },
      },
    });

  export default userProfileSlice.reducer;
