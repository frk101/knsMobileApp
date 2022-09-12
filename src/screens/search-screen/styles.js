import {StyleSheet} from 'react-native';
import {COLORS, SPACINGS} from '../../theme';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.backgroundLight,
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

    borderWidth: 2,
    borderColor: COLORS.cyan,
    borderRadius: SPACINGS[5],
    marginVertical: SPACINGS[10],
  },
});
