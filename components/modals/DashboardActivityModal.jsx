import React from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';
import { sizes } from '../../utils';
import PrimaryButton from '../common/PrimaryButton';
import SecondaryButton from '../common/SecondaryButton';

function DashboardActivityModal({
  visible,
  onSubmit,
  onClose,
  heading,
  subHeading,
}) {
  return (
    <>
      {visible ? <View style={styles.filter} /> : null}
      <Modal visible={visible} animationType='slide' transparent={true}>
        <View style={styles.main}>
          <View style={styles.content}>
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
          </View>
        </View>
      </Modal>
    </>
  );
}

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
    paddingHorizontal: sizes.p4,
    backgroundColor: '#fff',
    marginTop: 'auto',
    paddingTop: sizes.p5,
    borderRadius: sizes.p4,
  },
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
