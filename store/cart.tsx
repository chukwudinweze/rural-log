import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "./productCheckout";

interface cartSsate {
  products: Product[];
}

const initialState: cartSsate = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const { productId } = action.payload;

      // Find the product in the cart
      const existingProductIndex = state.products.findIndex(
        (product) => product.productId === productId
      );

      if (existingProductIndex !== -1) {
        // If the product is in the cart, update the amount
        state.products[existingProductIndex].amount++;
      } else {
        // If it's a new product, add it to the cart
        state.products.push(action.payload);
      }
    },

    removeFromCart(state, action: PayloadAction<string>) {
      const productIdToRemove = action.payload;

      // Find the product in the cart
      const existingProductIndex = state.products.findIndex(
        (product) => product.productId === productIdToRemove
      );

      if (existingProductIndex !== -1) {
        // Reduce the amount by 1
        state.products[existingProductIndex].amount--;

        // Remove the product from the cart if amount becomes zero
        if (state.products[existingProductIndex].amount === 0) {
          state.products.splice(existingProductIndex, 1);
        }
      }
    },

    clearCart(state) {
      // Reset state to initial values
      state.products = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice;
