import { Image, Modal, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SecondaryButton from '../common/SecondaryButton';
import PrimaryButton from '../common/PrimaryButton';
import * as RootNavigation from '../../utils/RootNavigation';
import { ScreenNames } from '../../utils';
import ModalFilter from '../common/ModalFilter';
import ModalLayout from './ModalLayout';

const Tick = require('../../assets/icons/circle_tick_green.png');

const RequestConfirmBlindProfile = ({ visible, onSubmit, onClose }) => {
  const handleDealRom = () => {
    onSubmit();
    RootNavigation.navigate(ScreenNames.dealRoom);
  };
  const handleBack = () => {
    onClose();
    RootNavigation.navigate(ScreenNames.explore);
  };
  return (
    <ModalLayout onClose={onClose} visible={visible}>
      <View>
        <Image source={Tick} style={styles.greenTick} />
      </View>
      <Text style={styles.mainHeading}>Request Confirmed</Text>
      <Text style={styles.subHeading}>
        Thank you for showing interest. We have intimated the counterparty.
        You’ll be notified once the request is approved.
      </Text>
      <View style={styles.actionButtons}>
        <View style={styles.rightButton}>
          <PrimaryButton title='View Deal' onClick={handleDealRom} noLoader />
        </View>
        <View style={styles.leftButton}>
          <SecondaryButton title='Go Back' onClick={handleBack} noLoader />
        </View>
      </View>
    </ModalLayout>
  );
};

export default RequestConfirmBlindProfile;

const styles = StyleSheet.create({
  mainHeading: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
  },
  subHeading: {
    fontSize: 16,
    color: '#637381',
  },

  actionButtons: {
    marginBottom: 24,
    marginTop: 32,
  },
  greenTick: {
    height: 30,
    width: 30,
    marginBottom: 16,
  },
});
