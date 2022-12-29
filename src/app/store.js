import { configureStore } from "@reduxjs/toolkit";
import { sessionSlice } from "../utils/sessionSlice";

export const store = configureStore({
  reducer: {
    session: sessionSlice.reducer,
  },
});
