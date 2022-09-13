import {StyleSheet, Dimensions} from 'react-native';
import {COLORS, SPACINGS} from '../../theme';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.backgroundLight,
    flex: 1,
  },
  input: {
    flex: 1,
    color: COLORS.white,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: SPACINGS[6],
    backgroundColor: COLORS.background,
    color: COLORS.white,
    borderWidth: 2,
    borderColor: COLORS.cyan,
    borderRadius: SPACINGS[5],
    marginVertical: SPACINGS[10],
  },
  flipContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  renderflip: {
    width: width - 40,
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
});
