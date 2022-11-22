import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../utils';

const DealRoomStep = ({ name, description, active }) => {
  return (
    <View style={[styles.dealRoomStep, active ? styles.active : null]}>
      <View style={styles.stepDetail}>
        <Text style={[styles.stepText, active ? styles.activeText : null]}>
          {name}
        </Text>
      </View>
      <View style={styles.stepActions}>
        <Text style={styles.descriptionText}>{description}</Text>
        <AntDesign
          name='arrowright'
          size={24}
          color={active ? colors.primary : '#34495E'}
        />
      </View>
    </View>
  );
};

export default DealRoomStep;

const styles = StyleSheet.create({
  dealRoomStep: {
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 1,
    padding: 24,
    marginBottom: 16,
    borderRadius: 16,
  },
  stepDetail: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stepImage: {
    marginRight: 16,
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },
  stepText: {
    fontSize: 18,
    fontWeight: '700',
  },
  stepActions: {
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  descriptionText: {
    color: '#768591',
  },
  active: {
    borderColor: colors.primary,
  },
  activeText: {
    color: colors.primary,
  },
});
