import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import { useMemo } from 'react';
import { useReduxSelect } from '@/redux/hooks.ts';
import { selectCategories, selectRecommended } from '@/redux/slices/restaurant';
import { createMenuOption } from '@/components/common/Header/helpers.ts';
import { RestaurantPaths } from '@/routes';

const Header = () => {
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
    <header className={ styles.header }>
      <nav className={ styles.navbar }>
        <ul className={ styles.navbar__list }>
          {
            navbarOptions.map((option) =>
              <li key={ option.key } className={ styles.navbar__item } onClick={ () => navigate(option.url) }>
                { option.name }
              </li>,
            )
          }
        </ul>
      </nav>
      <button onClick={() => navigate(RestaurantPaths.CART)}>Place Order</button>
    </header>
  );
};

export default Header;