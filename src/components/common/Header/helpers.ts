import { Category } from '@/types/restaurant.ts';
import { RestaurantPaths } from '@/routes';

interface NavbarOption {
  key: string;
  name: string;
  url: string;
}

export function createMenuOption(category: Category): NavbarOption {
  return {
    key: category.uuid,
    name: category.name,
    url: `${ RestaurantPaths.CATEGORY }/${ category.uuid }`,
  };
}