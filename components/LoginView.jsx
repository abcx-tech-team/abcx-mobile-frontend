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
import { ScreenNames } from '../utils';
import CustomTextInput from './TextInput';
import { useForm, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required('Email is required')
    .email('Email must be valid'),
  password: yup.string().trim().required('Password is required'),
});

const defaultValues = {
  email: '',
  password: '',
};

const LoginView = ({ navigation }) => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ defaultValues, resolver: yupResolver(schema) });
  const onSubmit = (formData) => {
    console.log(formData);
    // TODO: Store the token or id in asyncStorage for authLayout
    // Shape: {store:{token,id}}
    navigation.navigate(ScreenNames.main);
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
                name='email'
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
            <PrimaryButton title='Login' onClick={handleSubmit(onSubmit)} />
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
