import { useCallback, useEffect } from 'react';
import { ScreenNames, USER_TOKEN_ID_KEY } from '../utils';
import { getToken } from '../utils/asyncStorage';

const AuthContainer = ({ children, navigation }) => {
  // TODO: use context to make it rerender om state change now not happening that
  const checkLogin = useCallback(async () => {
    const data = await getToken(USER_TOKEN_ID_KEY);
    if (!data) {
      navigation.navigate(ScreenNames.login);
    }
  }, []);

  useEffect(() => {
    checkLogin();
  }, []);
  return children;
};

export default AuthContainer;
