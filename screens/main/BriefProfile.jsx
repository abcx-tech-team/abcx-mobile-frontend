import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ScreenNames } from '../../utils';

const BriefProfile = ({ route, navigation }) => {
  const { briefProfileId } = route.params;
  console.log(briefProfileId);
  return (
    <View style={styles.container}>
      <Text>{briefProfileId}</Text>
      <Button
        onPress={() => navigation.navigate(ScreenNames.explore)}
        title='Go Back'
      />
    </View>
  );
};

export default BriefProfile;

const styles = StyleSheet.create({
  container: {
    padding: 100,
  },
});
