import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import LogoHeader from '../../components/LogoHeader';
import LoginView from '../../components/LoginView';
import Loading from '../../components/Loading';
import { getToken } from '../../utils/asyncStorage';
import { colors, ScreenNames, USER_TOKEN_ID_KEY } from '../../utils';

const Login = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <LogoHeader />
        <LoginView navigation={navigation} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.backdrop,
  },
});
