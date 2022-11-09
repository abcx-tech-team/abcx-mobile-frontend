import { useMutation } from '@tanstack/react-query';
import { login } from '../requests/auth.requests';

export const useLogin = () =>
  useMutation(async ({ data, isLogin }) => {
    const res = await login(data, isLogin);
    return res;
  });
