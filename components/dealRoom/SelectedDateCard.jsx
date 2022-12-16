import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors, sizes } from '../../utils';
import { AntDesign } from '@expo/vector-icons';

const SelectedDateCard = () => {
  return (
    <View style={styles.dateCard}>
      <AntDesign name='calendar' size={40} color={colors.lightRed} />
      <Text style={styles.label}>Meeting Title</Text>
      <Text style={styles.value}>Intro Call - Counterparty name</Text>
      <Text style={styles.label}>Meeting Date</Text>
      <Text style={styles.value}>12 December 2022</Text>
      <Text style={styles.label}>Meeting Time</Text>
      <Text style={styles.value}>01:00 Pm -02:00 PM (IST)</Text>
      <Text style={styles.label}>Meeting Venue</Text>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.value}>Google Meet</Text>
        <Text style={[styles.label, { marginTop: 0, marginLeft: sizes.pHalf }]}>
          (Sent upon Verification)
        </Text>
      </View>
    </View>
  );
};

export default SelectedDateCard;

const styles = StyleSheet.create({
  dateCard: {
    padding: sizes.p2,
    borderRadius: sizes.p2,
    backgroundColor: colors.lightRedBackground,
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
});
