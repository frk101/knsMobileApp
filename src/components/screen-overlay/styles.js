import {StyleSheet} from 'react-native';
import {COLORS, SPACINGS} from '../../theme';

export default StyleSheet.create({
  overlay: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: COLORS.blackAlpha[600],
  },
  loadingBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SPACINGS[8],
    borderRadius: 8,
    backgroundColor: COLORS.backgroundLight,
  },
  text: {
    marginLeft: SPACINGS[6],
  },
});
