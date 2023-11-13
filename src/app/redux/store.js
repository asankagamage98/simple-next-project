"use client"

import { configureStore } from "@reduxjs/toolkit";
import registerslice from './features/Auth/registerSlice';


export const store = configureStore({
    reducer:{
        auth:registerslice
    }
});
