import { Dish } from '@/redux/slices/cart';

export interface Category {
  uuid: string;
  name: string;
  dishes: Dish[];
}