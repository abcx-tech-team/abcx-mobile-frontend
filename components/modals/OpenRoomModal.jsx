import { Image, Modal, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SecondaryButton from '../common/SecondaryButton';
import PrimaryButton from '../common/PrimaryButton';
import { currencyMapper, dealStageCodes } from '../../utils';
import {
  useAccessCounterPartyCost,
  useDataRoomCost,
  useLOICost,
  useMeetingRoomCost,
  useAccessCounterPartyInfo,
  useOpenDataRoom,
  useOpenMeetingRoom,
  useOpenLOI,
} from '../../hooks/deal.hooks';
import Toast from 'react-native-toast-message';
import { QueryClient, useQueryClient } from '@tanstack/react-query';

const Card = require('../../assets/icons/card.png');

const RequestBlindProfileModal = ({
  visible,
  onSubmit,
  onClose,
  heading,
  subHeading,
  contextData,
  price,
  dealId,
  stageId,
}) => {
  const queryCLient = useQueryClient();

  const { data: meetingRoomCost } = useMeetingRoomCost(
    dealId,
    stageId === dealStageCodes.meetingRoom
  );
  const { data: dataRoomCost } = useDataRoomCost(
    dealId,
    stageId === dealStageCodes.dataRoom
  );
  const { data: loiCost } = useLOICost(
    dealId,
    stageId === dealStageCodes.letterOfIntent
  );
  const { data: accessCounterPartyCost } = useAccessCounterPartyCost(
    stageId === dealStageCodes.accessCounterParty
  );
  const {
    mutateAsync: accessCounterPartyInfo,
    isLoading: accessingCounterParty,
  } = useAccessCounterPartyInfo();
  const { mutateAsync: openDataRoom, isLoading: openingDataRoom } =
    useOpenDataRoom();
  const { mutateAsync: openMeetingRoom, isLoading: openingMeetingRoom } =
    useOpenMeetingRoom();
  const { mutateAsync: openLOI, isLoading: openingLOI } = useOpenLOI();

  const handleAccessCounterPartyInfo = async () => {
    try {
      const data = await accessCounterPartyInfo({ deal_id: dealId });

      if (data?.result?.statusCode === 400) {
        throw new Error(data?.result?.statusMessage);
      }
      queryCLient.invalidateQueries({ queryKey: ['deal-details'] });
      onSubmit();
    } catch (err) {
      Toast.show({
        type: 'error',
        text1: err.message,
      });
      onClose();
    }
  };

  const handleOpenDataRoom = async () => {
    try {
      const data = await openDataRoom({ deal_id: dealId });
      console.log(data);
      if (data?.result?.statusCode === 400) {
        throw new Error(data?.result?.statusMessage);
      }
      queryCLient.invalidateQueries({ queryKey: ['deal-details'] });
      onSubmit();
    } catch (err) {
      Toast.show({
        type: 'error',
        text1: err.message,
      });
      onClose();
    }
  };

  const handleOpenMeetingRoom = async () => {
    try {
      const data = await openMeetingRoom({ deal_id: dealId });
      console.log(data);
      if (data?.result?.statusCode === 400) {
        throw new Error(data?.result?.statusMessage);
      }
      queryCLient.invalidateQueries({ queryKey: ['deal-details'] });
      onSubmit();
    } catch (err) {
      Toast.show({
        type: 'error',
        text1: err.message,
      });
      onClose();
    }
  };

  const handleOpenLetterOfIntent = async () => {
    try {
      const data = await openLOI({ deal_id: dealId });
      console.log(data);
      if (data?.result?.statusCode === 400) {
        throw new Error(data?.result?.statusMessage);
      }
      queryCLient.invalidateQueries({ queryKey: ['deal-details'] });
      onSubmit();
    } catch (err) {
      Toast.show({
        type: 'error',
        text1: err.message,
      });
      onClose();
    }
  };

  const handleOpenRoom = () => {
    switch (stageId) {
      case dealStageCodes.accessCounterParty:
        handleAccessCounterPartyInfo();
        return;
      case dealStageCodes.dataRoom:
        handleOpenDataRoom();
        return;
      case dealStageCodes.meetingRoom:
        handleOpenMeetingRoom();
        return;
      case dealStageCodes.letterOfIntent:
        handleOpenLetterOfIntent();
      default:
        return;
    }
  };

  const getPrice = () => {
    switch (stageId) {
      case dealStageCodes.accessCounterParty:
        return accessCounterPartyCost?.amount.value || 0;
      case dealStageCodes.dataRoom:
        return dataRoomCost?.amount.value || 0;
      case dealStageCodes.meetingRoom:
        return meetingRoomCost?.amount.value || 0;
      case dealStageCodes.letterOfIntent:
        return loiCost?.amount.value || 0;
      default:
        return 0;
    }
  };

  const getCurrency = () => {
    switch (stageId) {
      case dealStageCodes.accessCounterParty:
        return accessCounterPartyCost?.amount.currency || 'gbp';
      case dealStageCodes.dataRoom:
        return dataRoomCost?.amount.currency || 'gbp';
      case dealStageCodes.meetingRoom:
        return meetingRoomCost?.amount.currency || 'gbp';
      case dealStageCodes.letterOfIntent:
        return loiCost?.amount.currency || 'gbp';
      default:
        return 'gbp';
    }
  };

  return (
    <>
      {visible ? <View style={styles.filter} /> : null}
      <Modal visible={visible} animationType='slide' transparent={true}>
        <View style={styles.main}>
          <View style={styles.content}>
            <Text style={styles.mainHeading}>{heading}</Text>
            <Text style={styles.subHeading}>{subHeading}</Text>
            <View style={styles.pointSection}>
              <View style={styles.card}>
                <Image source={Card} />
              </View>
              <View>
                <Text style={styles.pay}>
                  You Pay: {currencyMapper(getCurrency())}
                  {price || 0} &nbsp;&nbsp;
                  <Text style={styles.notPay}>
                    {currencyMapper(getCurrency())}
                    {getPrice() || 0}
                  </Text>
                </Text>
                <Text style={styles.credit}>{contextData}</Text>
              </View>
            </View>
            <View style={styles.actionButtons}>
              <View style={styles.rightButton}>
                <PrimaryButton
                  title='Confirm Request'
                  onClick={handleOpenRoom}
                  isLoading={
                    accessingCounterParty ||
                    openingDataRoom ||
                    openingMeetingRoom ||
                    openingLOI
                  }
                  disabled={
                    accessingCounterParty ||
                    openingDataRoom ||
                    openingMeetingRoom ||
                    openingLOI
                  }
                />
              </View>
              <View style={styles.leftButton}>
                <SecondaryButton
                  title='Cancel Request'
                  onClick={onClose}
                  disabled={
                    accessingCounterParty ||
                    openingDataRoom ||
                    openingMeetingRoom ||
                    openingLOI
                  }
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default RequestBlindProfileModal;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  filter: {
    backgroundColor: 'rgba(32,32,32,0.6)',
    position: 'absolute',
    height: '110%',
    width: '100%',
  },
  content: {
    paddingHorizontal: 32,
    backgroundColor: '#fff',
    marginTop: 'auto',
    paddingTop: 40,
    borderRadius: 16,
  },
  mainHeading: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
  },
  subHeading: {
    fontSize: 16,
    color: '#637381',
  },
  pointSection: {
    flexDirection: 'row',
    marginVertical: 24,
    backgroundColor: '#fbfbfb',
    padding: 16,
    borderRadius: 8,
  },
  card: {
    marginRight: 16,
  },
  pay: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  notPay: {
    color: '#cecece',
    fontSize: 16,
    textDecorationLine: 'line-through',
  },
  credit: {
    color: '#5AB46A',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
    marginTop: 4,
  },
  actionButtons: {
    marginBottom: 24,
  },
});
