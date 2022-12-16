import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { colors, sizes } from '../../../utils';
import DealScreenHeader from '../../../components/dealRoom/DealScreenHeader';
import ButtonPair from '../../../components/common/ButtonPair';
import { useMeetingRoomDates } from '../../../hooks/deal.hooks';
import CallSetUpForm from '../../../components/dealRoom/CallSetUpForm';
import SelectedDateCard from '../../../components/dealRoom/SelectedDateCard';
import ApprovedDateCard from '../../../components/dealRoom/ApprovedDateCard';

const MeetingRoom = ({ navigation, route }) => {
  const { dealId, isBuyer } = route.params;
  const { data: meetingRoomDates } = useMeetingRoomDates(dealId, !!dealId);
  // console.log(JSON.stringify(meetingRoomDates || '', null, 2));
  const [showCards, setShowCards] = useState(true);

  return (
    <View style={styles.meetingRoomContainer}>
      <DealScreenHeader
        onBackPress={() => navigation.goBack()}
        screenName='Create New Meeting'
      />
      <View style={styles.meetingRoom}>
        {!showCards ? (
          <CallSetUpForm />
        ) : (
          <View style={{ paddingHorizontal: sizes.p2 }}>
            <SelectedDateCard />
            <Text>
              {'\n'}
              {'\n'}
            </Text>
            <ApprovedDateCard />
          </View>
        )}
      </View>
    </View>
  );
};

export default MeetingRoom;

const styles = StyleSheet.create({
  meetingRoomContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  meetingRoom: {
    flex: 1,
  },
});
