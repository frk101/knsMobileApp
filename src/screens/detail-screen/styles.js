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
    width: width - 100,
    height: width - 40,

    shadowColor: '#000',
    shadowOffset: {
      width: 40,
      height: 10,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  renderflipBack: {
    width: width - 100,
    height: width - 40,
    backgroundColor: COLORS.background,
    borderWidth: 2,
    borderColor: COLORS.cyan,
    borderRadius: SPACINGS[6],
    shadowColor: '#000',
    shadowOffset: {
      width: 30,
      height: 10,
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
