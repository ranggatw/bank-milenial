import { configureStore } from "@reduxjs/toolkit";
import registerUserSlice from "./registerUserSlice";

export const store = configureStore({
  reducer: {
    nasabah: registerUserSlice,
  },
});
