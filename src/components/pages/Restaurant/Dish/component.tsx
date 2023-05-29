import styles from './styles.module.css';
import { Dish } from '@/types/restaurant.ts';
import { useReduxDispatch, useReduxSelect } from '@/redux/hooks.ts';
import { addDishToCart, selectCart } from '@/redux/slices/cart';
import { useMemo } from 'react';

const DishComponent = ({ dish }: { dish: Dish }) => {
  const dispatch = useReduxDispatch();
  const cart = useReduxSelect(selectCart);
  const amountInCart = useMemo(() => {
    return cart.find((item) => item.dish.uuid === dish.uuid)?.amount ?? 0;
  }, [cart, dish]);
  const handleClick = () => {
    dispatch(addDishToCart(dish));
  };

  return (
    <div className={ styles.dish }>
      <img className={ styles.dish__image } src={ dish.image } alt={ dish.name }/>
      <div className={ styles.dish__content }>
        <h3 className={ styles.dish__name }>{ dish.name }</h3>
        <button className={ styles.dish__action } onClick={ handleClick }>
          Add to cart {amountInCart ? `${amountInCart}x` : ''}
        </button>
      </div>
    </div>
  );
};

export default DishComponent;