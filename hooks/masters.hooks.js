import { useQuery } from '@tanstack/react-query';
import {
  searchCountry,
  searchFundRound,
  searchFundType,
  searchKeywords,
} from '../requests/masters.requests';

export const useSearchKeywords = (enabled) =>
  useQuery(
    ['search-keywords'],
    async () => {
      const res = await searchKeywords();
      return res;
    },
    { enabled }
  );

export const useSearchCountry = (enabled) =>
  useQuery(
    ['search-country'],
    async () => {
      const res = await searchCountry();
      return res;
    },
    { enabled }
  );

export const useSearchFundRound = (enabled) =>
  useQuery(
    ['search-fund-round'],
    async () => {
      const res = await searchFundRound();
      return res;
    },
    { enabled }
  );

export const useSearchFundType = (enabled) =>
  useQuery(
    ['search-fund-type'],
    async () => {
      const res = await searchFundType();
      return res;
    },
    { enabled }
  );
