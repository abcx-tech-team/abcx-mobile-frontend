import { Modal, StyleSheet, View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { colors } from '../../utils';
import LottieView from 'lottie-react-native';

const ConfirmationAnimation = ({ visible, onSubmit }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onSubmit();
    }, 3100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Modal visible={visible}>
        <View style={styles.main}>
          <LottieView
            autoPlay
            style={{
              width: 500,
              height: 500,
            }}
            source={require('../../assets/success_animation.json')}
            duration={3000}
            loop={false}
          />
        </View>
      </Modal>
    </>
  );
};

export default ConfirmationAnimation;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
