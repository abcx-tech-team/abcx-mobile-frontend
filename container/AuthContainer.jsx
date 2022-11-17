import { useContext, useEffect } from 'react';
import { AuthContext } from '../context/authContext';
import { ScreenNames } from '../utils';

const AuthContainer = ({ children, navigation }) => {
  const { token } = useContext(AuthContext);

  useEffect(() => {
    if (!token) {
      navigation.navigate(ScreenNames.login);
    }
  }, [token]);
  return children;
};

export default AuthContainer;
