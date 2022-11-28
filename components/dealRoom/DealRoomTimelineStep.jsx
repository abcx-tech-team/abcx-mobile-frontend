import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import DealStepTags from './DealStepTags';
import { colors, sizes } from '../../utils';

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
    borderColor: colors.borderColor,
    borderWidth: 1,
    padding: sizes.p3,
    marginBottom: sizes.p2,
    borderRadius: sizes.p2,
  },
  stepDetail: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stepImage: {
    marginRight: sizes.p2,
    height: sizes.p3,
    width: sizes.p3,
    resizeMode: 'contain',
  },
  stepText: {
    fontSize: 18,
    fontWeight: '700',
  },
  stepActions: {
    flexDirection: 'row',
    marginTop: sizes.p2,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
