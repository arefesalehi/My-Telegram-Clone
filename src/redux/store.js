import {configureStore} from "@reduxjs/toolkit";
import sidebarContactReducer from "./slices/sidebarContacts";
import messageReducer from "./slices/message";
import userProfileReducer from "./slices/userProfile";

export const store = configureStore({
    reducer: {
        sidebarContact: sidebarContactReducer,
        message: messageReducer,
        userProfile: userProfileReducer
    }
});
