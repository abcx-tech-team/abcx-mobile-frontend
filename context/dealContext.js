import { createContext } from 'react';

export const DealContext = createContext({ deal: {}, setDeal: () => {} });

export const TabListContext = createContext({
  tabList: [],
  setTabList: () => {},
});
