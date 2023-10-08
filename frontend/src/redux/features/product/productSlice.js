import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productService from "./productService";
import { toast } from "react-toastify";

const initialState = {
  product: null,
  products: [],
  isError: false,
  isSuccess: false,
  message: "",
};

// Create New Product
export const createProduct = createAsyncThunk(
  "products/create",
  async (formData, thunkAPI) => {
    try {
      return await productService.createProduct(formData);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// GET ALL PRODUCTS
export const getAllProducts = createAsyncThunk(
  "products/getAll",
  async (_, thunkAPI) => {
    try {
      return await productService.getAllProducts();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    CALC_STORE(state, action) {
      console.log("STORE VALUE");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.isSuccess = true;
      state.isError = false;
      console.log(action.payload);
      state.products.push(action.payload);
      toast.success("Product added successfully");
    });
    builder.addCase(createProduct.rejected, (state, action) => {
      state.isError = true;
      state.message = action.payload;
      toast.error(action.payload);
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.isSuccess = true;
      state.isError = false;
      state.products = action.payload;
    });
    builder.addCase(getAllProducts.rejected, (state, action) => {
      state.isError = true;
      state.isSuccess = false;
      state.message = action.payload;
      toast.error(action.payload);
    });
  },
});

export const { CALC_STORE } = productSlice.actions;

export default productSlice.reducer;
