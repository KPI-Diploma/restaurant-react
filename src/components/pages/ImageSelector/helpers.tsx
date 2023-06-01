import chroma from 'chroma-js';

const baseColors: string[] = ['white', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];


export function getRandomColors() {
  const colors: string[][] = [];

  baseColors.forEach((color) => {
    const shades = [];
    const startColor = chroma(color).saturate(getRandomValue(1, 2)).brighten(getRandomValue(1, 3));
    const endColor = chroma(color).saturate(getRandomValue(0, 1)).darken(getRandomValue(1, 3));
    const scale = chroma.scale([startColor, endColor]);
    for (let i = 0; i < 3; i++) {
      shades.push(scale(Math.random()).hex());
    }
    colors.push(shades);
  });

  return shuffle(colors);
}

function getRandomValue(from: number, to: number): number {
  return Math.random() * (to - from) + from;
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