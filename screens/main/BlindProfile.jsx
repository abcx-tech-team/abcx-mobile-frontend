import {
  Button,
  Image,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { ScreenNames } from '../../utils';
import { useBriefProfileById } from '../../hooks/blindProfile.hooks';
import { SvgUri } from 'react-native-svg';
import PrimaryButton from '../../components/PrimaryButton';

const Back = require('../../assets/icons/back.png');
const House = require('../../assets/icons/house.png');
const Location = require('../../assets/icons/location.png');
const Apple = require('../../assets/icons/apple.png');

const tags = [
  {
    tagName: 'Cybersecurity',
    iconUrl:
      'https://dev.abcxchange.com/media/keywords/cybersecurity-icon_VBf9HAY.svg',
  },
  {
    tagName: 'Computer',
    iconUrl:
      'https://dev.abcxchange.com/media/keywords/computer-icon_qhIaGZk.svg',
  },
  {
    tagName: 'Network Security',
    iconUrl:
      'https://dev.abcxchange.com/media/keywords/network_security-icon_7tKyvkD.svg',
  },
];

const BriefProfile = ({ route, navigation }) => {
  const { briefProfileId } = route.params;
  const { data: briefProfileData } = useBriefProfileById(
    briefProfileId,
    !!briefProfileId
  );

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.navigate(ScreenNames.explore)}
        style={styles.back}
      >
        <Image source={Back} />
      </Pressable>
      <View style={styles.companyMetaData}>
        <View>
          <Text style={styles.companyDetails}>
            {briefProfileData?.results[0].subtitle || ''}
          </Text>
        </View>
        <View>
          <View style={styles.companyMeta}>
            <View style={styles.imageContainer}>
              <Image source={House} style={styles.image} />
            </View>
            <View style={styles.data}>
              <Text style={styles.dataText}>
                Founded: {briefProfileData?.results[0].metaDetails.founded}
              </Text>
            </View>
          </View>
          <View style={styles.companyMeta}>
            <View style={styles.imageContainer}>
              <Image source={Location} style={styles.image} />
            </View>
            <View style={styles.data}>
              <Text style={styles.dataText}>
                Location:{' '}
                {briefProfileData?.results[0].metaDetails.location?.city
                  ? `${briefProfileData?.results[0].metaDetails.location?.city}, `
                  : ''}
                {briefProfileData?.results[0].metaDetails.location?.country ||
                  ''}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.aboutCompany}>
        <View style={styles.companyInfo}>
          <View style={styles.companyInfoRow}>
            <View style={styles.companyInfoCard}>
              <Text style={styles.label}>Sector</Text>
              <Text style={styles.value}>
                {briefProfileData?.results[0].metaDetails?.sector?.sectorName ||
                  ''}
              </Text>
            </View>
            <View style={styles.companyInfoCard}>
              <Text style={styles.label}>Market Type</Text>
              <Text style={styles.value}>
                {briefProfileData?.results[0].metaDetails?.marketType || ''}
              </Text>
            </View>
          </View>
          <View style={styles.companyInfoRow}>
            <View style={styles.companyInfoCard}>
              <Text style={styles.label}>No of Employee</Text>
              <Text style={styles.value}>
                {briefProfileData?.results[0].metaDetails?.employeeRange || ''}
              </Text>
            </View>
            <View style={styles.companyInfoCard}>
              <Text style={styles.label}>Revenue</Text>
              <Text style={styles.value}>
                {briefProfileData?.results[0].metaDetails?.currentRevenue || ''}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.companyFunding}>
          <View style={styles.fundingRow}>
            <View style={styles.fundingInfo}>
              <Text style={styles.label}>Total Funding Round</Text>
              <Text style={styles.value}>
                {briefProfileData?.results[0].companyDetails?.totalFunding ||
                  ''}
              </Text>
            </View>
            <View style={styles.fundingInfo}>
              <Text style={styles.label}>Next Funding Round</Text>
              <Text style={styles.value}>
                {briefProfileData?.results[0].companyDetails
                  ?.nextFundingTarget || ''}
              </Text>
            </View>
          </View>
          <View style={styles.fundingRow}>
            <View style={styles.fundingInfo}>
              <Text style={styles.label}>Last Funding</Text>
              <Text style={styles.value}>
                {briefProfileData?.results[0].companyDetails?.lastFundRound
                  ?.year
                  ? `${briefProfileData?.results[0].companyDetails?.lastFundRound.year} - `
                  : null}{' '}
                {briefProfileData?.results[0].companyDetails?.lastFundRound
                  ?.type || ''}
              </Text>
            </View>
            <View style={styles.fundingInfo}>
              <Text style={styles.label}>Next Funding</Text>
              <Text style={styles.value}>
                {briefProfileData?.results[0].companyDetails?.nextFundRound
                  ?.year
                  ? `${briefProfileData?.results[0].companyDetails?.nextFundRound?.year} - `
                  : null}{' '}
                {briefProfileData?.results[0].companyDetails?.nextFundRound
                  ?.type || ''}
              </Text>
            </View>
          </View>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.tags}>
            {tags.map((item) => (
              <View style={styles.tag} key={item.tagName}>
                <Image source={Apple} style={styles.tagImage} />
                <Text style={styles.tagText}>{item.tagName}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
      <View style={styles.CTA}>
        <PrimaryButton
          title='Request Brief Profile'
          onClick={() => console.log(briefProfileData.results[0].companyUUID)}
        />
      </View>
    </View>
  );
};

export default BriefProfile;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    flex: 1,
    backgroundColor: 'rgba(42, 60, 137, 0.1)',
  },
  companyMetaData: {
    paddingHorizontal: 24,
    flexDirection: 'column',
    height: Platform.OS === 'ios' ? '23%' : '20%',
    justifyContent: 'space-evenly',
  },
  aboutCompany: {
    paddingHorizontal: 24,
    paddingTop: 24,
    backgroundColor: '#fff',
    height: Platform.OS === 'ios' ? '58%' : '60%',
    marginTop: 8,
  },
  CTA: {
    paddingHorizontal: 24,
    height: Platform.OS === 'ios' ? '19%' : '20%',
    backgroundColor: '#fff',
    borderTopColor: 'rgba(239, 239, 239, 1)',
    borderTopWidth: 1,
    paddingTop: 24,
  },
  back: {
    marginBottom: 32,
    marginLeft: 24,
  },
  companyDetails: {
    color: 'rgba(99, 115, 129, 1)',
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 24,
  },
  companyMeta: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  imageContainer: {
    marginRight: 12,
  },
  image: {
    height: 20,
    width: 20,
  },
  dataText: {
    color: 'rgba(52, 73, 94, 1)',
    fontSize: 16,
    fontWeight: '600',
  },
  companyFunding: {
    paddingHorizontal: 16,
    flexDirection: 'column',
    backgroundColor: '#FBFBFB',
    paddingTop: 16,
    borderRadius: 8,
    marginTop: Platform.OS === 'ios' ? 16 : 8,
    marginBottom: Platform.OS === 'ios' ? 24 : 16,
  },
  label: {
    fontSize: Platform.OS === 'ios' ? 14 : 12,
    color: '#C7C7C7',
    fontWeight: '600',
    marginBottom: 8,
  },
  value: {
    fontSize: Platform.OS === 'ios' ? 18 : 15,
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
  companyInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  companyInfoCard: {
    backgroundColor: '#fbfbfb',
    borderRadius: 8,
    width: '45%',
    padding: 16,
  },
  tag: {
    backgroundColor: '#fbfbfb',
    padding: 8,
    flexDirection: 'row',
    borderRadius: 32,
    marginRight: 16,
    alignItems: 'center',
  },
  tagImage: {
    height: 15,
    width: 15,
  },
  tagText: {
    fontSize: Platform.OS === 'ios' ? 16 : 12,
    fontWeight: 'bold',
    color: '#637381',
    marginLeft: 8,
  },
  tags: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
  },
});
