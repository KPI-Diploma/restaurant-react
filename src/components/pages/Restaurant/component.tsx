import styles from './styles.module.css';
import { useParams } from 'react-router-dom';
import { useReduxDispatch, useReduxSelect } from '@/redux/hooks.ts';
import {
  selectCategories,
  selectColorChoices,
  selectRecommended,
  setCategories,
  setRecommendedDishes,
} from '@/redux/slices/restaurant';
import React, { RefObject, useEffect, useMemo } from 'react';
import { getCategories, getRecommendations } from '@/api';
import { Category } from '@/types/restaurant';
import DishComponent from '@/components/pages/Restaurant/Dish/component';

const Restaurant = () => {
  const dispatch = useReduxDispatch();
  const { category } = useParams();
  const categories = useReduxSelect(selectCategories);
  const recommended = useReduxSelect(selectRecommended);
  const colors = useReduxSelect(selectColorChoices);

  const filteredCategories = useMemo(() => {
    return [recommended, ...categories].filter((category: Category) => {
      return category.dishes.length > 0;
    });
  }, [categories, recommended]);

  const refs = useMemo(() => {
    return categories.reduce((acc: { [key: string]: RefObject<HTMLElement> }, value) => {
      acc[value.uuid] = React.createRef();
      return acc;
    }, {});
  }, [categories]);

  useEffect(() => {
    ( async function () {
      const categories = await getCategories();
      dispatch(setCategories(categories));
    } )();
  }, [dispatch]);

  useEffect(() => {
    ( async function () {
      const recommendations = await getRecommendations(colors);
      dispatch(setRecommendedDishes(recommendations));
    } )();
  }, [dispatch, colors]);

  useEffect(() => {
    if (category) {
      refs[category]?.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [category, refs]);

  return (
    <main className={ styles.restaurant }>
      { filteredCategories.map((category) =>
        <span key={ category.uuid } ref={ refs[category.uuid] }>
          <h2 className={ styles.category }>{ category.name }</h2>
          <div className={ styles.dishes }>
            { category.dishes.map((dish) => <DishComponent key={ dish.uuid } dish={ dish }/>) }
          </div>
        </span>)
      }
    </main>
  );
};

export default Restaurant;