import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
  favoriteData: [],
  allProducts: []
};

export const nextSlice = createSlice({
  name: "next",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.productData.find(
        (item) => item._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },
    addToFavorite: (state, action) => {
      const existingProduct = state.favoriteData.find(
        (item) => item._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.favoriteData.push(action.payload);
      }
    },
    increaseQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (item) => item._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.quantity++;
      }
    },
    decreaseQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (item) => item._id === action.payload._id
      );
      if (existingProduct) {
        if (existingProduct.quantity === 1) {
          existingProduct.quantity = 1;
        } else {
          existingProduct.quantity--;
        }
      }
    },
    deleteProduct: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item._id !== action.payload
      );
    },
    deleteFavorite: (state, action) => {
      state.favoriteData = state.favoriteData.filter(
        (item) => item._id !== action.payload
      );
    },
    resetCart: (state) => {
      state.productData = [];
    },
    resetFavoriteData: (state) => {
      state.favoriteData = [];
    },
    setAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },
  },
});

export const {
  addToCart,
  addToFavorite,
  increaseQuantity,
  decreaseQuantity,
  deleteProduct,
  resetCart,
  setAllProducts,
  deleteFavorite,
  resetFavoriteData,
} = nextSlice.actions;
export default nextSlice.reducer;
