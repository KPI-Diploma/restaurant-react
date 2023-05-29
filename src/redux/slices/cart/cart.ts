import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import initialState from './initialState.ts';
import { CartItem } from './types.ts';
import { RootState } from '../../store.ts';
import { Dish } from '@/types/restaurant.ts';
import { sortCartItems } from '@/redux/slices/cart/helpers.ts';

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addDishToCart: (state, action: PayloadAction<Dish>) => {
      const target = state.contents.find(
        (item) => item.dish.uuid === action.payload.uuid,
      );
      const newState = state.contents.filter(
        (item) => item.dish.uuid !== action.payload.uuid,
      );
      if (target) {
        target.amount += 1;
        state.contents = sortCartItems([...newState, target]);
      } else {
        state.contents = sortCartItems([...newState, { dish: action.payload, amount: 1 }]);
      }
    },
    removeDishFromCart: (state, action: PayloadAction<Dish>) => {
      const target = state.contents.find(
        (item) => item.dish.uuid === action.payload.uuid,
      );
      const newState = state.contents.filter(
        (item) => item.dish.uuid !== action.payload.uuid,
      );
      if (target && target.amount > 1) {
        target.amount -= 1;
        state.contents = sortCartItems([...newState, target]);
      } else {
        state.contents = sortCartItems([...newState]);
      }
    },
  },
});

export const {
  addDishToCart,
  removeDishFromCart,
} = cartSlice.actions;
export const selectCart = ({ cart }: RootState): CartItem[] => cart.contents;
export const cartReducer = cartSlice.reducer;