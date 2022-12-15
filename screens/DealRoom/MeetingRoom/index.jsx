import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors, sizes } from '../../../utils';
import DealScreenHeader from '../../../components/dealRoom/DealScreenHeader';
import { TextInput } from 'react-native-paper';
import SecondaryButton from '../../../components/common/SecondaryButton';
import PrimaryButton from '../../../components/common/PrimaryButton';

const MeetingRoom = ({ navigation, route }) => {
  return (
    <View style={styles.meetingRoomContainer}>
      <DealScreenHeader
        onBackPress={() => navigation.goBack()}
        screenName='Create New Meeting'
      />
      <View style={styles.meetingRoomForm}>
        <TextInput
          mode='outlined'
          placeholder='Meeting Title'
          label='Meeting Title'
          value='Intro Call Buyer x Seller'
          theme={{
            colors: {
              text: colors.primary,
              primary: colors.primary,
              background: colors.white,
            },
            roundness: 12,
          }}
          style={{ marginTop: sizes.p3 }}
        />
      </View>
      <View style={styles.actionButtons}>
        <View style={styles.primaryButtonContainer}>
          <View style={styles.line} />
          <PrimaryButton
            title='Continue'
            onClick={() => console.log('Continue')}
            noLoader
          />
        </View>
        <SecondaryButton
          title='Go Back'
          onClick={() => navigation.goBack()}
          noLoader
        />
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
  meetingRoomForm: {
    paddingHorizontal: sizes.p2,
  },
  actionButtons: {
    marginTop: sizes.p2,
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: sizes.p4,
    paddingBottom: sizes.p3,
  },
  primaryButtonContainer: {
    marginBottom: sizes.p1,
  },
  line: {
    borderTopWidth: 1,
    marginBottom: sizes.p3,
    borderColor: colors.text20,
    marginHorizontal: -sizes.p4,
  },
});
