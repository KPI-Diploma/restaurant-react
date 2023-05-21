import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import initialState from './initialState.ts';
import { RootState } from '../../store.ts';
import { Category } from '@/types/restaurant.ts';

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
  },
});

export const {
  setCategories,
  setColorChoices,
} = restaurantSlice.actions;
export const selectCategories = ({ restaurant }: RootState): Category[] => restaurant.categories;
export const selectColorChoices = ({ restaurant }: RootState): string[] => restaurant.colorChoices;
export const restaurantReducer = restaurantSlice.reducer;