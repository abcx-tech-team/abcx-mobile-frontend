import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import DealScreenHeader from '../../components/dealRoom/DealScreenHeader';
import {
  colors,
  dealStageCodes,
  openRoomModalData,
  ScreenNames,
  sizes,
} from '../../utils';
import DealRoomTimelineStep from '../../components/dealRoom/DealRoomTimelineStep';
import {
  useDataRoomCost,
  useLOICost,
  useMeetingRoomCost,
} from '../../hooks/deal.hooks';
import { useConfirmation } from '../../context/ModalContext';
import OpenRoomModal from '../../components/modals/OpenRoomModal';

const timelineData = [
  {
    name: 'Company Profile',
    image: require('../../assets/icons/company_profile.png'),
    tag: 'Approved',
    id: dealStageCodes.companyProfile,
  },
  {
    name: 'Access Counterparty Info',
    image: require('../../assets/icons/mail.png'),
    id: dealStageCodes.accessCounterParty,
    tag: 'Yet to Start',
  },
  {
    name: 'Setup Call',
    image: require('../../assets/icons/chat.png'),
    id: dealStageCodes.meetingRoom,
    tag: 'Yet to Start',
  },
  {
    name: 'Data Room',
    image: require('../../assets/icons/folder.png'),
    id: dealStageCodes.dataRoom,
    tag: 'Yet to Start',
  },
  {
    name: 'Term Sheet',
    image: require('../../assets/icons/sheet.png'),
    id: dealStageCodes.letterOfIntent,
    tag: 'Yet to Start',
  },
];

const Timeline = ({ navigation, route }) => {
  const { dealId, tabList } = route.params;

  const { data: meetingRoomCost, isLoading: meetingRoomCostLoading } =
    useMeetingRoomCost(dealId);
  const { data: dataRoomCost, isLoading: dataRoomCostLoading } =
    useDataRoomCost(dealId);
  const { data: loiCost, isLoading: LOIRoomCostLoading } = useLOICost(dealId);

  const confirmation = useConfirmation();

  const handleTimelineItemClick = async (stageId) => {
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
        screenName='Timeline'
        onBackPress={() => navigation.navigate(ScreenNames.dealRoom)}
      />
      <ScrollView>
        <View style={styles.stepContainer}>
          {timelineData.map((item) => (
            <DealRoomTimelineStep
              {...item}
              key={item.name}
              onClick={handleTimelineItemClick}
              disabled={
                meetingRoomCostLoading ||
                dataRoomCostLoading ||
                LOIRoomCostLoading
              }
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Timeline;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.white,
    flex: 1,
  },
  stepContainer: {
    paddingHorizontal: sizes.p2,
    marginBottom: sizes.p4,
  },
});
