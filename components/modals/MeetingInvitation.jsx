import { Modal, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import PrimaryButton from '../common/PrimaryButton';
import SecondaryButton from '../common/SecondaryButton';
import { colors, sizes } from '../../utils';

const MeetingInvitation = ({ visible, onSubmit, onClose }) => {
  return (
    <>
      {visible ? <View style={styles.filter} /> : null}
      <Modal visible={visible} animationType='slide' transparent={true}>
        <View style={styles.main}>
          <View style={styles.content}>
            <Text style={styles.modalHeading}>Invitation Confirmation</Text>
            <View style={styles.meetingDetails}>
              <AntDesign name='calendar' size={24} color='black' />
              <Text style={styles.label}>Meeting Title</Text>
              <Text style={styles.value}>Intro Call - Counterparty name</Text>
              <Text style={styles.label}>Meeting Date</Text>
              <Text style={styles.value}>12 December 2022</Text>
              <Text style={styles.label}>Meeting Time</Text>
              <Text style={styles.value}>01:00 Pm -02:00 PM (IST)</Text>
            </View>

            <View style={styles.actionButtons}>
              <View style={styles.rightButton}>
                <PrimaryButton title='Send Invitation' onClick={onSubmit} />
              </View>
              <View style={styles.leftButton}>
                <SecondaryButton title='Cancel Request' onClick={onClose} />
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
  filter: {
    backgroundColor: 'rgba(32,32,32,0.6)',
    position: 'absolute',
    height: '110%',
    width: '100%',
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
