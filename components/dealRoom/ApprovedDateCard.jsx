import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors, sizes } from '../../utils';
import { AntDesign } from '@expo/vector-icons';

const ApprovedDateCard = () => {
  return (
    <View style={styles.dateCard}>
      <AntDesign name='checkcircleo' size={40} color={colors.green} />
      <Text style={styles.label}>
        You’ll be meeting with Mr Elon Musk to discuss Space X.{' '}
      </Text>
      <Text style={styles.time}>Tuesday, 01:00PM IST</Text>
      <Text style={styles.date}>12 December 2022</Text>
      <Text style={styles.invitation}>
        Your invitation was sent to gaurav@abcxchange.com
      </Text>
    </View>
  );
};

export default ApprovedDateCard;

const styles = StyleSheet.create({
  dateCard: {
    backgroundColor: colors.greenBackground,
    padding: sizes.p2,
    borderRadius: sizes.p2,
  },
  label: {
    fontSize: 18,
    color: colors.text60,
    marginVertical: sizes.p2,
  },
  time: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: sizes.p1,
  },
  date: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: sizes.p2,
  },
  invitation: {
    fontSize: 16,
    color: colors.text60,
  },
});
