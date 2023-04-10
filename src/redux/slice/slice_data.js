import { createSlice } from "@reduxjs/toolkit";

export const DataSlice = createSlice({
  name: "dataSlice",
  initialState: {
    datas: [],
  },
  reducers: {
    fetchCategories: (state, action) => {
      if (action.payload) {
        state.datas = [...state.datas,action.payload]
      }
    }
  },
});
export const {
  fetchCategories
} = DataSlice.actions;
export default DataSlice.reducer;