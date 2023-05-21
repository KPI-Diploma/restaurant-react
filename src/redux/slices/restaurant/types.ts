import { Category } from '@/types/restaurant.ts';

export interface RestaurantState {
  categories: Category[];
  colorChoices: string[];
}