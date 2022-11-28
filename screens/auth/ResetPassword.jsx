import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import LogoHeader from '../../components/common/LogoHeader';
import ResetPasswordView from '../../components/ResetPasswordView';
import { colors } from '../../utils';

const ResetPassword = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <LogoHeader />
        <ResetPasswordView navigation={navigation} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.backdrop,
  },
});
