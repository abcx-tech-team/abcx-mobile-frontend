import { useQuery } from '@tanstack/react-query';
import {
  buyerList,
  loggedInUser,
  sellerList,
  creditBalance,
} from '../requests/user.requests';

export const useLoggedInUser = (enabled = true) =>
  useQuery(
    ['loggedInUser'],
    async () => {
      const res = await loggedInUser();
      return res;
    },
    {
      enabled,
    }
  );

export const useBuyerList = (enabled = true) =>
  useQuery(
    ['buyerList'],
    async () => {
      const res = await buyerList();
      return res;
    },
    {
      enabled,
    }
  );

export const useSellerList = (enabled = true) =>
  useQuery(
    ['sellerList'],
    async () => {
      const res = await sellerList();
      return res;
    },
    {
      enabled,
    }
  );

export const useCreditBalance = (enabled = true) =>
  useQuery(
    ['credit-balance'],
    async () => {
      const res = await creditBalance();
      return res;
    },
    {
      enabled,
    }
  );
