import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Item {
  id: number;
  quantity: number;
}

interface CartState {
  cart: Item[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ id: number }>) => {
      const id = action.payload.id;
      const existingItem = state.cart.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cart.push({ id, quantity: 1 });
      }
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity++;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity--;
        if (existingItem.quantity <= 0) {
          state.cart = state.cart.filter((item) => item.id !== id);
        }
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.cart = [];
    },

    addToCartByNumber: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const { id, quantity } = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.cart.push({ id, quantity });
      }
    }
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
  addToCartByNumber
} = cartSlice.actions;

export default cartSlice.reducer;
