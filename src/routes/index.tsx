import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

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

export enum CommonPaths {
  ROOT = '/',
  ERROR = '/error',
  NOT_FOUND = '*',
}

export enum MenuPaths {
  CATEGORY = '/categories',
  IMAGE_SELECT = '/image-select'
}

const AppRoutes = () => (
  <Suspense fallback={ <LoadingLayout/> }>
    <Routes>
      <Route element={ <DefaultLayout/> }>
        <Route path={ CommonPaths.ROOT } element={ <Restaurant/> }/>
        <Route path={ `${ MenuPaths.CATEGORY }/:category` } element={ <Restaurant/> }/>
        <Route path={ MenuPaths.IMAGE_SELECT } element={ <ImageSelector/> }/>
      </Route>
      <Route path={ CommonPaths.NOT_FOUND } element={ <Error/> }/>
      <Route path={ CommonPaths.ERROR } element={ <Error/> }/>
    </Routes>
  </Suspense>
);

export default AppRoutes;