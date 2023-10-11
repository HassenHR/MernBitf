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

export const deleteProduct = createAsyncThunk(
  "products/delete",
  async (id, thunkAPI) => {
    try {
      return await productService.deleteProduct(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// GET SINGLE PRODUCTS
export const getSingleProduct = createAsyncThunk(
  "products/getProduct",
  async (id, thunkAPI) => {
    try {
      return await productService.getSingleProduct(id);
    } catch (error) {
      return await thunkAPI.rejectWithValue(error);
    }
  }
);

// UPDATE PRODUCT
export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async ({ id, formData }, thunkAPI) => {
    try {
      return await productService.updateProduct(id, formData);
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
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.isSuccess = true;
      toast.success("Product has been deleted");
    });
    builder.addCase(deleteProduct.rejected, (state, action) => {
      state.isError = true;
      state.isSuccess = false;
      state.message = action.payload;
      toast.error(action.payload);
    });
    builder.addCase(getSingleProduct.fulfilled, (state, action) => {
      state.isError = false;
      state.isSuccess = true;
      state.product = action.payload;
    });

    builder.addCase(getSingleProduct.rejected, (state, action) => {
      state.isError = true;
      state.isSuccess = false;
      state.message = action.payload;
      toast.error(action.payload);
    });
    builder.addCase(updateProduct.rejected, (state, action) => {
      state.isError = true;
      state.isSuccess = false;
      state.message = action.payload;
      toast.error(action.payload);
    });
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      state.isError = false;
      state.isSuccess = true;
      state.product = action.payload;
      toast.success("Product updated successfully");
    });
  },
});

export const { CALC_STORE } = productSlice.actions;

export default productSlice.reducer;
