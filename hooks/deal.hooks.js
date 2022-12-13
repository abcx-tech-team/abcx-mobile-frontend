import { useMutation, useQuery } from '@tanstack/react-query';
import {
  approveBriefProfile,
  approveMeetingRoomDate,
  buyerMemberProfile,
  cancelDeal,
  companyProfile,
  dataRoomCost,
  dataRoomFileList,
  dealDetails,
  declineBriefProfile,
  deleteDataRoomFile,
  downloadDataRoomFile,
  LOICost,
  LOIDetails,
  meetingRoomCost,
  meetingRoomDates,
  openDataRoom,
  openLOI,
  openMeetingRoom,
  setMeetingRoomDates,
  signLOI,
  uploadDataRoomFile,
} from '../requests/deal.requests';

export const useApproveBriefProfile = () =>
  useMutation(async (data) => {
    const res = await approveBriefProfile(data);
    return res;
  });

export const useDeclineBriefProfile = () =>
  useMutation(async (data) => {
    const res = await declineBriefProfile(data);
    return res;
  });

export const useDealDetails = (dealId, enabled = true) =>
  useQuery(
    ['deal-details'],
    async () => {
      const res = await dealDetails(dealId);
      return res;
    },
    {
      enabled,
    }
  );

export const useBuyerMemberProfile = () =>
  useMutation(async (data) => {
    const res = await buyerMemberProfile(data);
    return res;
  });

export const useCompanyProfile = (dealId, enabled = true) =>
  useQuery(
    ['company-profile'],
    async () => {
      const res = await companyProfile(dealId);
      return res;
    },
    {
      enabled,
    }
  );

// Meeting Room Hooks

export const useOpenMeetingRoom = () =>
  useMutation(async (data) => {
    const res = await openMeetingRoom(data);
    return res;
  });

export const useMeetingRoomDates = (dealId, enabled = true) =>
  useQuery(
    ['meeting-room-dates'],
    async () => {
      const res = await meetingRoomDates(dealId);
      return res;
    },
    {
      enabled,
    }
  );

export const useSetMeetingRoomDates = () =>
  useMutation(async (data) => {
    const res = await setMeetingRoomDates(data);
    return res;
  });

export const useApproveMeetingRoomDates = () =>
  useMutation(async () => {
    const res = await approveMeetingRoomDate(data);
    return res;
  });

export const useMeetingRoomCost = (dealId, enabled = true) =>
  useQuery(
    ['meeting-room-cost'],
    async () => {
      const res = await meetingRoomCost(dealId);
      return res;
    },
    {
      enabled,
    }
  );

//   Data Room Hooks

export const useOpenDataRoom = () =>
  useMutation(async (data) => {
    const res = await openDataRoom(data);
    return res;
  });

export const useDataRoomFileList = (dealId, enabled = true) =>
  useQuery(
    ['data-room-file-list'],
    async () => {
      const res = await dataRoomFileList(dealId);
      return res;
    },
    {
      enabled,
    }
  );

export const useUploadDataRoomFile = () =>
  useMutation(async (data) => {
    const res = await uploadDataRoomFile(data);
    return res;
  });

export const useDownloadDataRoomFile = () =>
  useMutation(async (data) => {
    const res = await downloadDataRoomFile(data);
    return res;
  });

export const useDeleteDataRoomFile = () =>
  useMutation(async (data) => {
    const res = await deleteDataRoomFile(data);
    return res;
  });
export const useDataRoomCost = (dealId, enabled = true) =>
  useQuery(
    ['data-room-cost'],
    async () => {
      const res = await dataRoomCost(dealId);
      return res;
    },
    {
      enabled,
    }
  );

//   LOI api hooks

export const useOpenLOI = () =>
  useMutation(async (data) => {
    const res = await openLOI(data);
    return res;
  });
export const useLOIDetails = (dealId, enabled = true) =>
  useQuery(
    ['LOI-details'],
    async () => {
      const res = await LOIDetails(dealId);
      return res;
    },
    {
      enabled,
    }
  );
export const useLOICost = (dealId, enabled = true) =>
  useQuery(
    ['LOI-cost'],
    async () => {
      const res = await LOICost(dealId);
      return res;
    },
    {
      enabled,
    }
  );

export const useSIgnLOI = () =>
  useMutation(async (data) => {
    const res = await signLOI(data);
    return res;
  });

// Cancel Deal
export const useCancelDeal = () =>
  useMutation(async (data) => {
    const res = await cancelDeal(data);
    return res;
  });
