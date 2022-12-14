import { StyleSheet, Text, View } from 'react-native';
import React, { useContext, useEffect, useMemo } from 'react';
import { useDealDetails } from '../../hooks/deal.hooks';
import { DealContext, TabListContext } from '../../context/dealContext';
import SellerApproveForm from './SellerApproveForm';
import { Button } from 'react-native-paper';
import { ScreenNames } from '../../utils';

const DealDetails = ({ navigation, route }) => {
  const { dealId } = route.params;
  const { deal, setDeal } = useContext(DealContext);
  const { data: dealDetails } = useDealDetails(dealId);

  const { setTabList } = useContext(TabListContext);

  useEffect(() => {
    if (dealDetails) {
      setDeal({ ...dealDetails });
    }
  }, [dealDetails]);

  const isBuyer = useMemo(() => {
    return deal?.dealMeta?.isBuyer;
  }, [deal?.dealMeta?.isBuyer]);

  const { tabList } = useMemo(() => {
    if (deal?.dealStage) {
      const stage = [...deal.dealStage].sort((a, b) =>
        a.stageOrder > b.stageOrder ? 1 : b.stageOrder > a.stageOrder ? -1 : 0
      );
      return {
        tabList:
          stage
            .filter((stage) => stage.stageOrder > 0)
            .map((stage) => {
              return {
                label: stage.stageName,
                id: stage.stageCode,
                order: stage.stageOrder,
                isDisabled:
                  stage.stageStatus === 'BLOCKED' ||
                  stage.stageStatus === 'INACTIVE',
                isActive: stage.stageStatus === 'ACTIVE',
                currentStage: stage.stageStatus,
              };
            }) || [],
      };
    } else {
      return { tabList: [] };
    }
  }, [deal]);

  useEffect(() => {
    setTabList([...tabList]);
  }, [tabList]);

  const showSellerApprovalForm = useMemo(() => {
    return !isBuyer && tabList?.[1]?.currentStage === 'PENDING_APPROVAL';
  }, [isBuyer, tabList]);

  return (
    <View style={styles.dealDetailsContainer}>
      {showSellerApprovalForm ? (
        <SellerApproveForm
          dealId={dealId}
          companyName={deal?.dealMeta?.companyName}
          navigation={navigation}
          isBuyer={isBuyer}
        />
      ) : isBuyer ? (
        <View style={{ marginTop: 100 }}>
          <Text>This is the buyer, don't have anything to show</Text>
        </View>
      ) : (
        <View style={{ marginTop: 100 }}>
          <Text>This is the Seller, don't have anything to show</Text>
        </View>
      )}
      <Button
        onPress={() =>
          navigation.navigate(ScreenNames.companyProfile, { dealId: dealId })
        }
      >
        Company Profile
      </Button>
      <Button
        onPress={() =>
          navigation.navigate(ScreenNames.nextSteps, { dealId: dealId })
        }
      >
        Next Steps
      </Button>
      <Button
        onPress={() =>
          navigation.navigate(ScreenNames.timeline, { dealId: dealId })
        }
      >
        Timeline
      </Button>
      <Button onPress={() => navigation.navigate(ScreenNames.dealCompletion)}>
        Completed
      </Button>
      <Button onPress={() => navigation.navigate(ScreenNames.dealCancelled)}>
        Cancelled
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  dealDetailsContainer: {
    flex: 1,
  },
});

export default DealDetails;
