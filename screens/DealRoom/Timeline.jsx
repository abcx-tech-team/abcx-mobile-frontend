import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import DealScreenHeader from '../../components/DealScreenHeader';
import { ScreenNames } from '../../utils';
import DealRoomTimelineStep from '../../components/DealRoomTimelineStep';

const timelineData = [
  {
    name: 'Company Profile',
    image: require('../../assets/icons/company_profile.png'),
    tag: 'Approved',
  },
  {
    name: 'Access Counterparty Info',
    image: require('../../assets/icons/mail.png'),
    tag: 'Yet to Start',
  },
  {
    name: 'Setup Call',
    image: require('../../assets/icons/chat.png'),
    tag: 'Yet to Start',
  },
  {
    name: 'Data Room',
    image: require('../../assets/icons/folder.png'),
    tag: 'Yet to Start',
  },
  {
    name: 'Term Sheet',
    image: require('../../assets/icons/sheet.png'),
    tag: 'Yet to Start',
  },
];

const Timeline = ({ navigation }) => {
  return (
    <View>
      <DealScreenHeader
        screenName='Timeline'
        onBackPress={() => navigation.navigate(ScreenNames.dealRoom)}
      />
      <View style={styles.stepContainer}>
        {timelineData.map((item) => (
          <DealRoomTimelineStep {...item} key={item.name} />
        ))}
      </View>
    </View>
  );
};

export default Timeline;

const styles = StyleSheet.create({
  stepContainer: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
});
