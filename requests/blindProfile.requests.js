import http from '../utils/http';

export const blindProfileById = (briefProfileId) =>
  http.get(`/explore/blind-profiles/?cprm=${briefProfileId}`);

export const blindProfiles = (query) =>
  http.get(`/explore/blind-profiles/?${query}`);

export const saveBlindProfile = (data) =>
  http.post('/explore/save-blind-profile/', data);
