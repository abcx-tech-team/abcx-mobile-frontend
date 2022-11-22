import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import DealScreenHeader from '../../components/DealScreenHeader';
import { ScreenNames } from '../../utils';
import DealRoomStep from '../../components/DealRoomStep';

const nextStepsData = [
  {
    name: 'Access counter-party information',
    description: 'Triggers an email to both the parties introducing members',
  },
  {
    name: 'Open data room to share files',
    description: 'Triggers an email to both the parties introducing members',
  },
  {
    name: 'Setup meeting with management team',
    description: 'Triggers an email to both the parties introducing members',
  },
  {
    name: 'I would like to cancel this deal',
    description: 'Triggers an email to both the parties introducing members',
  },
  {
    name: 'Sign term sheet',
    description: 'Triggers an email to both the parties introducing members',
  },
];

const NextSteps = ({ navigation }) => {
  return (
    <View>
      <DealScreenHeader
        screenName='Next Steps'
        onBackPress={() => navigation.navigate(ScreenNames.dealRoom)}
      />
      <View style={styles.stepContainer}>
        {nextStepsData.map((item) => (
          <DealRoomStep {...item} key={item.name} />
        ))}
      </View>
    </View>
  );
};

export default NextSteps;

const styles = StyleSheet.create({
  stepContainer: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
});
