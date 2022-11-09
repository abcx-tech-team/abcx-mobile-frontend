import http from '../utils/http';

export const loggedInUser = () => http.get('/routes/member-user/me/');

export const buyerList = () => http.get('/transaction/deal/buyer-list/');
export const sellerList = () => http.get('/transaction/deal/seller-list/');
