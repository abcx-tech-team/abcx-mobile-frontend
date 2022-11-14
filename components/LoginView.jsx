import {
  KeyboardAvoidingView,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import PrimaryButton from './PrimaryButton';
import { ScreenNames, USER_TOKEN_ID_KEY } from '../utils';
import CustomTextInput from './TextInput';
import { useForm, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLogin } from '../hooks/auth.hooks';
import useIsLogin from '../hooks/useIsLogin.hook';
import Toast from 'react-native-toast-message';
import { getToken, setToken } from '../utils/asyncStorage';

const schema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required('Email is required')
    .email('Email must be valid'),
  password: yup.string().trim().required('Password is required'),
});

const defaultValues = {
  username: '',
  password: '',
};

const userAlreadyPreferred = false;

const LoginView = ({ navigation }) => {
  const isLogin = useIsLogin();
  const { mutateAsync: login, isLoading } = useLogin();

  const { handleSubmit, control, reset } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });
  const onSubmit = async (formData) => {
    try {
      const res = await login({ data: formData, isLogin });
      setToken(USER_TOKEN_ID_KEY, { state: { token: res.access } });
      Toast.show({
        type: 'success',
        text1: 'Logged in successfully',
      });
      if (userAlreadyPreferred) {
        navigation.navigate(ScreenNames.main);
      } else {
        navigation.navigate(ScreenNames.preferenceIntroduction);
      }
      reset({
        username: '',
        password: '',
      });
    } catch (err) {
      Toast.show({
        type: 'error',
        text1: err?.detail,
      });
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'position' : 'null'}
    >
      <ScrollView bounces={false}>
        <View style={styles.innerContainer}>
          <Text style={styles.heading}>Login</Text>
          <FormProvider control={control}>
            <View style={styles.form}>
              <CustomTextInput
                placeholder='abc@gmail.com'
                label='Email Address'
                mode='outlined'
                name='username'
              />
              <CustomTextInput
                placeholder='********'
                label='Password'
                mode='outlined'
                name='password'
              />

              <Text
                style={[styles.link, styles.forgotPassword]}
                onPress={() => navigation.navigate(ScreenNames.resetPassword)}
              >
                Forgot password?
              </Text>
            </View>
            <PrimaryButton
              title='Login'
              onClick={handleSubmit(onSubmit)}
              isLoading={isLoading}
            />
          </FormProvider>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Don’t have an account?</Text>
            <Text
              style={styles.link}
              onPress={() =>
                Linking.openURL('https://app.abcxchange.com/auth/login')
              }
            >
              Request Membership
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginView;

const styles = StyleSheet.create({
  innerContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    flexDirection: 'column',
    paddingHorizontal: 24,
    paddingVertical: 56,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    marginRight: 8,
    fontWeight: '600',
  },
  link: {
    fontWeight: '600',
    color: '#0018FF',
  },
  forgotPassword: {
    marginTop: 8,
  },
  textContainer: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 32,
    fontWeight: '700',
  },
  form: {
    marginTop: 24,
    marginBottom: 40,
  },
});
