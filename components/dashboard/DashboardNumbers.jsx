import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors, sizes } from '../../utils';

const DashboardNumbers = () => {
  return (
    <View style={styles.numbers}>
      <Text style={styles.heading}>Trust at the core</Text>
      <Text style={styles.subHeading}>ABCXchange is a growing community</Text>
      <View style={styles.numberContainer}>
        <View style={styles.left}>
          <Text style={styles.number}>150+</Text>
          <Text style={styles.detail}>Institutional Vcs</Text>
        </View>
        <View style={styles.right}>
          <Text style={styles.number}>30+</Text>
          <Text style={styles.detail}>Connections</Text>
        </View>
      </View>
    </View>
  );
};

export default DashboardNumbers;

const styles = StyleSheet.create({
  numbers: {
    marginHorizontal: -sizes.p3,
    borderBottomColor: colors.borderColor,
    borderBottomWidth: 2,
    borderRadius: sizes.p1,
    marginTop: sizes.p3,
    paddingVertical: sizes.p2,
    flexDirection: 'column',
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text80,
    marginBottom: sizes.p1,
  },
  subHeading: {
    fontSize: 16,
    color: '#2D2C2D',
    marginBottom: sizes.p3,
    color: colors.text80,
  },
  numberContainer: {
    flexDirection: 'row',
    marginBottom: sizes.p2,
    justifyContent: 'space-evenly',
  },
  left: {
    marginRight: sizes.p6,
    alignItems: 'center',
  },
  right: {
    alignItems: 'center',
  },
  number: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.text60,
  },
  detail: {
    fontSize: 18,
    marginTop: sizes.p1,
    color: colors.text60,
  },
});
