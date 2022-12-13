import { Modal, StyleSheet, View } from 'react-native';
import { colors } from '../../utils';
import LottieView from 'lottie-react-native';

const LoadingModal = ({ visible }) => {
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
            source={require('../../assets/loading.json')}
            duration={3000}
          />
        </View>
      </Modal>
    </>
  );
};

export default LoadingModal;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
