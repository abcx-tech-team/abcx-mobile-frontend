import { Modal, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import PrimaryButton from '../common/PrimaryButton';
import { colors, sizes } from '../../utils';
import DateTimePicker from '@react-native-community/datetimepicker';
import ModalFilter from '../common/ModalFilter';

const DateSelectModal = ({ visible, onSubmit, date }) => {
  const [time, setTime] = useState(date ? new Date(date) : new Date());

  return (
    <>
      <ModalFilter />
      <Modal visible={visible} animationType='slide' transparent={true}>
        <View style={styles.main}>
          <View style={styles.content}>
            <DateTimePicker
              style={styles.timePicker}
              value={time || new Date()}
              display='spinner'
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
          </View>
        </View>
      </Modal>
    </>
  );
};

export default DateSelectModal;

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
  timePicker: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: sizes.p2,
  },
});
