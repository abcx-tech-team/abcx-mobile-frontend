import http from '../utils/http';

export const login = (data, isLogin) => http.post('/token/', data, { isLogin });
export const resetPassword = (data) =>
  http.post(`/routes/member-user/password-reset/`, data);
