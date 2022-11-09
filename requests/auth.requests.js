import http from '../utils/http';

export const login = (data, isLogin) => http.post('/token/', data, { isLogin });
