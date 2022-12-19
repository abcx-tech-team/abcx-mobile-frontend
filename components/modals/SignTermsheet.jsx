import { StyleSheet, Text, View, Modal, Image } from 'react-native';
import React from 'react';
import PrimaryButton from '../common/PrimaryButton';
import SecondaryButton from '../common/SecondaryButton';
import { useSIgnLOI } from '../../hooks/deal.hooks';
import { useConfirmation } from '../../context/ModalContext';
import ConfirmationAnimation from './ConfirmationAnimation';

const Card = require('../../assets/icons/card.png');

const SignTermsheet = ({ visible, onSubmit, onClose, dealId }) => {
  const { mutateAsync: signLoi, isLoading: signingLoi } = useSIgnLOI();

  const handleSignLoi = async () => {
    try {
      const data = {
        deal_id: dealId,
        signed_name: 'ABCXchange',
      };
      await signLoi(data);
      onSubmit();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      {visible ? <View style={styles.filter} /> : null}
      <Modal visible={visible} animationType='slide' transparent={true}>
        <View style={styles.main}>
          <View style={styles.content}>
            <Text style={styles.mainHeading}>Did you sign term sheet?</Text>
            <Text style={styles.subHeading}>
              Let us know if you have signed the agreement. This helps us
              initiate the next steps from our end.{' '}
            </Text>
            <View style={styles.pointSection}>
              <View style={styles.card}>
                <Image source={Card} />
              </View>
              <View>
                <Text style={styles.pay}>You Pay: 1% of the deal amount</Text>
                <Text style={styles.credit}>Payable by the company</Text>
              </View>
            </View>
            <View style={styles.actionButtons}>
              <View style={styles.rightButton}>
                <PrimaryButton
                  title='Yes, Agreed'
                  onClick={handleSignLoi}
                  isLoading={signingLoi}
                  disabled={signingLoi}
                />
              </View>
              <View style={styles.leftButton}>
                <SecondaryButton
                  title='Go Back'
                  onClick={onClose}
                  disabled={signingLoi}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default SignTermsheet;

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
