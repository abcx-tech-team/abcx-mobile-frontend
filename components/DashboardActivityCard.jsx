import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { colors, sizes } from '../utils';

const DashboardActivityCard = ({
  leftIcon,
  heading,
  subHeading,
  ctaIcon,
  ctaText,
}) => {
  return (
    <View style={styles.activityCard}>
      <View style={styles.left}>
        <Image source={leftIcon} style={styles.circleTick} />
      </View>
      <View style={styles.right}>
        <Text style={styles.cardHeading}>{heading}</Text>
        <Text style={styles.cardSubHeading}>{subHeading}</Text>
        <View style={styles.cardCta}>
          <Text style={styles.cardCtaText}>{ctaText}</Text>
          <Image style={styles.arrowIcon} source={ctaIcon} />
        </View>
      </View>
    </View>
  );
};

export default DashboardActivityCard;

const styles = StyleSheet.create({
  activityCard: {
    backgroundColor: colors.white,
    padding: sizes.p2,
    flexDirection: 'row',
    borderRadius: sizes.p1,
    shadowColor: colors.textFull,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
    marginBottom: sizes.p2,
  },
  circleTick: {
    height: 22,
    width: 22,
  },
  cardHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text80,
  },
  cardSubHeading: {
    fontSize: 15,
    color: colors.text40,
    marginVertical: sizes.p1,
  },
  cardCta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardCtaText: {
    fontSize: 13,
    fontWeight: '500',
    color: colors.blue,
  },
  left: {
    marginRight: sizes.p2,
  },
  right: {
    flex: 1,
  },
});
