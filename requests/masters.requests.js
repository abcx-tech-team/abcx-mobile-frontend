import http from '../utils/http';

export const searchKeywords = () => http.get('/master/keyword/?value=1');
export const searchCountry = () => http.get('/master/country/');
export const searchFundType = () => http.get('/master/fund-type/');
export const searchFundRound = () => http.get('/master/fund-round/');

export const dataRoomFileCategory = () => http.get('/master/dr-file-category/');
