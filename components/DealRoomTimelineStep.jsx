import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import DealStepTags from './DealStepTags';

const DealRoomTimelineStep = ({ name, image, tag }) => {
  return (
    <View style={styles.dealRoomStep}>
      <View style={styles.stepDetail}>
        <Image source={image} style={styles.stepImage} />
        <Text style={styles.stepText}>{name}</Text>
      </View>
      <View style={styles.stepActions}>
        {DealStepTags(tag)}
        <AntDesign name='arrowright' size={24} color='#34495E' />
      </View>
    </View>
  );
};

export default DealRoomTimelineStep;

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
});
