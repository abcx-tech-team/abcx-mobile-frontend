import { Linking, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PrimaryButton from './PrimaryButton';
import { ScreenNames } from '../utils';

const IntroBottomTab = ({ navigation }) => {
  return (
    <View style={styles.bottomTab}>
      <PrimaryButton
        onClick={() => navigation.navigate(ScreenNames.login)}
        title='Get Started'
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
    backgroundColor: '#fff',
    flex: 1.5,
    borderRadius: 24,
    justifyContent: 'center',
    paddingHorizontal: 24,
    elevation: 20,
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    marginRight: 8,
    fontWeight: '600',
  },
  link: {
    fontWeight: '600',
    color: '#0018FF',
  },
  textContainer: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
