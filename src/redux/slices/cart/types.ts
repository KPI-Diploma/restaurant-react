import { Dish } from '@/types/restaurant.ts';

export interface CartState {
  contents: CartItem[];
}

export interface CartItem {
  dish: Dish;
  amount: number;
}