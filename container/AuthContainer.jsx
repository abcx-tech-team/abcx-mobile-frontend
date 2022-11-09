import { useEffect } from 'react';

const AuthContainer = ({ children }) => {
  useEffect(() => {
    // TODO: get the storage in it is null then redirect to login screen
  }, []);
  return children;
};

export default AuthContainer;
