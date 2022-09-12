import {StyleSheet} from 'react-native';
import {COLORS, FONT_SIZES} from '../../theme';
export default ({color, size, weight, align}) => {
  const themeFont = useFont({size, weight});

  if (!color) {
    color = COLORS.white;
  }

  return StyleSheet.create({
    text: {
      color,
      letterSpacing: 0.5,
      fontSize: FONT_SIZES[size],
      textAlign: align,
      ...themeFont.text,
    },
  });
};

const useFont = ({size, weight}) => {
  switch (weight) {
    case 'regular':
      return {
        text: {
          fontWeight: '400',
        },
      };
    case 'bold':
      switch (size) {
        case '2xl':
        case '3xl':
          return {
            text: {
              fontWeight: '600',
            },
          };
        default:
          return {
            text: {
              fontWeight: '500',
            },
          };
      }
  }
};
