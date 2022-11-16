import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const DashboardNumbers = () => {
  return (
    <View style={styles.numbers}>
      <Text style={styles.heading}>Trust ar the core</Text>
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
    marginHorizontal: -24,
    borderBottomColor: '#C6D6E3',
    borderBottomWidth: 2,
    borderRadius: 8,
    marginTop: 24,
    paddingVertical: 16,
    flexDirection: 'column',
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subHeading: {
    fontSize: 16,
    color: '#2D2C2D',
    marginBottom: 24,
  },
  numberContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    justifyContent: 'space-evenly',
  },
  left: {
    marginRight: 56,
    alignItems: 'center',
  },
  right: {
    alignItems: 'center',
  },
  number: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#727272',
  },
  detail: {
    fontSize: 18,
    marginTop: 8,
    color: '#727272',
  },
});
