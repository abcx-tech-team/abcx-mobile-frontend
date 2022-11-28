import {
  Image,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { colors, ScreenNames, sizes } from '../../utils';
import { useBriefProfileById } from '../../hooks/blindProfile.hooks';
import PrimaryButton from '../../components/common/PrimaryButton';
import RequestBlindProfileModal from '../../components/modals/RequestBlindProfileModal';
import { useConfirmation } from '../../context/ModalContext';
import RequestConfirmBlindProfile from '../../components/modals/RequestConfirmBlindProfile';

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
  const confirmation = useConfirmation();

  const { briefProfileId } = route.params;
  const { data: briefProfileData } = useBriefProfileById(
    briefProfileId,
    !!briefProfileId
  );

  const handleRequestBlindProfile = async (companyId) => {
    try {
      await confirmation({ Component: RequestBlindProfileModal });
      console.log(companyId);
      await confirmation({ Component: RequestConfirmBlindProfile });
    } catch (err) {
      console.log('catch e');
    }
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.navigate(ScreenNames.explore)}
        style={({ pressed }) => [
          styles.back,
          {
            backgroundColor: pressed ? colors.text20 : null,
          },
        ]}
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
        <View>
          <View style={styles.companyInfoRow}>
            <View style={styles.companyInfoCard}>
              <Text style={styles.label}>Sector</Text>
              <Text style={[styles.value, { fontSize: 18 }]}>
                {briefProfileData?.results[0].metaDetails?.sector?.sectorName ||
                  ''}
              </Text>
            </View>
          </View>
          <View style={styles.companyInfoRow}>
            <View style={[styles.companyInfoCard, { paddingRight: 8 }]}>
              <Text style={styles.label}>Market Type</Text>
              <Text style={styles.value}>
                {briefProfileData?.results[0].metaDetails?.marketType || ''}
              </Text>
            </View>
            <View style={[styles.companyInfoCard, { paddingHorizontal: 8 }]}>
              <Text style={styles.label}>No of Employee</Text>
              <Text style={styles.value}>
                {briefProfileData?.results[0].metaDetails?.employeeRange || ''}
              </Text>
            </View>
            <View style={[styles.companyInfoCard, { paddingLeft: 8 }]}>
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
            {tags.map((item, index) => (
              <View
                style={[
                  styles.tag,
                  index === tags.length - 1 ? styles.noMarginRight : null,
                ]}
                key={item.tagName}
              >
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
          onClick={() =>
            handleRequestBlindProfile(briefProfileData.results[0].companyUUID)
          }
        />
      </View>
    </View>
  );
};

export default BriefProfile;

const styles = StyleSheet.create({
  container: {
    paddingTop: sizes.p8,
    flex: 1,
    backgroundColor: colors.blindProfileBackground,
    position: 'relative',
  },

  companyMetaData: {
    paddingHorizontal: sizes.p3,
    flexDirection: 'column',
    height: Platform.OS === 'ios' ? '23%' : '20%',
    justifyContent: 'space-evenly',
  },
  aboutCompany: {
    paddingHorizontal: sizes.p3,
    paddingVertical: sizes.p3,
    backgroundColor: colors.white,
    marginTop: sizes.p1,
  },
  CTA: {
    paddingHorizontal: sizes.p3,
    height: Platform.OS === 'ios' ? '19%' : '20%',
    backgroundColor: colors.white,
    borderTopColor: colors.borderColor,
    borderTopWidth: 1,
    paddingTop: sizes.p3,
  },
  back: {
    marginBottom: sizes.p2,
    marginLeft: sizes.p3,
    height: sizes.p5,
    width: sizes.p5,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  companyDetails: {
    color: colors.text40,
    fontSize: 18,
    fontWeight: '500',
    marginBottom: sizes.p3,
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
    color: colors.text60,
    fontSize: 16,
    fontWeight: '600',
  },
  companyFunding: {
    paddingHorizontal: sizes.p2,
    flexDirection: 'column',
    backgroundColor: colors.grayBackground,
    paddingTop: sizes.p2,
    borderRadius: sizes.p1,
    marginTop: Platform.OS === 'ios' ? sizes.p2 : sizes.p1,
    marginBottom: Platform.OS === 'ios' ? sizes.p3 : sizes.p2,
  },
  label: {
    fontSize: Platform.OS === 'ios' ? 12 : 10,
    color: colors.text20,
    fontWeight: '600',
    marginBottom: sizes.p1,
  },
  value: {
    fontSize: Platform.OS === 'ios' ? 15 : 12,
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
  companyInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: sizes.p2,
  },
  companyInfoCard: {
    backgroundColor: colors.grayBackground,
    borderRadius: sizes.p1,
    padding: sizes.p2,
    flexGrow: 1,
    flexShrink: 0,
  },
  tag: {
    backgroundColor: colors.grayBackground,
    padding: sizes.p1,
    flexDirection: 'row',
    borderRadius: sizes.p4,
    marginRight: sizes.p2,
    alignItems: 'center',
  },
  noMarginRight: {
    marginRight: 0,
  },
  tagImage: {
    height: 15,
    width: 15,
  },
  tagText: {
    fontSize: Platform.OS === 'ios' ? 14 : 12,
    fontWeight: 'bold',
    color: colors.text40,
    marginLeft: sizes.p1,
  },
  tags: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
  },
});
