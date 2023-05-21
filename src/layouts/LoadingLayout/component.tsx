import styles from './styles.module.css';
import { PropagateLoader } from 'react-spinners';

const LoadingLayout = () => {
  return (
    <main className={ styles.loading }>
      <PropagateLoader color={ '#000000' } loading={ true } size={ 150 }/>
    </main>
  );
};

export default LoadingLayout;