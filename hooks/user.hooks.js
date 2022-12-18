import { useQuery } from '@tanstack/react-query';
import {
  buyerList,
  loggedInUser,
  sellerList,
  creditBalance,
} from '../requests/user.requests';

export const useLoggedInUser = (token, enabled = true) =>
  useQuery(
    ['loggedInUser', token],
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
      const updatedRes = res.map((item) => ({ ...item, tag: 'Investing' }));
      return updatedRes;
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
      const updatedRes = res.map((item) => ({
        ...item,
        tag: 'Capital Raising',
      }));
      return updatedRes;
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
