import styles from './styles.module.css';
import { useParams } from 'react-router-dom';
import { useReduxDispatch, useReduxSelect } from '@/redux/hooks.ts';
import { selectCategories, setCategories } from '@/redux/slices/restaurant';
import { useEffect } from 'react';
import { getCategories } from '@/api';

const Restaurant = () => {
  const dispatch = useReduxDispatch();
  const { category } = useParams();
  const categories = useReduxSelect(selectCategories);

  useEffect(() => {
    (async function () {
      const categories = await getCategories();
      dispatch(setCategories(categories));
    })();
  }, []);

  if (category) {
    // todo: scroll to category
  }
  return (
    <main className={ styles.restaurant }>
      { categories.map((category) =>
        <span key={ category.uuid }>
          { category.name }
          <ul>
            { category.dishes.map((dish) => <li key={ dish.uuid }>{ dish.name }</li>) }
          </ul>
        </span>)
      }
    </main>
  );
};

export default Restaurant;