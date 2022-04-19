import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataNasabah: {
    // id: "",
    nik: "",
    nasabahName: "",
    placeBirth: "",
    dateBirth: "",
    numberPhone: "",
    email: "",
    nasabahMother: "",
    posNumber: "",
    ktpImg: [],
    signatureImg: null,
    // otp: ""
  },
};

const registerUserSlice = createSlice({
  name: "nasabah",
  initialState,
  reducers: {
    registerNasabah: (state, action) => {
      // state.push(action.payload);
      state.dataNasabah = { ...state.dataNasabah, ...action.payload}
    },
  },
});

export const { registerNasabah } = registerUserSlice.actions;
export default registerUserSlice.reducer;
