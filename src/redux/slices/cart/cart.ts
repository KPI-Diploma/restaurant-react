import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import initialState from './initialState.ts';
import { CartState, Dish } from './types.ts';
import { RootState } from '../../store.ts';

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addDishToCart: (state, action: PayloadAction<Dish>) => {
      state.dishes = [...state.dishes, action.payload];
    },
    removeDishFromCart: (state, action: PayloadAction<Dish>) => {
      state.dishes = state.dishes.filter((dish) => dish.uuid !== action.payload.uuid);
    },
    clearCart: (state) => {
      state.dishes = [];
    },
  },
});

export const {
  addDishToCart,
  removeDishFromCart,
  clearCart,
} = cartSlice.actions;
export const selectCart = ({ cart }: RootState): CartState => cart;
export const cartReducer = cartSlice.reducer;