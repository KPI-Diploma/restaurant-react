export interface Dish {
  uuid: string;
  image: string;
  name: string;
}

export interface CartState {
  dishes: Dish[];
}