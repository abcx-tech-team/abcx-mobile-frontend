import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors, sizes } from '../../utils';
import { AntDesign } from '@expo/vector-icons';
import dayjs from 'dayjs';
import { LinearGradient } from 'expo-linear-gradient';

const ApprovedDateCard = ({ date }) => {
  console.log(JSON.stringify(date, null, 2));
  return (
    <LinearGradient
      // Button Linear Gradient
      colors={['rgba(90, 180, 106, 0.1)', 'rgba(224, 106, 110, 0)']}
      style={styles.gradientBackground}
    >
      <View style={styles.dateCard}>
        <AntDesign name='checkcircleo' size={40} color={colors.green} />
        <Text style={styles.label}>
          You’ll be meeting with Mr Elon Musk to discuss Space X.{' '}
        </Text>
        <Text style={styles.time}>
          {dayjs(date.date).format('dddd')}, {dayjs(date.date).format('h:mm A')}{' '}
          IST
        </Text>
        <Text style={styles.date}>
          {dayjs(date.date).format('D MMMM YYYY')}
        </Text>
        <Text style={styles.invitation}>
          Your invitation was sent to gaurav@abcxchange.com
        </Text>
      </View>
    </LinearGradient>
  );
};

export default ApprovedDateCard;

const styles = StyleSheet.create({
  gradientBackground: {
    borderRadius: sizes.p2,
  },
  dateCard: {
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
