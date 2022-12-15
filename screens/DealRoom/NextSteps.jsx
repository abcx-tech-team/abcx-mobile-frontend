import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import DealScreenHeader from '../../components/dealRoom/DealScreenHeader';
import { colors, openRoomModalData, sizes, dealStageCodes } from '../../utils';
import DealRoomStep from '../../components/dealRoom/DealRoomStep';
import { useDealNextSteps } from '../../hooks/deal.hooks';
import { useConfirmation } from '../../context/ModalContext';
import OpenRoomModal from '../../components/modals/OpenRoomModal';
import { TabListContext } from '../../context/dealContext';

const NextSteps = ({ navigation, route }) => {
  const { dealId } = route.params;

  const { tabList } = useContext(TabListContext);

  const { data: nextSteps } = useDealNextSteps(dealId);

  const confirmation = useConfirmation();

  const handleNextStepItemClick = async (stageId) => {
    console.log(stageId);
    if (tabList.find((item) => item.id === stageId).isActive) {
      console.log('Ready to show its modal');
      try {
        let obj = {
          ...openRoomModalData[stageId],
          Component: OpenRoomModal,
          dealId,
        };
        if (stageId === dealStageCodes.meetingRoom) {
          obj = {
            ...obj,
            price: 100,
            stageId,
          };
        } else if (stageId === dealStageCodes.dataRoom) {
          obj = {
            ...obj,
            price: 150,
            stageId,
          };
        } else if (stageId === dealStageCodes.letterOfIntent) {
          obj = {
            ...obj,
            price: 200,
            stageId,
          };
        } else if (stageId === dealStageCodes.accessCounterParty) {
          obj = {
            ...obj,
            price: 100,
            stageId,
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
