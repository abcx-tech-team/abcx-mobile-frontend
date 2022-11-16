import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

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
    backgroundColor: '#fff',
    padding: 16,
    flexDirection: 'row',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
    marginBottom: 16,
  },
  circleTick: {
    height: 22,
    width: 22,
  },
  cardHeading: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardSubHeading: {
    fontSize: 15,
    color: '#898989',
    marginVertical: 8,
  },
  cardCta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardCtaText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#0018FF',
  },
  left: {
    marginRight: 16,
  },
  right: {
    flex: 1,
  },
});
