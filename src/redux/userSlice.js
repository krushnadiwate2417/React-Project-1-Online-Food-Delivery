import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userStatus: "",
    initialLetter: "",
    image: "",
  },
  reducers: {
    changeStatus: (state) => {
      state.userStatus = "Loggedin";
    },
    initialLetter: (state, action) => {
      state.initialLetter = action.payload;
    },
    image: (state, action) => {
      state.image = action.payload;
    },
  },
});

export const { changeStatus, initialLetter, image } = userSlice.actions;

export default userSlice.reducer;
