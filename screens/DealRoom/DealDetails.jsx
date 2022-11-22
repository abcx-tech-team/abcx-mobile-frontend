import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ScreenNames } from '../../utils';

const DealDetails = ({ navigation, route }) => {
  const { dealId } = route.params;
  return (
    <View style={styles.container}>
      <Text>{dealId}</Text>
      <Button
        title='Back'
        onPress={() => navigation.navigate(ScreenNames.dealRoom)}
      />
      <Button
        title='Timeline'
        onPress={() => navigation.navigate(ScreenNames.timeline)}
      />
      <Button
        title='Next Steps'
        onPress={() => navigation.navigate(ScreenNames.nextSteps)}
      />
    </View>
  );
};

export default DealDetails;

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
});
