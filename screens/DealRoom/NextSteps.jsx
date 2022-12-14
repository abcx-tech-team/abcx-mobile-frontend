import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import DealScreenHeader from '../../components/dealRoom/DealScreenHeader';
import { colors, openRoomModalData, sizes, dealStageCodes } from '../../utils';
import DealRoomStep from '../../components/dealRoom/DealRoomStep';
import {
  useAccessCounterPartyCost,
  useDataRoomCost,
  useDealNextSteps,
  useLOICost,
  useMeetingRoomCost,
} from '../../hooks/deal.hooks';
import { useConfirmation } from '../../context/ModalContext';
import OpenRoomModal from '../../components/modals/OpenRoomModal';
import { TabListContext } from '../../context/dealContext';

const NextSteps = ({ navigation, route }) => {
  const { dealId } = route.params;

  const { tabList } = useContext(TabListContext);

  const { data: nextSteps } = useDealNextSteps(dealId);
  const { data: meetingRoomCost, isLoading: meetingRoomCostLoading } =
    useMeetingRoomCost(dealId);
  const { data: dataRoomCost, isLoading: dataRoomCostLoading } =
    useDataRoomCost(dealId);
  const { data: loiCost, isLoading: LOIRoomCostLoading } = useLOICost(dealId);
  const { data: accessCounterPartyCost, isLoading: accessCounterPartyLoading } =
    useAccessCounterPartyCost();

  const confirmation = useConfirmation();

  const handleNextStepItemClick = async (stageId) => {
    console.log(stageId);
    if (tabList.find((item) => item.id === stageId).isActive) {
      console.log('Ready to show its modal');
      try {
        let obj = { ...openRoomModalData[stageId], Component: OpenRoomModal };
        if (stageId === dealStageCodes.meetingRoom) {
          obj = {
            ...obj,
            price: 100,
            actualPrice: meetingRoomCost?.amount.value,
            currency: meetingRoomCost?.amount.currency,
          };
        } else if (stageId === dealStageCodes.dataRoom) {
          obj = {
            ...obj,
            price: 150,
            actualPrice: dataRoomCost?.amount.value,
            currency: dataRoomCost?.amount.currency,
          };
        } else if (stageId === dealStageCodes.letterOfIntent) {
          obj = {
            ...obj,
            price: 200,
            actualPrice: loiCost?.amount.value,
            currency: loiCost?.amount.currency,
          };
        } else if (stageId === dealStageCodes.accessCounterParty) {
          obj = {
            ...obj,
            price: 100,
            actualPrice: accessCounterPartyCost?.amount.value,
            currency: accessCounterPartyCost?.amount.currency,
          };
        }
        await confirmation({ ...obj });
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log('navigate to the page');
    }
  };

  return (
    <View style={styles.screen}>
      <DealScreenHeader
        screenName='Next Steps'
        onBackPress={() => navigation.goBack()}
      />
      <ScrollView>
        <View style={styles.stepContainer}>
          {nextSteps?.nextSteps.map((item) => (
            <DealRoomStep
              {...item}
              key={item.nextStepCode}
              onClick={handleNextStepItemClick}
              buttonDisabled={
                LOIRoomCostLoading ||
                dataRoomCostLoading ||
                meetingRoomCostLoading ||
                accessCounterPartyLoading
              }
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default NextSteps;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.white,
    flex: 1,
  },
  stepContainer: {
    marginBottom: sizes.p4,
    paddingHorizontal: sizes.p2,
  },
});
