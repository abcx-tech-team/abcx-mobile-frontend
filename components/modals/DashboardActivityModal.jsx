import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { sizes } from '../../utils';
import PrimaryButton from '../common/PrimaryButton';
import SecondaryButton from '../common/SecondaryButton';
import ModalLayout from './ModalLayout';

function DashboardActivityModal({
  visible,
  onSubmit,
  onClose,
  heading,
  subHeading,
}) {
  return (
    <ModalLayout visible={visible} onClose={onClose}>
      <Text style={styles.mainHeading}>{heading}</Text>
      <Text style={styles.subHeading}>{subHeading}</Text>
      <View style={styles.actionButtons}>
        <View style={styles.rightButton}>
          <PrimaryButton title="Okay, let's do this" onClick={onSubmit} />
        </View>
        <View style={styles.leftButton}>
          <SecondaryButton title='Got it' onClick={onClose} />
        </View>
      </View>
    </ModalLayout>
  );
}

const styles = StyleSheet.create({
  mainHeading: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: sizes.p2,
  },
  subHeading: {
    fontSize: 16,
    fontWeight: '500',
    color: '#637381',
  },
  actionButtons: {
    marginVertical: sizes.p3,
  },
  rightButton: {
    marginBottom: sizes.p1,
  },
});

export default DashboardActivityModal;
