import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    picture: "",
  },
  reducers: {
    getUser: (state, action) => {
      console.log("action", action.payload);
      state.name = action.payload.name;
      state.picture = action.payload.picture;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { getUser } = userSlice.actions;

export default userSlice.reducer;
