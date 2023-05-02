import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlices";

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
