import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LogoHeader from '../components/LogoHeader';
import IntroBottomTab from '../components/IntroBottomTab';

const Introduction = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <LogoHeader />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Borderless{'\n'}capital connection</Text>
      </View>
      <IntroBottomTab navigation={navigation} style={styles.bottomTab} />
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
    marginBottom: 80,
    paddingHorizontal: 24,
  },
  textContainer: {
    flex: 3,
    justifyContent: 'flex-end',
  },
});
