import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { ScreenNames } from '../utils';

const useIsLogin = () => {
  const [isLogin, setIsLogin] = useState(false);
  const route = useRoute();
  useEffect(() => {
    let data;
    if (route.name === ScreenNames.login) {
      data = true;
    } else {
      data = false;
    }
    setIsLogin(data);
  }, [route]);
  return isLogin;
};
export default useIsLogin;
