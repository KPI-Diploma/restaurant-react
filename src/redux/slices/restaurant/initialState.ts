import { RestaurantState } from './types.ts';
import { recommendedCategory } from '@/redux/slices/restaurant/helpers';

const initialState: RestaurantState = {
  categories: [],
  colorChoices: [],
  recommended: recommendedCategory,
};

export default initialState;