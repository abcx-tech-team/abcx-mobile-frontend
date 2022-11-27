import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { sizes } from '../utils';
const Logo = require('../assets/abcx_logo.png');

const LogoHeader = () => {
  return (
    <View style={styles.header}>
      <Image source={Logo} style={styles.logo} />
    </View>
  );
};

export default LogoHeader;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: sizes.p4,
    height: 115,
    justifyContent: 'flex-end',
    paddingBottom: sizes.p3,
  },
  logo: {
    width: 96,
    height: 32,
  },
});
