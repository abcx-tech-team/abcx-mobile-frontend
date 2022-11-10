import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import BlindProfileButton from './BlindProfileButton';
import { ScreenNames } from '../utils';
import { useSaveBlindProfile } from '../hooks/blindProfile.hooks';
import Toast from 'react-native-toast-message';

const BookMark = require('../assets/icons/bookmark.png');
const BookMarkActive = require('../assets/icons/bookmark_active.png');

const dummyData = {
  image: require('../assets/terminal.png'),
};

const BriefProfileCard = ({ briefProfile, navigation }) => {
  const { mutateAsync: saveBlindProfile } = useSaveBlindProfile();
  const [bookMarked, setBookmarked] = useState(briefProfile.savedProfile);

  const handleBookMarkClick = async (company_id, isSaved) => {
    try {
      await saveBlindProfile({ company_id, isSaved });
      setBookmarked(isSaved);
      Toast.show({
        icon: 'error',
        text1: isSaved
          ? 'Blind profile added to bookmark successfully'
          : 'Blind profile removed from bookmark successfully',
      });
    } catch (err) {
      Toast.show({
        icon: 'error',
        text1: 'Something went wrong!',
      });
    }
  };

  return (
    <View style={styles.briefProfileCard}>
      <View style={styles.topBar}>
        <View>
          <Text style={styles.fundingRound}>
            {briefProfile.companyDetails?.lastFundRound?.type || ''}
          </Text>
        </View>
        <View>
          <Pressable
            onPress={() =>
              handleBookMarkClick(briefProfile.companyUUID, !bookMarked)
            }
          >
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
            <Text style={styles.value}>
              {briefProfile.metaDetails?.sector?.sectorName}
            </Text>
          </View>
          <View style={styles.aboutInfo}>
            <Text style={styles.label}>Location</Text>
            <Text style={styles.value}>
              {briefProfile.metaDetails?.location?.country}
            </Text>
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
            <Text style={styles.value}>
              {briefProfile.companyDetails?.totalFunding}
            </Text>
          </View>
          <View style={styles.fundingInfo}>
            <Text style={styles.label}>Next Funding Round</Text>
            <Text style={styles.value}>
              {briefProfile.companyDetails?.nextFundRound.type}
            </Text>
          </View>
        </View>
        <View style={styles.fundingRow}>
          <View style={styles.fundingInfo}>
            <Text style={styles.label}>Employee Range</Text>
            <Text style={styles.value}>
              {briefProfile.metaDetails?.employeeRange}
            </Text>
          </View>
          <View style={styles.fundingInfo}>
            <Text style={styles.label}>Sector</Text>
            <Text style={styles.value}>
              {briefProfile.metaDetails?.marketType}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.cta}>
        <BlindProfileButton
          title='View More'
          onClick={() => {
            navigation.navigate(ScreenNames.blindProfile, {
              briefProfileId: briefProfile.companyUUID,
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
