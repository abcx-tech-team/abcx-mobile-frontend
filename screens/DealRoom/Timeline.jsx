import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import DealScreenHeader from '../../components/dealRoom/DealScreenHeader';
import { colors, ScreenNames, sizes } from '../../utils';
import DealRoomTimelineStep from '../../components/dealRoom/DealRoomTimelineStep';

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
    <View style={styles.screen}>
      <DealScreenHeader
        screenName='Timeline'
        onBackPress={() => navigation.navigate(ScreenNames.dealRoom)}
      />
      <ScrollView>
        <View style={styles.stepContainer}>
          {timelineData.map((item) => (
            <DealRoomTimelineStep {...item} key={item.name} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Timeline;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.white,
    flex: 1,
  },
  stepContainer: {
    paddingHorizontal: sizes.p2,
    marginBottom: sizes.p4,
  },
});
