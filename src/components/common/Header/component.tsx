import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import { useMemo } from 'react';
import { useReduxSelect } from '@/redux/hooks.ts';
import { selectCategories } from '@/redux/slices/restaurant';
import { createMenuOption, defaultNavbarOptions } from '@/components/common/Header/helpers.ts';

const Header = () => {
  const navigate = useNavigate();
  const categories = useReduxSelect(selectCategories);
  const navbarOptions = useMemo(() => {
    return [...defaultNavbarOptions, ...categories.map((category) => createMenuOption(category))];
  }, [categories]);

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
      <button>Place Order</button>
    </header>
  );
};

export default Header;