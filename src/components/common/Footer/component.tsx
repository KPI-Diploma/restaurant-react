import styles from './styles.module.css';
import { useReduxSelect } from '@/redux/hooks';
import { selectCategories, selectRecommended } from '@/redux/slices/restaurant';
import { useMemo } from 'react';
import { createMenuOption } from '@/components/common/Header/helpers';
import { useNavigate } from 'react-router-dom';
import { selectCart } from '@/redux/slices/cart';
import { RestaurantPaths } from '@/routes';

const Footer = () => {
  const navigate = useNavigate();
  const categories = useReduxSelect(selectCategories);
  const recommended = useReduxSelect(selectRecommended);
  const cart = useReduxSelect(selectCart);
  const navbarOptions = useMemo(() => {
    return [
      ...( recommended.dishes.length > 0 ? [createMenuOption(recommended)] : [] ),
      ...categories.map((category) => createMenuOption(category)),
    ];
  }, [categories, recommended]);

  return (
    <footer className={ styles.footer }>
      <div className={ styles.menu }>
        <h3>Menu</h3>
        <ul>
          {
            navbarOptions.map((option) =>
              <li key={ option.key } onClick={ () => navigate(option.url) }>
                { option.name }
              </li>,
            )
          }
        </ul>
      </div>
      <div className={ styles.cart }>
        <h3>Cart</h3>
        <ul className={ styles.cart__items }>
          {
            cart.map((item) => {
              return <li key={ item.dish.uuid }>{ item.dish.name } x{ item.amount }</li>;
            })
          }
        </ul>
        { cart.length === 0 && <p>Nothing here yet :)</p> }
        <button onClick={() => navigate(RestaurantPaths.CART)}>Place Order</button>
      </div>
    </footer>
  );
};

export default Footer;