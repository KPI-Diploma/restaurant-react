import styles from './styles.module.css';
import { useReduxDispatch, useReduxSelect } from '@/redux/hooks.ts';
import { addDishToCart, removeDishFromCart, selectCart } from '@/redux/slices/cart';
import { Dish } from '@/types/restaurant.ts';
import { useNavigate } from 'react-router-dom';
import { RestaurantPaths } from '@/routes';

const Cart = () => {
  const cart = useReduxSelect(selectCart);
  const navigate = useNavigate();
  const dispatch = useReduxDispatch();
  const handleAddClick = (dish: Dish) => {
    dispatch(addDishToCart(dish));
  };
  const handleRemoveClick = (dish: Dish) => {
    dispatch(removeDishFromCart(dish));
  };

  return (
    <main className={ styles.cart }>
      <h2>Here are your cart contents:</h2>
      <div className={ styles.cart__items }>
        { cart.map((item) => {
          return <div key={ item.dish.uuid } className={ styles.cartItem }>
            <img className={ styles.cartItem__image } src={ item.dish.image } alt={ item.dish.name }/>
            <div className={ styles.cartItem__content }>
              <p className={ styles.cartItem__name }>
                { item.dish.name } { item.amount }x
              </p>
              <div className={ styles.cartItem__actions }>
                <button onClick={ () => handleRemoveClick(item.dish) }>-</button>
                <button onClick={ () => handleAddClick(item.dish) }>+</button>
              </div>
            </div>
          </div>;
        }) }
        { cart.length === 0 && <p>It's empty :(</p> }
        <button
          disabled={ cart.length === 0 }
          className={ styles.order }
          onClick={ () => navigate(RestaurantPaths.THANK_YOU) }>
          Place an order
        </button>
        <button className={ styles.order } onClick={ () => navigate(RestaurantPaths.RESTAURANT) }>
          Go back to restaurant
        </button>
      </div>
    </main>
  );
};

export default Cart;