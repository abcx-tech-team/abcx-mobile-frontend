import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Loading = () => {
  return (
    <View style={styles.loadingScreen}>
      <ActivityIndicator size='large' color='#fff' />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  loadingScreen: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
