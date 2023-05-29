import { CartItem } from '@/redux/slices/cart/types.ts';

export function sortCartItems(items: CartItem[]) {
  return items.sort((a, b) => {
    if (a.dish.name < b.dish.name) {
      return -1;
    }
    if (a.dish.name > b.dish.name) {
      return 1;
    }
    return 0;
  });
}