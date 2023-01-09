import { Modal, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import PrimaryButton from '../common/PrimaryButton';
import SecondaryButton from '../common/SecondaryButton';
import { colors, sizes } from '../../utils';
import dayjs from 'dayjs';
import { useSetMeetingRoomDates } from '../../hooks/deal.hooks';
import Toast from 'react-native-toast-message';
import { useQueryClient } from '@tanstack/react-query';
import ModalFilter from '../common/ModalFilter';

const MeetingInvitation = ({
  visible,
  onSubmit,
  onClose,
  date,
  time,
  dealId,
}) => {
  const {
    mutateAsync: setMeetingRoomDates,
    isLoading: settingMeetingRoomDates,
  } = useSetMeetingRoomDates();
  const queryClient = useQueryClient();

  const handleSetDate = async () => {
    const data = {
      deal_id: dealId,
      dateArray: [
        { order: 1, value: dayjs(date).format('DD-MM-YYYY H:mm:ss ZZ') },
        { order: 2, value: dayjs(date).format('DD-MM-YYYY H:mm:ss ZZ') },
        { order: 3, value: dayjs(date).format('DD-MM-YYYY H:mm:ss ZZ') },
      ],
    };

    if (dayjs(date).isValid()) {
      try {
        const res = await setMeetingRoomDates(data);
        console.log(res);
        await queryClient.invalidateQueries({
          queryKey: ['meeting-room-dates'],
        });
        Toast.show({ type: 'success', text1: 'Date set successfully' });
        onSubmit();
      } catch (err) {
        console.log(err);
        onClose();
      }
    } else {
      Toast.show({ type: 'error', text1: 'Date is not valid' });
      onClose();
    }
  };

  return (
    <>
      <ModalFilter />
      <Modal visible={visible} animationType='slide' transparent={true}>
        <View style={styles.main}>
          <View style={styles.content}>
            <Text style={styles.modalHeading}>Invitation Confirmation</Text>
            <View style={styles.meetingDetails}>
              <AntDesign name='calendar' size={24} color='black' />
              <Text style={styles.label}>Meeting Title</Text>
              <Text style={styles.value}>Intro Call - Counterparty name</Text>
              <Text style={styles.label}>Meeting Date</Text>
              <Text style={styles.value}>
                {dayjs(date).format('D MMMM YYYY')}
              </Text>
              <Text style={styles.label}>Meeting Time</Text>
              <Text style={styles.value}>
                {dayjs(time).format('h:mm A')} -
                {dayjs(time).add(1, 'hour').format('h:mm A')} (IST)
              </Text>
            </View>

            <View style={styles.actionButtons}>
              <View style={styles.rightButton}>
                <PrimaryButton
                  title='Send Invitation'
                  onClick={() => handleSetDate()}
                  isLoading={settingMeetingRoomDates}
                  disabled={settingMeetingRoomDates}
                />
              </View>
              <View style={styles.leftButton}>
                <SecondaryButton
                  title='Cancel Request'
                  onClick={onClose}
                  disabled={settingMeetingRoomDates}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default MeetingInvitation;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 32,
    backgroundColor: '#fff',
    marginTop: 'auto',
    paddingTop: 40,
    borderRadius: 16,
  },
  actionButtons: {
    marginBottom: 24,
  },
  meetingDetails: {
    backgroundColor: colors.grayBackground,
    marginBottom: sizes.p1,
    padding: sizes.p2,
    borderRadius: sizes.p2,
  },
  modalHeading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: sizes.p1,
  },
  label: {
    fontSize: 16,
    color: colors.text60,
    marginVertical: sizes.pHalf,
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
