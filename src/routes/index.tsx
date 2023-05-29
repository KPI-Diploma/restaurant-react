import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const DefaultLayout = lazy(
  () => import('@/layouts/DefaultLayout/component'),
);
const LoadingLayout = lazy(
  () => import('@/layouts/LoadingLayout/component'),
);
const Restaurant = lazy(
  () => import('@/components/pages/Restaurant/component'),
);
const Error = lazy(
  () => import('@/components/common/Error/component'),
);
const ImageSelector = lazy(
  () => import('@/components/pages/ImageSelector/component'),
);
const Cart = lazy(
  () => import('@/components/pages/Cart/component'),
);
const ThankYou = lazy(
  () => import('@/components/pages/ThankYou/component'),
);


export enum CommonPaths {
  ROOT = '/',
  ERROR = '/error',
  NOT_FOUND = '*',
}

export enum RestaurantPaths {
  RESTAURANT = '/restaurant',
  CATEGORY = `${ RESTAURANT }/categories`,
  IMAGE_SELECT = '/image-select',
  CART = '/cart',
  THANK_YOU = '/thank-you',
}

const AppRoutes = () => (
  <Suspense fallback={ <LoadingLayout/> }>
    <Routes>
      <Route element={ <DefaultLayout/> }>
        <Route path={ CommonPaths.ROOT } element={ <Navigate to={ RestaurantPaths.IMAGE_SELECT }/> }/>
        <Route path={ RestaurantPaths.RESTAURANT } element={ <Restaurant/> }/>
        <Route path={ `${ RestaurantPaths.CATEGORY }/:category` } element={ <Restaurant/> }/>
      </Route>
      <Route path={ RestaurantPaths.CART } element={ <Cart/> }/>
      <Route path={ RestaurantPaths.THANK_YOU } element={ <ThankYou/> }/>
      <Route path={ RestaurantPaths.IMAGE_SELECT } element={ <ImageSelector/> }/>
      <Route path={ CommonPaths.NOT_FOUND } element={ <Error/> }/>
      <Route path={ CommonPaths.ERROR } element={ <Error/> }/>
    </Routes>
  </Suspense>
);

export default AppRoutes;