import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PreferenceButtons from '../components/PreferenceButtons';
import { ScreenNames } from '../utils';

const Back = require('../assets/icons/back.png');

const PreferenceLayout = ({
  showNumber,
  starting,
  total,
  children,
  primaryCTA,
  secondaryCTA,
  navigation,
  primaryCTAFunction,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Pressable
          onPress={() => navigation.navigate(ScreenNames.main)}
          style={styles.back}
        >
          <Image source={Back} />
        </Pressable>
        {showNumber ? (
          <View style={styles.numberContainer}>
            <Text style={styles.number}>
              {starting}/{total}
            </Text>
          </View>
        ) : null}
      </View>
      <View style={styles.main}>{children}</View>
      <PreferenceButtons
        primaryCTA={primaryCTA}
        secondaryCTA={secondaryCTA}
        navigation={navigation}
        primaryCTAFunction={primaryCTAFunction}
      />
    </View>
  );
};

export default PreferenceLayout;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  topBar: {
    paddingTop: 60,
    paddingBottom: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  number: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  main: {
    flex: 1,
    paddingHorizontal: 24,
  },
});
