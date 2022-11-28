import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../../utils';

const Loading = () => {
  return (
    <View style={styles.loadingScreen}>
      <ActivityIndicator size='large' color={colors.white} />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  loadingScreen: {
    backgroundColor: colors.text40,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
