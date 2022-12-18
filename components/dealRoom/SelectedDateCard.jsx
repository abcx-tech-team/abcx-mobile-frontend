import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors, sizes } from '../../utils';
import { AntDesign } from '@expo/vector-icons';
import PrimaryButton from '../common/PrimaryButton';
import dayjs from 'dayjs';
import { useApproveMeetingRoomDates } from '../../hooks/deal.hooks';
import { useConfirmation } from '../../context/ModalContext';
import ConfirmationAnimation from '../modals/ConfirmationAnimation';
import { useQueryClient } from '@tanstack/react-query';

const SelectedDateCard = ({ date, showApprove, showMine, dealId }) => {
  const { mutateAsync: approveDates, isLoading: approvingDates } =
    useApproveMeetingRoomDates();
  const queryClient = useQueryClient();

  const confirmation = useConfirmation();

  const handleApproveDate = async () => {
    try {
      const data = {
        deal_id: dealId,
        date_id: date.date_id,
      };
      await approveDates(data);
      await queryClient.invalidateQueries({ queryKey: ['meeting-room-dates'] });
      await confirmation({ Component: ConfirmationAnimation });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.dateCard}>
      <AntDesign name='calendar' size={40} color={colors.lightRed} />
      <Text style={styles.label}>Meeting Title</Text>
      <Text style={styles.value}>Intro Call - Counterparty name</Text>
      <Text style={styles.label}>Meeting Date</Text>
      <Text style={styles.value}>{dayjs(date.date).format('D MMM YYYY')}</Text>
      <Text style={styles.label}>Meeting Time</Text>
      <Text style={styles.value}>
        {dayjs(date.date).format('h:mm A')} -{' '}
        {dayjs(date.date).add(1, 'hour').format('h:mm A')} (IST)
      </Text>
      <Text style={styles.label}>Meeting Venue</Text>
      <View style={{ flexDirection: 'row', marginBottom: sizes.p2 }}>
        <Text style={styles.value}>Google Meet</Text>
        <Text style={[styles.label, { marginTop: 0, marginLeft: sizes.pHalf }]}>
          (Sent upon Verification)
        </Text>
      </View>
      {showApprove ? (
        <PrimaryButton
          title='Approve Date'
          onClick={handleApproveDate}
          isLoading={approvingDates}
          disabled={approvingDates}
        />
      ) : null}
      {showMine ? (
        <Text style={styles.mineText}>(This date is selected by you)</Text>
      ) : null}
    </View>
  );
};

export default SelectedDateCard;

const styles = StyleSheet.create({
  dateCard: {
    padding: sizes.p2,
    borderRadius: sizes.p2,
    backgroundColor: colors.lightRedBackground,
    marginBottom: sizes.p2,
  },
  label: {
    fontSize: 16,
    color: colors.text60,
    marginBottom: sizes.pHalf,
    marginTop: sizes.p2,
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  mineText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text60,
    textAlign: 'center',
  },
});
