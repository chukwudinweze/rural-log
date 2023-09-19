import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define state interface
export type Product = {
  productId: string;
  productName: string;
  productImg: string;
  amount: number;
  price: number;
};

interface ProductCheckoutState {
  products: Product[];
}

const initialState: ProductCheckoutState = {
  products: [],
};

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    getProductCheckout(state, action: PayloadAction<ProductCheckoutState>) {
      // Update state with payload values
      state.products = action.payload.products;
    },

    clearProductCheckout(state) {
      // Reset state to initial values
      state.products = [];
    },
  },
});

export const { getProductCheckout, clearProductCheckout } =
  productSlice.actions;

export default productSlice;
