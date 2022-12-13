import { Modal, StyleSheet, View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { colors } from '../../utils';
import LottieView from 'lottie-react-native';

const ErrorAnimation = ({ visible, onSubmit }) => {
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
              width: 200,
              height: 200,
            }}
            source={require('../../assets/error.json')}
            duration={3000}
          />
        </View>
      </Modal>
    </>
  );
};

export default ErrorAnimation;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
