import { StyleSheet, Text } from 'react-native';
import React from 'react';
import PreferenceLayout from '../../container/PreferenceLayout';
import { colors, ScreenNames, sizes } from '../../utils';
import { useLoggedInUser } from '../../hooks/user.hooks';

const Introduction = ({ navigation }) => {
  const { data } = useLoggedInUser();

  const handlePrimaryCTA = () => {
    navigation.navigate(ScreenNames.preferenceForms);
  };

  return (
    <PreferenceLayout
      primaryCTA="Let's go"
      navigation={navigation}
      primaryCTAFunction={handlePrimaryCTA}
      BackArrowClick={() => navigation.navigate(ScreenNames.main)}
    >
      <Text style={styles.heading}>Hey {data?.first_name} 👋</Text>
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
    color: colors.text80,
  },
  subHeading: {
    fontSize: 20,
    color: colors.text60,
    marginTop: sizes.p2,
  },
});
