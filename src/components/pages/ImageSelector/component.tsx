import styles from './styles.module.css';
import { getRandomColors } from '@/components/pages/ImageSelector/helpers';
import GradientPicture from '@/components/pages/ImageSelector/GradientPicture/component';
import { useNavigate } from 'react-router-dom';
import { RestaurantPaths } from '@/routes';
import { useDispatch } from 'react-redux';
import { setColorChoices } from '@/redux/slices/restaurant';

const ImageSelector = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const colors = getRandomColors();
  const handleSelection = (colors: string[]) => {
    dispatch(setColorChoices(colors));
    navigate(`${ RestaurantPaths.RESTAURANT }`);
  };

  return (
    <main className={ styles.imageSelector }>
      <h2>Choose your preferable color:</h2>
      <div className={ styles.gallery }>
        { colors.map((colorSet, index) => {
          return <div className={ styles.gallery__image }
                      key={ colorSet.join(index.toString()) }
                      onClick={ () => handleSelection(colorSet) }>
            <GradientPicture colors={ colorSet } height={ 300 } width={ 300 }/>
          </div>;
        }) }
      </div>
    </main>
  );
};

export default ImageSelector;