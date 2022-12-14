export const ScreenNames = {
  dashboard: 'Dashboard',
  explore: 'Explore',
  dealRoom: 'DealRoom',
  introduction: 'Introduction',
  main: 'Main',
  login: 'Login',
  resetPassword: 'Reset Password',
  blindProfile: 'Blind Profile',
  preferenceIntroduction: 'Preference Introduction',
  preferenceForms: 'Preference Forms',
  dealDetails: 'Deal Details',
  timeline: 'Deal Timeline',
  nextSteps: 'Deal Next Steps',
  accessCounterParty: 'Access Counter Party',
  companyProfile: 'Company Profile',
  dataRoom: 'Data Room',
  loi: 'Letter of Intent',
  meetingRoom: 'Meeting Room',
  dealCompletion: 'Deal Completion',
  dealCancelled: 'Deal Cancelled',
};

export const colors = {
  green: '#5AB46A',
  greenBackground: 'rgba(154, 200, 127, 0.2)',
  primary: '#6F0652',
  textFull: '#000000',
  text80: 'rgba(0, 0, 0, 0.8)',
  text60: 'rgba(0, 0, 0, 0.6)',
  text40: 'rgba(0, 0, 0, 0.4)',
  text20: 'rgba(0, 0, 0, 0.2)',
  dashboardBackgroundPink: 'rgba(224, 106, 110, 0.1)',
  yellow: '#E89612',
  yellowBackground: 'rgba(248, 176, 50, 0.2)',
  blue: '#0018FF',
  lightBlueBackground: 'rgba(215, 218, 250, 0.4)',
  lightBlue: '#D7DAFA',
  primaryBackground: 'rgba(171, 0, 133, 0.16)',
  grayBackground: '#F5F5F5',
  borderColor: 'rgba(0,0,0,0.1)',
  white: '#fff',
  lightRed: 'rgba(224, 106, 110, 0.6)',
  lightRedBackground: 'rgba(224, 106, 110, 0.2)',
  backdrop: 'rgba(0,0,0,0.4)',
  badgeOrange: '#FF9966',
  badgeRed: '#FF0000',
  blindProfileBackground: 'rgba(42, 60, 137, 0.1)',
  tagDark: 'rgba(245, 245, 245, 1)',
};

export const currencyMapper = (name) => {
  switch (name) {
    case 'euro':
      return '€';
    case 'dollar':
      return '$';
    case 'gbp':
      return '£';
    default:
      return '$';
  }
};

export const USER_TOKEN_ID_KEY = 'user_token_id';

export const serialize = (object) => {
  const str = [];
  for (const p in object) {
    if (Object.prototype.hasOwnProperty.call(object, p)) {
      if (object[p] || typeof object[p] === 'boolean' || object[p] === null) {
        str.push(`${encodeURIComponent(p)}=${encodeURIComponent(object[p])}`);
      }
    }
  }

  return str.join('&');
};

export const pieFilling = (percentageDone) => {
  switch (percentageDone) {
    case 25:
      return { borderRightColor: colors.primary };
    case 50:
      return {
        borderRightColor: colors.primary,
        borderBottomColor: colors.primary,
      };
    case 75:
      return {
        borderRightColor: colors.primary,
        borderBottomColor: colors.primary,
        borderLeftColor: colors.primary,
      };
    case 100:
      return {
        borderRightColor: colors.primary,
        borderBottomColor: colors.primary,
        borderLeftColor: colors.primary,
        borderTopColor: colors.primary,
      };
    default:
      return {};
  }
};

export const sizes = {
  pHalf: 4,
  p1: 8,
  p2: 16,
  p3: 24,
  p4: 32,
  p5: 40,
  p6: 48,
  p7: 56,
  p8: 64,
  p9: 72,
  p10: 80,
};

export const iconStyles = {
  smallIcon: {
    height: 16,
    width: 16,
    resizeMode: 'contain',
  },
  mediumIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  largeIcon: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },
};

export const revenuePreference = [
  'Pre-Revenue',
  '$0-1M',
  '$1-10M',
  '$10-25M',
  '$25M and above',
];
export const industryPreference = [
  'Fintech',
  'AdTech',
  'AgroTech',
  'Artificial Intelligence',
  'Technology',
];
export const fundingPreference = [
  'Seed to Series A',
  'Series A and Above',
  'Pre-Seed',
  'Early Investor',
  'Any Size',
];

export const regionPreference = [
  'Asia',
  'Europe',
  'Africa',
  'North America',
  'Australia',
];

export const countryPreference = [
  'Germany',
  'United Kingdom',
  'Portugal',
  'France',
  'Croatia',
  'NetherLands',
];

export const sameObject = (obj1, obj2) => {
  let flag = true;
  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) {
      flag = false;
      return flag;
    }
  }
  return flag;
};

export const redeemType = (credits) => (credits ? 'credit-view' : 'amount');

export const dealStageCodes = {
  meetingRoom: 'MRS',
  timeline: 'TML',
  dataRoom: 'DRS',
  letterOfIntent: 'LOI',
  companyProfile: 'CPR',
  dealClosure: 'DCE',
  nextSteps: 'NXT',
  accessCounterParty: 'ACI',
};

export const dealStageCodeToScreenName = {
  [dealStageCodes.meetingRoom]: ScreenNames.meetingRoom,
  [dealStageCodes.dataRoom]: ScreenNames.dataRoom,
  [dealStageCodes.companyProfile]: ScreenNames.companyProfile,
  [dealStageCodes.letterOfIntent]: ScreenNames.loi,
  [dealStageCodes.accessCounterParty]: ScreenNames.accessCounterParty,
};

export const dealStageStates = {
  inActive: 'INACTIVE',
  pendingApproval: 'PENDING_APPROVAL',
  approved: 'APPROVED',
  active: 'ACTIVE',
};

export const openRoomModalData = {
  MRS: {
    heading: 'Open Meeting Room Confirmation?',
    subHeading:
      'An intro call with management team allows clear communication between members of the company. ',
    contextData: 'Fastest way to schedule a meeting',
  },
  DRS: {
    heading: 'Open Data Room Confirmation?',
    subHeading:
      'Data room is a discreet cloud folder only accessible by the parties and gets deleted after the use. ',
    contextData: 'Safest way to share files',
  },
  LOI: {
    heading: 'Open Term Sheet Confirmation?',
    subHeading:
      'We will send an email introducting to both the parties. Are you sure you want to proceed? ',
    contextData: 'On success, we raise a fee of £100 to company',
  },
  ACI: {
    heading: 'Access counterparty information',
    subHeading:
      'We will send an email introducting to both the parties. Are you sure you want to proceed? ',
    contextData: 'On success, we raise a fee of £100 to company',
    price: '0',
    actualPrice: '100',
    currency: 'gbp',
  },
};

export const fileMapper = (fileType) => {
  switch (fileType) {
    case 'ppt':
      return require('../assets/icons/power_point.png');
    case 'pdf':
      return require('../assets/icons/pdf.png');
    default:
      return require('../assets/icons/pdf.png');
  }
};
