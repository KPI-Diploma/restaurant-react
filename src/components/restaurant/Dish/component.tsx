import styles from './styles.module.css';
import { Dish } from '@/redux/slices/cart';

const DishComponent = ({ dish }: { dish: Dish }) => {
  return (
    <div className={ styles.dish }>
      <img className={ styles.dish__image } src={ dish.image } alt={ dish.name }/>
      <div className={ styles.dish__content }>
        <h3 className={ styles.dish__name }>{ dish.name }</h3>
        <button className={ styles.dish__action }>Add to cart</button>
      </div>
    </div>
  );
};

export default DishComponent;