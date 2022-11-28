import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors, sizes } from '../../utils';
import PrimaryButton from '../common/PrimaryButton';
import SecondaryButton from '../common/SecondaryButton';

const NoDealCard = () => {
  return (
    <View style={styles.noDealContainer}>
      <View style={styles.noDealCard}>
        <Text style={styles.heading}>You don’t have any deals yet.</Text>
        <Text style={styles.subHeading}>
          You can either explore exciting opportunities listed by other members
          or list a few of your own portfolio companies{' '}
        </Text>
        <View style={styles.buttonContainer}>
          <PrimaryButton title='Explore Opportunities' noLoader />
          <SecondaryButton title='List Companies' noLoader />
        </View>
      </View>
    </View>
  );
};

export default NoDealCard;

const styles = StyleSheet.create({
  noDealCard: {
    paddingVertical: sizes.p4,
    paddingHorizontal: sizes.p2,
    backgroundColor: colors.grayBackground,
    borderRadius: sizes.p2,
  },
  noDealContainer: {
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
