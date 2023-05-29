export interface Category {
  uuid: string;
  name: string;
  dishes: Dish[];
}

export interface Dish {
  uuid: string;
  image: string;
  name: string;
}