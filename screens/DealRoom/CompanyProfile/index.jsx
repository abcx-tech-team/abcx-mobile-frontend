import { useContext } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import PrimaryButton from '../../../components/common/PrimaryButton';
import SecondaryButton from '../../../components/common/SecondaryButton';
import { TabListContext } from '../../../context/dealContext';
import { useCompanyProfile } from '../../../hooks/deal.hooks';
import { ScreenNames, sizes } from '../../../utils';

const CompanyProfile = ({ navigation, route }) => {
  const { dealId, isBuyer } = route.params;
  const { tabList } = useContext(TabListContext);
  const { data: companyData } = useCompanyProfile(dealId, !!dealId);
  return (
    <ScrollView>
      <View style={{ marginTop: 50 }}>
        <Text>CompanyProfile</Text>
        <Text>{JSON.stringify(companyData, null, 2)}</Text>
        <View style={styles.actionButtons}>
          <View style={styles.primaryButtonContainer}>
            <PrimaryButton
              title='Next Steps'
              onClick={() => {
                navigation.navigate(ScreenNames.nextSteps, { dealId });
              }}
              noLoader
            />
          </View>
          <SecondaryButton
            title='View Timeline'
            onClick={() => {
              navigation.navigate(ScreenNames.timeline, { dealId });
            }}
            noLoader
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default CompanyProfile;

const styles = StyleSheet.create({
  actionButtons: {
    marginTop: sizes.p2,
  },
  primaryButtonContainer: {
    marginBottom: sizes.p1,
  },
});
