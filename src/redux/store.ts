import { combineReducers, configureStore, Reducer } from '@reduxjs/toolkit';
import { cartReducer } from './slices/cart';
import { restaurantReducer } from '@/redux/slices/restaurant';

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof reducer>;

const reducer: Reducer = combineReducers({
  cart: cartReducer,
  restaurant: restaurantReducer,
});

const store = configureStore({
  reducer,
});

export { store };
export type { AppDispatch, RootState };