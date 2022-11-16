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
      return { borderRightColor: '#6F0652' };
    case 50:
      return { borderRightColor: '#6F0652', borderBottomColor: '#6F0652' };
    case 75:
      return {
        borderRightColor: '#6F0652',
        borderBottomColor: '#6F0652',
        borderLeftColor: '#6F0652',
      };
    case 100:
      return {
        borderRightColor: '#6F0652',
        borderBottomColor: '#6F0652',
        borderLeftColor: '#6F0652',
        borderTopColor: '#6F0652',
      };
    default:
      return {};
  }
};
