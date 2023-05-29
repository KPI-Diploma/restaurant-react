import { Category } from '@/types/restaurant.ts';
import { Dish } from '@/redux/slices/cart';

const baseURL = 'http://localhost:3000';

export async function getCategories(): Promise<Category[]> {
  const response = await fetch(`${ baseURL }/categories`, {
    method: 'GET',
    cache: 'no-cache',
  });
  return await response.json() as Category[];
}

export async function getRecommendations(colors: string[]): Promise<Dish[]> {
  const response = await fetch(`${ baseURL }/recommendation`, {
    method: 'POST',
    cache: 'no-cache',
    body: JSON.stringify(colors),
  });
  return await response.json() as Dish[];
}