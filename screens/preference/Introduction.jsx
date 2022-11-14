import { StyleSheet, Text } from 'react-native';
import React from 'react';
import PreferenceLayout from '../../container/PreferenceLayout';
import { ScreenNames } from '../../utils';

const Introduction = ({ navigation }) => {
  const handlePrimaryCTA = () => {
    navigation.navigate(ScreenNames.preferenceForms);
  };
  return (
    <PreferenceLayout
      primaryCTA="Let's go"
      navigation={navigation}
      primaryCTAFunction={handlePrimaryCTA}
    >
      <Text style={styles.heading}>Hey Gaurav 👋</Text>
      <Text style={styles.subHeading}>
        Let’s personalise your {'\n'}experience
      </Text>
    </PreferenceLayout>
  );
};

export default Introduction;

const styles = StyleSheet.create({
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2D2C2D',
  },
  subHeading: {
    fontSize: 20,
    color: '#727272',
    marginTop: 16,
  },
});
