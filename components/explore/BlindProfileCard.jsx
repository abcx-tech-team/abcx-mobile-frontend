import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import BlindProfileButton from './BlindProfileButton';
import { colors, ScreenNames, sizes } from '../../utils';
import { useSaveBlindProfile } from '../../hooks/blindProfile.hooks';
import Toast from 'react-native-toast-message';

const BookMark = require('../../assets/icons/bookmark.png');
const BookMarkActive = require('../../assets/icons/bookmark_active.png');

const dummyData = {
  image: require('../../assets/terminal.png'),
};

const BriefProfileCard = ({ briefProfile, navigation }) => {
  const { mutateAsync: saveBlindProfile } = useSaveBlindProfile();
  const [bookMarked, setBookmarked] = useState(briefProfile.savedProfile);

  const handleBookMarkClick = async (company_id, isSaved) => {
    try {
      await saveBlindProfile({ company_id, isSaved });
      setBookmarked(isSaved);
      Toast.show({
        type: 'success',
        text1: isSaved
          ? 'Blind profile added to bookmark successfully'
          : 'Blind profile removed from bookmark successfully',
      });
    } catch (err) {
      Toast.show({
        type: 'success',
        text1: err,
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
    backgroundColor: colors.white,
    borderRadius: sizes.p2,
    elevation: sizes.p1,
    shadowColor: colors.textFull,
    shadowOffset: {
      width: 0,
      height: sizes.pHalf,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10.65,
    paddingHorizontal: 10,
    paddingVertical: sizes.p3,
    marginBottom: sizes.p4,
    marginTop: sizes.p2,
  },
  topBar: {
    paddingHorizontal: sizes.p2,
    marginBottom: sizes.p2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fundingRound: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: '700',
  },
  aboutCompany: {
    backgroundColor: colors.grayBackground,
    paddingHorizontal: sizes.p2,
    paddingVertical: sizes.p3,
    marginBottom: sizes.p2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  companyFunding: {
    paddingHorizontal: sizes.p2,
    flexDirection: 'column',
  },
  label: {
    fontSize: 14,
    color: colors.text20,
    fontWeight: '600',
    marginBottom: sizes.p1,
  },
  value: {
    fontSize: 18,
    color: colors.textFull,
    fontWeight: '600',
  },
  fundingRow: {
    flexDirection: 'row',
    marginBottom: sizes.p2,
    justifyContent: 'space-between',
  },
  fundingInfo: {
    width: '48%',
  },
  aboutInfo: {
    marginBottom: sizes.p2,
  },
  cta: {
    marginVertical: sizes.p2,
    paddingHorizontal: sizes.p2,
  },
  bookMark: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
});
