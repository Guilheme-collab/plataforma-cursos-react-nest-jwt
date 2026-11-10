import { useWindowDimensions } from 'react-native';

export interface OrientationData {
  width: number;
  height: number;
  isLandscape: boolean;
  isPortrait: boolean;
}

export function useOrientation(): OrientationData {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  return {
    width,
    height,
    isLandscape,
    isPortrait: !isLandscape,
  };
}
