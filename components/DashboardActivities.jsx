import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { pieFilling } from '../utils';
import DashboardActivityCard from './DashboardActivityCard';

const percentage = 25;

const Clock = require('../assets/icons/clock.png');

const activityCardData = [
  {
    id: 1,
    leftIcon: require('../assets/icons/circle-tick.png'),
    heading: 'Tell us more about you',
    subHeading: 'Add the sectors, stages revenue number that you prefer',
    ctaText: 'Why should you do this?',
    ctaIcon: require('../assets/icons/right-arrow.png'),
  },
  {
    id: 2,
    leftIcon: require('../assets/icons/circle-tick.png'),
    heading: 'Explore companies',
    subHeading:
      'Find a recommended list of companies that suits your investment style',
    ctaText: 'How do we curate this list?',
    ctaIcon: require('../assets/icons/right-arrow.png'),
  },
  {
    id: 3,
    leftIcon: require('../assets/icons/circle-tick.png'),
    heading: 'List portfolio companies',
    subHeading:
      'Find relevant institutional investors within 36 hours of listing. ',
    ctaText: 'Why should you list companies?',
    ctaIcon: require('../assets/icons/right-arrow.png'),
  },
];

const DashboardActivities = () => {
  return (
    <View style={styles.activities}>
      <View style={styles.activityHeading}>
        <View style={styles.left}>
          <View style={[styles.pie, { ...pieFilling(percentage) }]}>
            <Text style={styles.piePercentage}>{percentage}%</Text>
          </View>
        </View>
        <View style={styles.right}>
          <Text style={styles.heading}>Let's get you set up</Text>
          <Text style={styles.subHeading}>
            Complete the list for best result
          </Text>
        </View>
      </View>
      <View style={styles.tabContainer}>
        <View style={styles.tab}>
          <Image source={Clock} style={styles.clock} />
          <Text style={styles.tabText}>Needs Attention</Text>
        </View>
      </View>
      <View style={styles.cardContainer}>
        {activityCardData.map((item) => (
          <DashboardActivityCard {...item} key={item.id} />
        ))}
      </View>
    </View>
  );
};

export default DashboardActivities;

const styles = StyleSheet.create({
  activities: {
    backgroundColor: 'rgba(180, 126, 165, 0.1)',
    borderRadius: 16,
    padding: 16,
    marginTop: 8,
  },
  activityHeading: {
    flexDirection: 'row',
  },
  left: {
    marginRight: 16,
  },
  pie: {
    height: 72,
    width: 72,
    borderWidth: 12,
    borderColor: '#CBE3F7',
    borderRadius: 100,
    transform: [{ rotate: '-45deg' }],
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  piePercentage: {
    transform: [{ rotate: '45deg' }],
    fontSize: 16,
    fontWeight: 'bold',
  },
  right: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },
  subHeading: {
    fontSize: 15,
    color: '#898989',
  },
  tabContainer: {
    flexDirection: 'row',
    marginVertical: 24,
  },
  tab: {
    backgroundColor: 'rgba(248, 176, 50, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 50,
  },
  clock: {
    height: 15,
    width: 15,
    marginRight: 8,
  },
  tabText: {
    color: '#E89612',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
