import { useId, useMemo } from 'react';
import { shuffle } from '@/components/pages/ImageSelector/helpers';

const GradientPicture = ({ width, height, colors }: { width: number, height: number, colors: string[] }) => {
  const gradient = useId();
  const turbulence = useId();
  const colorStops = useMemo(() => {
    return shuffle(colors).map(
      (color, index) => <stop
        key={color}
        offset={ `${ ( index / ( colors.length - 1 ) ) * 100 }%` }
        stopColor={ color }
        stopOpacity={ 1 }
      />,
    );
  }, [colors]);
  return <svg xmlns="http://www.w3.org/2000/svg" width={ width } height={ height }>
    <defs>
      <linearGradient id={ gradient } x1="0%" y1="0%" x2="100%" y2="0%">
        { colorStops }
      </linearGradient>
      <filter id={ turbulence }>
        <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="noise"/>
        <feGaussianBlur in="noise" stdDeviation="2" result="blurredNoise"/>
        <feBlend in="SourceGraphic" in2="blurredNoise" mode="multiply"/>
      </filter>
    </defs>
    <rect width={ width } height={ height } fill={ `url(#${ gradient })` } filter={ `url(#${ turbulence })` }/>
  </svg>;
};

export default GradientPicture;