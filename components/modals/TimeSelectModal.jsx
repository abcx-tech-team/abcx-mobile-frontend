import { Modal, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import PrimaryButton from '../common/PrimaryButton';
import { colors, sizes } from '../../utils';
import DateTimePicker from '@react-native-community/datetimepicker';
import ModalFilter from '../common/ModalFilter';
import ModalLayout from './ModalLayout';

const TimeSelectModal = ({ visible, onSubmit, selectedTime }) => {
  const [time, setTime] = useState(new Date(selectedTime));

  return (
    <ModalLayout onClose={onclose} visible={visible}>
      <DateTimePicker
        style={styles.timePicker}
        value={time}
        display='spinner'
        mode='time'
        onChange={(_, time) => setTime(time)}
      />

      <View style={styles.actionButtons}>
        <View style={styles.rightButton}>
          <PrimaryButton
            title='Submit'
            onClick={() => onSubmit(time)}
            noLoader
          />
        </View>
      </View>
    </ModalLayout>
  );
};

export default TimeSelectModal;

const styles = StyleSheet.create({
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
  timePicker: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: sizes.p2,
  },
});
