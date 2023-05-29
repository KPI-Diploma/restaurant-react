import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import initialState from './initialState.ts';
import { RootState } from '../../store.ts';
import { Category, Dish } from '@/types/restaurant.ts';

const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
    },
    setColorChoices: (state, action: PayloadAction<string[]>) => {
      state.colorChoices = action.payload;
    },
    setRecommendedDishes: (state, action: PayloadAction<Dish[]>) => {
      const newState = {...state.recommended};
      newState.dishes = action.payload;
      state.recommended = newState;
    },
  },
});

export const {
  setCategories,
  setColorChoices,
  setRecommendedDishes,
} = restaurantSlice.actions;
export const selectCategories = ({ restaurant }: RootState): Category[] => restaurant.categories;
export const selectRecommended = ({ restaurant }: RootState): Category => restaurant.recommended;
export const selectColorChoices = ({ restaurant }: RootState): string[] => restaurant.colorChoices;
export const restaurantReducer = restaurantSlice.reducer;