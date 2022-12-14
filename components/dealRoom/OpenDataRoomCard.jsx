import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors, sizes } from '../../utils';
import PrimaryButton from '../common/PrimaryButton';
import SecondaryButton from '../common/SecondaryButton';

const OpenDataRoomCard = () => {
  return (
    <View style={styles.openDataRoomContainer}>
      <View style={styles.openDataRoomCard}>
        <Text style={styles.heading}>Want to share more files?</Text>
        <Text style={styles.subHeading}>
          Data room is a discreet cloud folder only accessible by the parties
          and gets deleted after the use.
        </Text>
        <View style={styles.buttonContainer}>
          <PrimaryButton title='Open Data Room' noLoader />
          <SecondaryButton title='Cancel Deal' noLoader />
        </View>
      </View>
    </View>
  );
};

export default OpenDataRoomCard;

const styles = StyleSheet.create({
  openDataRoomCard: {
    paddingVertical: sizes.p4,
    paddingHorizontal: sizes.p2,
    backgroundColor: colors.grayBackground,
    borderRadius: sizes.p2,
    width: '100%',
  },
  openDataRoomContainer: {
    paddingHorizontal: sizes.p2,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: sizes.p2,
  },
  subHeading: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.text60,
    marginBottom: sizes.p4,
  },
});
