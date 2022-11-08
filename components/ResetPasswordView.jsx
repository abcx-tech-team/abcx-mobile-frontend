import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { ScreenNames } from '../utils';
import PrimaryButton from './PrimaryButton';
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
});

const defaultValues = {
  email: '',
};

const ResetPasswordView = ({ navigation }) => {
  const { handleSubmit, control } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <KeyboardAvoidingView
      style={styles.resetContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView bounces={false} style={styles.scrollContainer}>
        <View style={styles.innerContainer}>
          <Text style={styles.heading}>Reset Password</Text>
          <FormProvider control={control}>
            <View style={styles.form}>
              <CustomTextInput
                placeholder='abc@gmail.com'
                label='Email Address'
                mode='outlined'
                name='email'
              />
            </View>
          </FormProvider>
          <PrimaryButton
            title='Send Reset Link'
            onClick={handleSubmit(onSubmit)}
          />
          <View style={styles.textContainer}>
            <Text
              style={styles.link}
              onPress={() => navigation.navigate(ScreenNames.login)}
            >
              Return to Login?
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ResetPasswordView;

const styles = StyleSheet.create({
  resetContainer: {
    backgroundColor: '#fff',
    borderRadius: 24,
  },
  innerContainer: {
    flexDirection: 'column',
    paddingHorizontal: 24,
    paddingVertical: 56,
    justifyContent: 'space-between',
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
