import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import {
  useApproveBriefProfile,
  useBuyerMemberProfile,
  useDeclineBriefProfile,
} from '../../hooks/deal.hooks';
import { colors, ScreenNames, sizes } from '../../utils';
import PrimaryButton from '../../components/common/PrimaryButton';
import SecondaryButton from '../../components/common/SecondaryButton';
import { useConfirmation } from '../../context/ModalContext';
import ConfirmationAnimation from '../../components/modals/ConfirmationAnimation';
import { useQueryClient } from '@tanstack/react-query';

const Mail = require('../../assets/icons/mail.png');
const Apple = require('../../assets/icons/apple.png');

const SellerApproveForm = ({ dealId, companyName, navigation, isBuyer }) => {
  const { mutateAsync: fetchBuyerMember, isLoading: fetchingBuyerMember } =
    useBuyerMemberProfile();
  const { mutateAsync: approveBriefProfile, isLoading: approvingBriefProfile } =
    useApproveBriefProfile();
  const { mutateAsync: declineBriefProfile, isLoading: decliningBriefProfile } =
    useDeclineBriefProfile();
  const queryClient = useQueryClient();

  const confirmation = useConfirmation();

  const [buyerMember, setBuyerMember] = useState(null);

  const fetchBuyerMemberData = useCallback(async () => {
    const res = await fetchBuyerMember({
      deal_id: dealId,
    });
    setBuyerMember({ ...res });
  }, []);

  useEffect(() => {
    fetchBuyerMemberData();
  }, [fetchBuyerMemberData]);

  const handleApproveRequest = async () => {
    try {
      await approveBriefProfile({ deal_id: dealId });
      queryClient.invalidateQueries({ queryKey: ['deal-details'] });
      await confirmation({ Component: ConfirmationAnimation });
      navigation.navigate(ScreenNames.companyProfile, {
        dealId,
        isBuyer,
      });
    } catch (e) {
      console.log(e);
    }
  };
  const handleDeclineRequest = async () => {
    try {
      await declineBriefProfile({ deal_id: dealId });
      Toast.show({
        type: 'success',
        text1: 'Brief profile declined successfully',
      });
      navigation.navigate(ScreenNames.dealRoom);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.sellerApproveFormContainer}>
      <View style={styles.sellerApproveForm}>
        <Image source={Mail} />
        <Text style={styles.heading}>
          {buyerMember?.actionUserName} is requesting access for{' '}
          <Text style={styles.bold}>{companyName || 'N/A'}</Text>
        </Text>
        <Text style={styles.counterParty}>
          Counterparty Name: {buyerMember?.memberId}
        </Text>
        <View style={styles.companyDetails}>
          <Text style={[styles.counterParty, styles.primaryText, styles.bold]}>
            Counterparty Information
          </Text>
          <Text style={styles.label}>Headquarter Country</Text>
          <Text style={styles.value}>
            {buyerMember?.presenceInCountry
              ? buyerMember.presenceInCountry[0]?.country_id
              : ''}
          </Text>

          <Text style={styles.label}>Presence of Countries</Text>
          <Text style={styles.value}>
            {buyerMember?.presenceInCountry
              ? buyerMember.presenceInCountry
                  .slice(1)
                  .map((item) => item.country_id)
                  .join(', ')
              : ''}
          </Text>

          <Text style={styles.label}>Size of investment</Text>
          <Text style={styles.value}>{buyerMember?.sizeofInvestment}</Text>

          <Text style={styles.label}>Size of companies invested in</Text>
          <Text style={styles.value}>
            {buyerMember?.memberInterests?.sizeOfCompanies}
          </Text>

          <Text style={styles.label}>Number of portfolio companies</Text>
          <Text style={styles.value}>{buyerMember?.noPortfolio}</Text>

          <Text style={styles.label}>Interested Sectors</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.tags}>
              {buyerMember?.interestedSectors.map((item, index) => (
                <View
                  style={[
                    styles.tag,
                    index === buyerMember?.interestedSectors.length - 1
                      ? styles.noMarginRight
                      : null,
                  ]}
                  key={item}
                >
                  <Image source={Apple} />
                  <Text style={styles.tagText}>{item}</Text>
                </View>
              ))}
            </View>
          </ScrollView>

          <Text style={styles.label}>Preferred user market type</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.tags}>
              {buyerMember?.memberInterests?.typeOfFunding.map(
                (item, index) => (
                  <View
                    style={[
                      styles.tag,
                      index ===
                      buyerMember?.memberInterests?.typeOfFunding.length - 1
                        ? styles.noMarginRight
                        : null,
                    ]}
                    key={item}
                  >
                    <Image source={Apple} />
                    <Text style={styles.tagText}>{item}</Text>
                  </View>
                )
              )}
            </View>
          </ScrollView>
        </View>
        <View style={styles.actionButtons}>
          <View style={styles.primaryButtonContainer}>
            <PrimaryButton
              title='Accept Request'
              onClick={handleApproveRequest}
              isLoading={approvingBriefProfile}
              disabled={
                approvingBriefProfile ||
                decliningBriefProfile ||
                fetchingBuyerMember
              }
            />
          </View>
          <SecondaryButton
            title='Decline Request'
            onClick={handleDeclineRequest}
            disabled={
              approvingBriefProfile ||
              decliningBriefProfile ||
              fetchingBuyerMember
            }
            isLoading={decliningBriefProfile}
          />
        </View>
      </View>
    </View>
  );
};

export default SellerApproveForm;

const styles = StyleSheet.create({
  sellerApproveFormContainer: {
    backgroundColor: colors.backdrop,
    flex: 1,
    justifyContent: 'flex-end',
  },
  sellerApproveForm: {
    backgroundColor: colors.white,
    padding: sizes.p4,
    borderRadius: sizes.p4,
  },
  heading: {
    fontSize: 20,
    marginVertical: sizes.p1,
    color: colors.text80,
  },
  bold: {
    fontWeight: 'bold',
  },
  counterParty: {
    fontSize: 16,
    color: colors.text40,
    marginBottom: sizes.p2,
  },
  companyDetails: {
    backgroundColor: colors.grayBackground,
    padding: sizes.p2,
    borderRadius: sizes.p2,
  },
  primaryText: {
    color: colors.primary,
  },
  label: {
    fontSize: 15,
    color: colors.text40,
    marginBottom: sizes.pHalf,
  },
  value: {
    fontSize: 18,
    color: colors.text80,
    fontWeight: '600',
    marginBottom: sizes.p1,
  },
  actionButtons: {
    marginTop: sizes.p2,
  },
  primaryButtonContainer: {
    marginBottom: sizes.p1,
  },
  tag: {
    backgroundColor: colors.tagDark,
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
    marginBottom: sizes.p1,
    alignSelf: 'flex-start',
  },
});
