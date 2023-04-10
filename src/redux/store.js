import { configureStore } from "@reduxjs/toolkit";
import { defaultConfig } from "next/dist/server/config-shared";
import  DataSlice  from "./slice/slice_data";
const store = configureStore(
    {
        reducer:{DataSlice}
    }
)
export default store;