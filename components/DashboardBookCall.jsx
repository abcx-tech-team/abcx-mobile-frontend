import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import React from 'react';

const Calender = require('../assets/icons/calender.png');

const DashboardBookCall = () => {
  const handleClick = () => {
    console.log('CTA clicked');
  };
  return (
    <View style={styles.call}>
      <View style={styles.left}>
        <Text style={styles.heading}>Still Curious</Text>
        <Text style={styles.subHeading}>Not sure where to begin.</Text>
        <Pressable onPress={handleClick} style={styles.cta}>
          <Text style={styles.ctaText}>Book a Call</Text>
        </Pressable>
      </View>
      <View style={styles.right}>
        <Image source={Calender} style={styles.calenderImage} />
      </View>
    </View>
  );
};

export default DashboardBookCall;

const styles = StyleSheet.create({
  call: {
    flexDirection: 'row',
    marginHorizontal: -24,
    backgroundColor: '#EFEFEF',
    marginTop: 24,
    paddingVertical: 16,
    justifyContent: 'space-between',
    flexShrink: 0,
    marginBottom: 24,
  },
  left: {
    paddingLeft: 32,
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: 280,
    alignItems: 'flex-start',
  },
  calenderImage: {
    height: 110,
    width: 100,
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
    letterSpacing: 1.2,
  },
  subHeading: {
    fontSize: 18,
    marginTop: 8,
  },
  cta: {
    borderWidth: 1,
    borderColor: '#2C61F3',
    paddingHorizontal: 24,
    marginTop: 24,
    paddingVertical: 10,
    borderRadius: 50,
  },
  ctaText: {
    color: '#2C61F3',
    fontSize: 16,
    flexDirection: 'row',
  },
});