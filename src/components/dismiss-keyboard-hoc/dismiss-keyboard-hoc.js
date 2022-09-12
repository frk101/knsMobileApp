import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const DismissKeyboardHoc = ({children, keyboardAvoidingViewStyle}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={[{flex: 1}, keyboardAvoidingViewStyle]}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={{flex: 1}}>{children}</View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

DismissKeyboardHoc.defaultProps = {
  keyboardAvoidingViewStyle: {},
};

export default DismissKeyboardHoc;
