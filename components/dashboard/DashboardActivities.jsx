import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors, sizes, pieFilling } from '../../utils';
import DashboardActivityCard from './DashboardActivityCard';

const percentage = 25;

const Clock = require('../../assets/icons/clock.png');

const activityCardData = [
  {
    id: 1,
    leftIcon: require('../../assets/icons/circle-tick.png'),
    heading: 'Tell us more about you',
    subHeading: 'Add the sectors, stages revenue number that you prefer',
    ctaText: 'Why should you do this?',
    ctaIcon: require('../../assets/icons/right-arrow.png'),
    modalHeading: 'You get personalisation recommendations',
    modalText: `We strive to provide a personalized experience on our platform by carefully matching your criteria with the companies we feature. We don't simply present a random selection of companies, but rather carefully curate the list to ensure that it meets your specific needs.
      
It takes less than 3 mins`,
  },
  {
    id: 2,
    leftIcon: require('../../assets/icons/circle-tick.png'),
    heading: 'Explore companies',
    subHeading:
      'Find a recommended list of companies that suits your investment style',
    ctaText: 'How do we curate this list?',
    ctaIcon: require('../../assets/icons/right-arrow.png'),
    modalHeading: 'Our matching algorithm',
    modalText: `Our machine learning-based matching algorithm helps us identify companies that meet your specific criteria.
      
We continuously update and improve the algorithm using real-time feedback from you to ensure that it remains relevant to your changing needs.`,
  },
  {
    id: 3,
    leftIcon: require('../../assets/icons/circle-tick.png'),
    heading: 'List portfolio companies',
    subHeading:
      'Find relevant institutional investors within 36 hours of listing. ',
    ctaText: 'Why should you list companies?',
    ctaIcon: require('../../assets/icons/right-arrow.png'),
    modalHeading: 'Why invite portfolio companies',
    modalText: `We have an extensive network of institutional venture capital firms that are actively seeking new investment opportunities. 

By inviting your portfolio companies to our platform, they will have access to this network of potential investors.
    
Our platform is designed to streamline the process of connecting with investors, allowing companies to easily view and connect with potential investors in just a few clicks.
    
We understand that time is of the essence when it comes to raising capital, which is why we aim to connect companies with relevant investors in less than 36 hours.`,
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
    backgroundColor: colors.dashboardBackgroundPink,
    borderRadius: 16,
    padding: sizes.p2,
    marginTop: 8,
  },
  activityHeading: {
    flexDirection: 'row',
  },
  left: {
    marginRight: sizes.p2,
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
    marginBottom: sizes.p1,
    color: colors.text80,
  },
  subHeading: {
    fontSize: 15,
    color: colors.text40,
  },
  tabContainer: {
    flexDirection: 'row',
    marginVertical: sizes.p3,
  },
  tab: {
    backgroundColor: colors.yellowBackground,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: sizes.p2,
    borderRadius: 50,
  },
  clock: {
    height: 15,
    width: 15,
    marginRight: sizes.p1,
  },
  tabText: {
    color: colors.yellow,
    fontSize: 12,
    fontWeight: 'bold',
  },
});
