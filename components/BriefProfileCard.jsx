import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import BriefProfileButton from './BriefProfileButton';
import { ScreenNames } from '../utils';

const BookMark = require('../assets/icons/bookmark.png');
const BookMarkActive = require('../assets/icons/bookmark_active.png');

const dummyData = {
  fundingRound: 'Series A',
  sector: 'Real Estate',
  location: 'London, Uk',
  totalFundingRound: '$10M - $25M',
  nextFundingRound: '$1M - $5M',
  employeeRange: '501 - 1K',
  businessSector: 'B2B',
  image: require('../assets/terminal.png'),
};

const BriefProfileCard = ({ briefProfileId, navigation }) => {
  const [bookMarked, setBookMarked] = useState(false);
  return (
    <View style={styles.briefProfileCard}>
      <View style={styles.topBar}>
        <View>
          <Text style={styles.fundingRound}>{dummyData.fundingRound}</Text>
        </View>
        <View>
          <Pressable onPress={() => setBookMarked((prev) => !prev)}>
            <Image
              source={bookMarked ? BookMarkActive : BookMark}
              style={styles.bookMark}
            />
          </Pressable>
        </View>
      </View>
      <View style={styles.aboutCompany}>
        <View>
          <View style={styles.aboutInfo}>
            <Text style={styles.label}>Sector</Text>
            <Text style={styles.value}>{dummyData.sector}</Text>
          </View>
          <View style={styles.aboutInfo}>
            <Text style={styles.label}>Location</Text>
            <Text style={styles.value}>{dummyData.location}</Text>
          </View>
        </View>
        <View>
          <Image source={dummyData.image} />
        </View>
      </View>
      <View style={styles.companyFunding}>
        <View style={styles.fundingRow}>
          <View style={styles.fundingInfo}>
            <Text style={styles.label}>Total Funding Round</Text>
            <Text style={styles.value}>{dummyData.totalFundingRound}</Text>
          </View>
          <View style={styles.fundingInfo}>
            <Text style={styles.label}>Next Funding Round</Text>
            <Text style={styles.value}>{dummyData.nextFundingRound}</Text>
          </View>
        </View>
        <View style={styles.fundingRow}>
          <View style={styles.fundingInfo}>
            <Text style={styles.label}>Employee Range</Text>
            <Text style={styles.value}>{dummyData.employeeRange}</Text>
          </View>
          <View style={styles.fundingInfo}>
            <Text style={styles.label}>Sector</Text>
            <Text style={styles.value}>{dummyData.businessSector}</Text>
          </View>
        </View>
      </View>
      <View style={styles.cta}>
        <BriefProfileButton
          title='View More'
          onClick={() => {
            navigation.navigate(ScreenNames.briefProfile, {
              briefProfileId: briefProfileId,
            });
          }}
        />
      </View>
    </View>
  );
};

export default BriefProfileCard;

const styles = StyleSheet.create({
  briefProfileCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10.65,
    paddingHorizontal: 10,
    paddingVertical: 24,
    marginBottom: 32,
    marginTop: 16,
  },
  topBar: {
    paddingHorizontal: 16,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fundingRound: {
    color: '#6F0652',
    fontSize: 20,
    fontWeight: '700',
  },
  aboutCompany: {
    backgroundColor: '#fbfbfb',
    paddingHorizontal: 16,
    paddingVertical: 24,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  companyFunding: {
    paddingHorizontal: 16,
    flexDirection: 'column',
  },
  label: {
    fontSize: 14,
    color: '#C7C7C7',
    fontWeight: '600',
    marginBottom: 8,
  },
  value: {
    fontSize: 18,
    color: '#000',
    fontWeight: '600',
  },
  fundingRow: {
    flexDirection: 'row',
    marginBottom: 16,
    justifyContent: 'space-between',
  },
  fundingInfo: {
    width: '48%',
  },
  aboutInfo: {
    marginBottom: 16,
  },
  cta: {
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  bookMark: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
});
