import { useContext, useMemo, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import ButtonPair from '../../../components/common/ButtonPair';
import CompanyAccordion from '../../../components/dealRoom/CompanyAccordion';
import CompanyInfo from '../../../components/dealRoom/CompanyInfo';
import CompanyKeywords from '../../../components/dealRoom/CompanyKeywords';
import CompanyOverview from '../../../components/dealRoom/CompanyOverview';
import ContactInformation from '../../../components/dealRoom/ContactInformation';
import CounterPartyInfo from '../../../components/dealRoom/CounterPartyInfo';
import DealScreenHeader from '../../../components/dealRoom/DealScreenHeader';
import Downloads from '../../../components/dealRoom/Downloads';
import FundingInformation from '../../../components/dealRoom/FundingInformation';
import ManagementInformation from '../../../components/dealRoom/ManagementInformation';
import { TabListContext } from '../../../context/dealContext';
import { useCompanyProfile } from '../../../hooks/deal.hooks';
import { colors, ScreenNames, sizes } from '../../../utils';

const House = require('../../../assets/icons/house.png');
const Location = require('../../../assets/icons/location.png');

const CompanyProfile = ({ navigation, route }) => {
  const { dealId, isBuyer } = route.params;
  const { tabList } = useContext(TabListContext);
  const { data: companyData } = useCompanyProfile(dealId, !!dealId);
  const [expanded, setExpanded] = useState(0);

  const companyAccordionData = useMemo(
    () => [
      {
        title: 'Overview',
        child: <CompanyOverview company={companyData} />,
      },
      {
        title: 'Funding Information',
        child: <FundingInformation company={companyData} />,
      },
      {
        title: 'Management Information',
        child: <ManagementInformation company={companyData} />,
      },
      {
        title: 'Company Keywords',
        child: <CompanyKeywords company={companyData} />,
      },
      {
        title: 'Company Information',
        child: <CompanyInfo company={companyData} />,
      },
      {
        title: 'Contact Information',
        child: <ContactInformation company={companyData} />,
      },
      {
        title: 'Counterparty Information',
        child: <CounterPartyInfo company={companyData} />,
      },
      {
        title: 'Downloads',
        child: <Downloads company={companyData} />,
      },
    ],
    [companyData]
  );

  return (
    <View style={styles.companyProfile}>
      <DealScreenHeader
        onBackPress={() => navigation.goBack()}
        screenName={companyData?.companyMeta.companyName}
      />
      <View style={styles.companyProfileContent}>
        <View style={styles.basicDetails}>
          <Text style={styles.companyDescription}>
            {companyData?.companyMeta.subtitle}
          </Text>
          <View style={styles.basicView}>
            <Image source={House} style={styles.basicImage} />
            <Text style={styles.basicText}>
              Founded: {companyData?.companyInfo.founded}
            </Text>
          </View>
          <View style={styles.basicView}>
            <Image source={Location} style={styles.basicImage} />
            <Text style={styles.basicText}>
              Location: {companyData?.companyInfo.location}
            </Text>
          </View>
        </View>
        <View style={styles.accordionContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {companyAccordionData.map((item, index) => (
              <CompanyAccordion
                {...item}
                expanded={expanded === index}
                setExpanded={setExpanded}
                key={index}
                index={index}
              />
            ))}
          </ScrollView>
        </View>
      </View>
      <ButtonPair
        primaryCTA='Next Steps'
        secondaryCTA='View Timeline'
        primaryCTAFunction={() =>
          navigation.navigate(ScreenNames.nextSteps, { dealId, isBuyer })
        }
        secondaryCTAFunction={() =>
          navigation.navigate(ScreenNames.timeline, { dealId, isBuyer })
        }
      />
    </View>
  );
};

export default CompanyProfile;

const styles = StyleSheet.create({
  companyProfile: {
    flex: 1,
    backgroundColor: 'rgba(42, 60, 137, 0.16)',
  },
  companyProfileContent: {
    flex: 1,
  },
  basicDetails: {
    paddingHorizontal: sizes.p2,
  },
  basicView: {
    flexDirection: 'row',
    marginBottom: sizes.p1,
  },
  basicImage: {
    height: 20,
    width: 20,
  },
  basicText: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: sizes.p1,
  },
  companyDescription: {
    fontSize: 18,
    color: colors.text60,
    marginBottom: sizes.p2,
  },
  accordionContainer: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: sizes.p2,
    padding: sizes.p2,
  },
});
