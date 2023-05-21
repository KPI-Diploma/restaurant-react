import { Category } from '@/types/restaurant.ts';
import { MenuPaths } from '@/routes';

interface NavbarOption {
  key: string;
  name: string;
  url: string;
}

export function createMenuOption(category: Category): NavbarOption {
  return {
    key: category.uuid,
    name: category.name,
    url: `${ MenuPaths.CATEGORY }/${ category.uuid }`,
  };
}

export const defaultNavbarOptions: NavbarOption[] = [
  {
    key: '00000000-0000-0000-0000-000000000000',
    name: 'Recommended',
    url: `${ MenuPaths.CATEGORY }/00000000-0000-0000-0000-000000000000`,
  },
];