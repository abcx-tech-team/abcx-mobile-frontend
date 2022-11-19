import { Image, Modal, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SecondaryButton from './SecondaryButton';
import PrimaryButton from './PrimaryButton';
import { useCreditBalance } from '../hooks/user.hooks';
import { currencyMapper } from '../utils';

const Shield = require('../assets/icons/shield.png');

const RequestBlindProfileModal = ({ visible, setVisible }) => {
  const { data } = useCreditBalance();

  return (
    <View style={styles.modalContainer}>
      <Modal visible={visible} animationType='fade' transparent={true}>
        <View style={styles.main}>
          <View style={styles.content}>
            <Text style={styles.mainHeading}>Request Confirmation</Text>
            <Text style={styles.subHeading}>
              You get access to company’s name, managament info, pitchdeck and
              more.{' '}
            </Text>
            <View style={styles.pointSection}>
              {data?.creditViews ? (
                <Text style={styles.pay}>
                  You Pay: $0 &nbsp;&nbsp;
                  <Text style={styles.notPay}>$100</Text>
                </Text>
              ) : (
                <Text style={styles.pay}>
                  You Pay: {currencyMapper(data?.amount.currency)}
                  {data?.amount.value}
                </Text>
              )}
              <View style={styles.creditRow}>
                {data?.creditViews ? (
                  <Text style={styles.credit}>By using 1 Credit</Text>
                ) : null}
                <Text style={styles.creditBalance}>
                  Your Credit Point Balance: {data?.creditViews}
                </Text>
              </View>
            </View>
            <View style={styles.terms}>
              <Image source={Shield} style={styles.termImage} />
              <Text style={styles.termText}>
                By continuing you agree with our{' '}
                <Text style={styles.termTextBlue}>terms & conditions</Text>.
              </Text>
            </View>
            <View style={styles.actionButtons}>
              <View style={styles.rightButton}>
                <PrimaryButton title='Confirm Request' noLoader />
              </View>
              <View style={styles.leftButton}>
                <SecondaryButton
                  title='Cancel Request'
                  onClick={() => setVisible(false)}
                  noLoader
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default RequestBlindProfileModal;

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'rgba(32,32,32,0.6)',
    flex: 1,
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
    marginVertical: 24,
    backgroundColor: '#fbfbfb',
    padding: 16,
    borderRadius: 8,
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
  creditRow: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  credit: {
    color: '#5AB46A',
    fontSize: 14,
    fontWeight: '600',
  },
  creditBalance: {
    fontSize: 12,
    color: '#637381',
  },
  terms: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  termImage: {
    height: 15,
    width: 15,
  },
  termText: {
    fontSize: 12,
    color: '#637381',
    fontWeight: '500',
  },
  termTextBlue: {
    color: '#0018FB',
  },
  actionButtons: {
    marginBottom: 24,
  },
});
