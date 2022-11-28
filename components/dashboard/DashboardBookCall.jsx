import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import React from 'react';
import { colors, sizes } from '../../utils';

const Calender = require('../../assets/icons/calender.png');

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
    marginHorizontal: -sizes.p3,
    backgroundColor: colors.lightRedBackground,
    marginTop: sizes.p3,
    paddingVertical: sizes.p2,
    justifyContent: 'space-between',
    flexShrink: 0,
    marginBottom: sizes.p3,
  },
  left: {
    paddingLeft: sizes.p4,
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
    color: colors.text80,
    letterSpacing: 1.2,
  },
  subHeading: {
    fontSize: 18,
    marginTop: sizes.p1,
    color: colors.text80,
  },
  cta: {
    borderWidth: 1,
    borderColor: colors.text60,
    paddingHorizontal: 24,
    marginTop: 24,
    paddingVertical: 10,
    borderRadius: 50,
  },
  ctaText: {
    color: colors.text60,
    fontSize: 16,
    flexDirection: 'row',
  },
});
