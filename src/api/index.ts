import { Category } from '@/types/restaurant.ts';
import { v4 as uuidv4 } from 'uuid';

export async function getCategories(): Promise<Category[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          uuid: uuidv4(),
          name: 'Soups',
          dishes: [
            { uuid: uuidv4(), name: 'Borsht' },
          ],
        },
        {
          uuid: uuidv4(),
          name: 'Pasta',
          dishes: [
            { uuid: uuidv4(), name: 'Bolognese' },
          ],
        },
        {
          uuid: uuidv4(),
          name: 'Fish',
          dishes: [
            { uuid: uuidv4(), name: 'Salmon' },
          ],
        },
      ]);
    }, 2500);
  });
}