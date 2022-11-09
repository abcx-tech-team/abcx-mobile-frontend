import { useMutation, useQuery } from '@tanstack/react-query';
import {
  blindProfileById,
  blindProfiles,
  saveBlindProfile,
} from '../requests/blindProfile.requests';

export const useBriefProfileById = (briefProfileId, enabled) =>
  useQuery(
    ['briefProfileById', briefProfileId],
    async () => {
      const res = await blindProfileById(briefProfileId);
      return res;
    },
    {
      enabled,
    }
  );

export const useBlindProfiles = (query, enabled = true) =>
  useQuery(
    ['blindProfiles', query],
    async () => {
      const res = await blindProfiles(enabled);
      return res;
    },
    {
      enabled,
    }
  );

export const useSaveBlindProfile = () =>
  useMutation(async (data) => {
    const res = await saveBlindProfile(data);
    return res;
  });
