import authReducer from "./features/auth/authSlice";
import productReducer from "./features/product/productSlice";
const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
  },
});

export default store;
