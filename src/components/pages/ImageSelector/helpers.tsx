import chroma from 'chroma-js';

const baseColors: string[] = ['white', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];


export function getRandomColors() {
  const colors: string[][] = [];

  baseColors.forEach((color) => {
    const shades = [];
    const startColor = chroma(color).saturate(1.5).brighten(1);
    const endColor = chroma(color).saturate(0.5).darken(1);
    const scale = chroma.scale([startColor, endColor]);
    for (let i = 0; i < 3; i++) {
      shades.push(scale(Math.random()).hex());
    }
    colors.push(shades);
  });

  return shuffle(colors);
}

export function shuffle<T>(colors: T[]) {
  let currentIndex = colors.length, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [colors[currentIndex], colors[randomIndex]] = [colors[randomIndex], colors[currentIndex]];
  }

  return colors;
}