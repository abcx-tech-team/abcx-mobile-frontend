import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ModalFilter from '../common/ModalFilter';
import { colors, sizes } from '../../utils';

const ModalLayout = ({ visible, onClose, children }) => {
  return (
    <>
      <ModalFilter />
      <Modal visible={visible} animationType='slide' transparent={true}>
        <View style={styles.main}>
          <Pressable onPress={onClose} style={{ flex: 1 }} />
          <View style={styles.content}>{children}</View>
        </View>
      </Modal>
    </>
  );
};

export default ModalLayout;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  content: {
    paddingHorizontal: sizes.p4,
    backgroundColor: colors.white,
    marginTop: 'auto',
    paddingTop: sizes.p5,
    borderRadius: sizes.p4,
  },
});
