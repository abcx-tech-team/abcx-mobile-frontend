import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import {
  colors,
  dealStageCodes,
  dealStageCodeToScreenName,
  openRoomModalData,
  ScreenNames,
  sizes,
} from '../../utils';
import PrimaryButton from '../common/PrimaryButton';
import SecondaryButton from '../common/SecondaryButton';
import { TabListContext } from '../../context/dealContext';
import { useCancelDeal } from '../../hooks/deal.hooks';
import { useConfirmation } from '../../context/ModalContext';
import Toast from 'react-native-toast-message';
import ConfirmationAnimation from '../modals/ConfirmationAnimation';
import OpenRoomModal from '../modals/OpenRoomModal';

const OpenDataRoomCard = ({ navigation, dealId, isBuyer }) => {
  const { mutateAsync: cancelDeal, isLoading: cancellingDeal } =
    useCancelDeal();

  const { tabList } = useContext(TabListContext);
  const confirmation = useConfirmation();

  const handelCancelDeal = async () => {
    try {
      const data = {
        deal_id: dealId,
        stage_code: dealStageCodes.accessCounterParty,
      };
      await cancelDeal(data);
      Toast.show({ icon: 'success', text1: 'Deal cancelled successfully' });
      navigation.navigate(ScreenNames.dealRoom);
    } catch (err) {
      console.log(err);
    }
  };
  const handleOpenDataRoom = async () => {
    if (tabList.find((item) => item.id === dealStageCodes.dataRoom).isActive) {
      try {
        let obj = {
          ...openRoomModalData[dealStageCodes.dataRoom],
          Component: OpenRoomModal,
          dealId,
          price: 150,
          stageId: dealStageCodes.dataRoom,
        };
        await confirmation({ ...obj });
        await confirmation({ Component: ConfirmationAnimation });
      } catch (err) {
        console.log(err);
      }
    } else {
      navigation.navigate(ScreenNames.dataRoom, {
        dealId,
        isBuyer,
      });
    }
  };
  return (
    <View style={styles.openDataRoomContainer}>
      <View style={styles.openDataRoomCard}>
        <Text style={styles.heading}>Want to share more files?</Text>
        <Text style={styles.subHeading}>
          Data room is a discreet cloud folder only accessible by the parties
          and gets deleted after the use.
        </Text>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            title='Open Data Room'
            onClick={handleOpenDataRoom}
            disabled={cancellingDeal}
          />
          <SecondaryButton
            title='Cancel Deal'
            onClick={handelCancelDeal}
            isLoading={cancellingDeal}
            disabled={cancellingDeal}
          />
        </View>
      </View>
    </View>
  );
};

export default OpenDataRoomCard;

const styles = StyleSheet.create({
  openDataRoomCard: {
    paddingVertical: sizes.p4,
    paddingHorizontal: sizes.p2,
    backgroundColor: colors.grayBackground,
    borderRadius: sizes.p2,
    width: '100%',
  },
  openDataRoomContainer: {
    paddingHorizontal: sizes.p2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: sizes.p2,
  },
  subHeading: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.text60,
    marginBottom: sizes.p4,
  },
});
