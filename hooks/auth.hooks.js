import { useMutation } from '@tanstack/react-query';
import { login, resetPassword } from '../requests/auth.requests';

export const useLogin = () =>
  useMutation(async ({ data, isLogin }) => {
    const res = await login(data, isLogin);
    return res;
  });

export const useResetPassword = () =>
  useMutation(async (data) => {
    const res = await resetPassword(data);
    return res;
  });
