import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store.ts';

const useReduxDispatch = () => useDispatch<AppDispatch>();
const useReduxSelect: TypedUseSelectorHook<RootState> = useSelector;

export { useReduxDispatch, useReduxSelect };