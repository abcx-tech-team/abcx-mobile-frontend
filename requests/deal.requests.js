import http from '../utils/http';

export const approveBriefProfile = (data) =>
  http.post('/transaction/deal/access-brief-profile/approve/', data);

export const declineBriefProfile = (data) =>
  http.post('/transaction/deal/access-brief-profile/decline/', data);

export const dealNextSteps = (dealId) =>
  http.get(`/transaction/get-next-steps/${dealId}/`);

export const dealDetails = (dealId) => http.get(`/transaction/deal/${dealId}/`);

export const buyerMemberProfile = (data) =>
  http.post('/transaction/access-brief-profile/buyer-member-profile/', data);

export const companyProfile = (dealId) =>
  http.get(`/transaction/access-brief-profile/company-profile/${dealId}/`);

export const accessCounterPartyCost = () =>
  http.get(`/transaction/deal/get-counterparty-cost/`);
export const accessCounterPartyInfo = (data) =>
  http.post('/transaction/deal/access-counterparty-info/', data);

export const openMeetingRoom = (data) =>
  http.post('/transaction/deal/meeting-room/open/', data);
export const meetingRoomDates = (dealId) =>
  http.get(
    `/transaction/deal/meeting-room/?dealId=${dealId}&approvedDates=true`
  );
export const setMeetingRoomDates = (data) =>
  http.post('/transaction/deal/meeting-room/set-dates/', data);
export const approveMeetingRoomDate = (data) =>
  http.post('/transaction/deal/meeting-room/approve-date/', data);
export const meetingRoomCost = (dealId) =>
  http.get(`/transaction/deal/get-meeting-room-cost/?dealId=${dealId}`);

export const openDataRoom = (data) =>
  http.post('/transaction/deal/data-room/open/', data);
export const dataRoomFileList = (dealId) =>
  http.get(`/transaction/deal/data-room/?dealId=${dealId}`);
export const uploadDataRoomFile = (data) =>
  http.post('/transaction/deal/data-room/file-upload/', data, {
    hasFiles: true,
  });

export const downloadDataRoomFile = (data) =>
  http.post('/transaction/deal/data-room/file-download/', data, {
    responseType: 'blob',
  });
export const deleteDataRoomFile = (data) =>
  http.post('/transaction/deal/data-room/file-delete/', data);
export const dataRoomCost = (dealId) =>
  http.get(`/transaction/deal/get-data-room-cost/?dealId=${dealId}`);

export const openLOI = (data) => http.post('/transaction/deal/loi/open/', data);
export const LOIDetails = (dealId) =>
  http.get(`/transaction/deal/loi/?dealId=${dealId}`);
export const LOICost = (dealId) =>
  http.get(`/transaction/deal/get-loi-cost/?dealId=${dealId}`);
export const signLOI = (data) => http.post('/transaction/deal/loi/sign/', data);

export const cancelDeal = (data) =>
  http.post('/transaction/deal/cancel/', data);
