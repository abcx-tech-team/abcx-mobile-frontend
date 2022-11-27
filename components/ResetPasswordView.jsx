import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { colors, ScreenNames, sizes } from '../utils';
import PrimaryButton from './PrimaryButton';
import CustomTextInput from './TextInput';
import { useForm, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useResetPassword } from '../hooks/auth.hooks';
import Toast from 'react-native-toast-message';

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
  const { mutateAsync: resetPassword, isLoading } = useResetPassword();

  const { handleSubmit, control, reset } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const onSubmit = async (formData) => {
    try {
      const res = await resetPassword(formData);
      Toast.show({ type: 'success', text1: res.detail });
      reset({ email: '' });
    } catch (err) {
      Toast.show({ type: 'error', text1: err.detail });
    }
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
            isLoading={isLoading}
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
    borderRadius: sizes.p3,
  },
  innerContainer: {
    flexDirection: 'column',
    paddingHorizontal: sizes.p4,
    paddingVertical: sizes.p7,
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
    color: colors.blue,
  },
  textContainer: {
    marginTop: sizes.p3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 32,
    fontWeight: '700',
  },
  form: {
    marginTop: sizes.p3,
    marginBottom: sizes.p3,
  },
});
