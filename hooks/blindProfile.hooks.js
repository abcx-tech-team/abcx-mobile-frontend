import { useMutation, useQuery } from '@tanstack/react-query';
import {
  blindProfileById,
  blindProfiles,
  requestBlindProfile,
  saveBlindProfile,
} from '../requests/blindProfile.requests';
import Toast from 'react-native-toast-message';

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
      const res = await blindProfiles(query);
      return res;
    },
    {
      enabled,
      cacheTime: 0,
      onError: (err) => {
        Toast.show({
          type: 'error',
          text1: err,
        });
      },
    }
  );

export const useSaveBlindProfile = () =>
  useMutation(async (data) => {
    const res = await saveBlindProfile(data);
    return res;
  });

export const useRequestBlindProfile = () =>
  useMutation(async (data) => {
    const res = await requestBlindProfile(data);
    return res;
  });
