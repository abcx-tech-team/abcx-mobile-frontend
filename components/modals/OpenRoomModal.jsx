import { Image, Modal, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SecondaryButton from '../common/SecondaryButton';
import PrimaryButton from '../common/PrimaryButton';
import { currencyMapper } from '../../utils';

const Card = require('../../assets/icons/card.png');

const RequestBlindProfileModal = ({
  visible,
  onSubmit,
  onClose,
  heading,
  subHeading,
  contextData,
  price,
  actualPrice,
  currency,
}) => {
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
                  You Pay: {currencyMapper(currency || 'gbp')}
                  {price || 0} &nbsp;&nbsp;
                  <Text style={styles.notPay}>
                    {currencyMapper(currency || 'gbp')}
                    {actualPrice || 0}
                  </Text>
                </Text>
                <Text style={styles.credit}>{contextData}</Text>
              </View>
            </View>
            <View style={styles.actionButtons}>
              <View style={styles.rightButton}>
                <PrimaryButton title='Confirm Request' onClick={onSubmit} />
              </View>
              <View style={styles.leftButton}>
                <SecondaryButton title='Cancel Request' onClick={onClose} />
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
