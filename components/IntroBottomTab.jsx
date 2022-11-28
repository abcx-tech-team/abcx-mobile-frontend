import { Linking, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PrimaryButton from './common/PrimaryButton';
import { colors, ScreenNames, sizes } from '../utils';

const IntroBottomTab = ({ navigation }) => {
  return (
    <View style={styles.bottomTab}>
      <PrimaryButton
        onClick={() => navigation.navigate(ScreenNames.login)}
        title='Get Started'
        noLoader
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Don’t have an account?</Text>
        <Text
          style={styles.link}
          onPress={() =>
            Linking.openURL('https://app.abcxchange.com/auth/login')
          }
        >
          Request Membership
        </Text>
      </View>
    </View>
  );
};

export default IntroBottomTab;

const styles = StyleSheet.create({
  bottomTab: {
    backgroundColor: colors.white,
    flex: 1.5,
    borderRadius: sizes.p3,
    justifyContent: 'center',
    paddingHorizontal: sizes.p4,
    elevation: 20,
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    marginRight: sizes.p1,
    fontWeight: '600',
  },
  link: {
    fontWeight: '600',
    color: colors.blue,
  },
  textContainer: {
    marginTop: sizes.p3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
