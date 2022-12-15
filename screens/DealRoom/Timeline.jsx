import { ScrollView, StyleSheet, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import DealScreenHeader from '../../components/dealRoom/DealScreenHeader';
import DealRoomTimelineStep from '../../components/dealRoom/DealRoomTimelineStep';
import OpenRoomModal from '../../components/modals/OpenRoomModal';
import { useConfirmation } from '../../context/ModalContext';
import { TabListContext } from '../../context/dealContext';
import {
  colors,
  dealStageCodes,
  dealStageCodeToScreenName,
  openRoomModalData,
  sizes,
} from '../../utils';
import ConfirmationAnimation from '../../components/modals/ConfirmationAnimation';

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
  const { dealId } = route.params;
  const { tabList } = useContext(TabListContext);

  const [timeline, setTimeline] = useState([...timelineData]);

  useEffect(() => {
    setTimeline((prev) =>
      prev.map((item) => {
        const data = tabList.find((tab) => item.id === tab.id);
        if (data?.currentStage === 'APPROVED') {
          return { ...item, tag: 'Completed' };
        } else if (data?.currentStage === 'IN-PROGRESS') {
          return { ...item, tag: 'In progress' };
        }
        return { ...item, tag: 'Yet to Start' };
      })
    );
  }, [tabList]);

  const confirmation = useConfirmation();

  const handleTimelineItemClick = async (stageId) => {
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
        await confirmation({ Component: ConfirmationAnimation });
      } catch (err) {
        console.log(err);
      }
    } else {
      navigation.navigate(dealStageCodeToScreenName[stageId], { dealId });
    }
  };

  return (
    <View style={styles.screen}>
      <DealScreenHeader
        screenName='Timeline'
        onBackPress={() => navigation.goBack()}
      />
      <ScrollView>
        <View style={styles.stepContainer}>
          {timeline.map((item) => (
            <DealRoomTimelineStep
              {...item}
              key={item.name}
              onClick={handleTimelineItemClick}
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
