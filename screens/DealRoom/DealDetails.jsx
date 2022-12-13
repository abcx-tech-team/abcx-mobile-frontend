import { Text, View } from 'react-native';
import React, { useContext, useEffect, useMemo } from 'react';
import { useDealDetails } from '../../hooks/deal.hooks';
import { DealContext } from '../../context/dealContext';
import CompanyProfile from './CompanyProfile/index';
import { Button } from 'react-native-paper';
import { ScreenNames } from '../../utils';

const DealDetails = ({ navigation, route }) => {
  const { dealId } = route.params;
  const { deal, setDeal } = useContext(DealContext);
  const { data: dealDetails } = useDealDetails(dealId);

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

  const showSellerApprovalForm = useMemo(() => {
    return !isBuyer && tabList?.[1]?.currentStage === 'PENDING_APPROVAL';
  }, [isBuyer, tabList]);

  return (
    <View style={{ marginTop: 100 }}>
      {showSellerApprovalForm ? (
        <Text>Show Seller Approval Form here</Text>
      ) : (
        <CompanyProfile />
      )}
      <Button
        onPress={() =>
          navigation.navigate(ScreenNames.timeline, {
            tabList,
            dealId,
          })
        }
      >
        Timeline
      </Button>
    </View>
  );
};

export default DealDetails;
