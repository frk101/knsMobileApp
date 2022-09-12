import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, SPACINGS} from '../../theme';

const {width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundLight,
  },
  flipContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  renderflip: {
    backgroundColor: COLORS.background,
    borderWidth: 2,
    borderColor: COLORS.cyan,
    width: width - 40,
    height: width - 40,
    borderRadius: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
