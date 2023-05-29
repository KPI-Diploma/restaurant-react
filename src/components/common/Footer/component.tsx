import styles from './styles.module.css';
import { useReduxSelect } from '@/redux/hooks';
import { selectCategories, selectRecommended } from '@/redux/slices/restaurant';
import { useMemo } from 'react';
import { createMenuOption } from '@/components/common/Header/helpers';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const categories = useReduxSelect(selectCategories);
  const recommended = useReduxSelect(selectRecommended);
  const navbarOptions = useMemo(() => {
    return [
      ...(recommended.dishes.length > 0 ? [createMenuOption(recommended)] : []),
      ...categories.map((category) => createMenuOption(category))
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
          <li>Soup x1</li>
          <li>Soup x2</li>
          <li>Soup x3</li>
        </ul>
        <button>Place Order</button>
      </div>
    </footer>
  );
};

export default Footer;