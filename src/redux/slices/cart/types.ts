export interface Dish {
  uuid: string;
  name: string;
}

export interface CartState {
  dishes: Dish[];
}