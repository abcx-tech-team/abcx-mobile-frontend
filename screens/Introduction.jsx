import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect, useCallback, useContext } from 'react';
import LogoHeader from '../components/LogoHeader';
import IntroBottomTab from '../components/IntroBottomTab';
import { getToken } from '../utils/asyncStorage';
import { ScreenNames, sizes, USER_TOKEN_ID_KEY } from '../utils';
import { AuthContext } from '../context/authContext';

const userAlreadyPreferred = true;

const Introduction = ({ navigation }) => {
  const [showScreen, setShowScreen] = useState(false);
  const { setState } = useContext(AuthContext);
  const getLoginInfo = useCallback(async () => {
    const loginInfo = await getToken(USER_TOKEN_ID_KEY);
    if (loginInfo) {
      setState(loginInfo.state.token);
      if (userAlreadyPreferred) {
        navigation.navigate(ScreenNames.main);
      } else {
        navigation.navigate(ScreenNames.preferenceIntroduction);
      }
    } else {
      setShowScreen(true);
    }
  });

  useEffect(() => {
    getLoginInfo();
  }, []);
  return (
    <View style={styles.screen}>
      {showScreen ? (
        <>
          <LogoHeader />
          <View style={styles.textContainer}>
            <Text style={styles.text}>Borderless{'\n'}capital connection</Text>
          </View>
          <IntroBottomTab navigation={navigation} style={styles.bottomTab} />
        </>
      ) : null}
    </View>
  );
};

export default Introduction;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor:
      'linear-gradient(11.71deg, rgba(236, 248, 252, 0.84) 41.51%, rgba(236, 248, 252, 0) 73.15%);',
  },
  text: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: sizes.p6,
    paddingHorizontal: sizes.p4,
  },
  textContainer: {
    flex: 3,
    justifyContent: 'flex-end',
  },
});
