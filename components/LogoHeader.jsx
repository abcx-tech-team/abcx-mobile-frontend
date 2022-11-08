import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
const Logo = require('../assets/abcx_logo.png');

const LogoHeader = ({ style }) => {
  return (
    <View style={styles.header}>
      <Image source={Logo} style={styles.logo} />
    </View>
  );
};

export default LogoHeader;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 24,
    height: 115,
    justifyContent: 'flex-end',
    paddingBottom: 24,
  },
  logo: {
    width: 96,
    height: 32,
  },
});
