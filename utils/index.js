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
};

export const colors = {
  green: '#5AB46A',
  greenBackground: '#9ac87f',
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
  grayBackground: '#FBFBFB',
  white: '#fff',
  lightRed: 'rgba(224, 106, 110, 0.6)',
  lightRedBackground: 'rgba(224, 106, 110, 0.2)',
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

export const paddingSizes = {
  pHalf: 4,
  p1: 8,
  p2: 16,
  p3: 24,
  p4: 32,
  p5: 40,
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
