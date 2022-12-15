import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors, fileMapper, sizes } from '../../utils';
import { Entypo } from '@expo/vector-icons';

const File = ({ name, icon, time, type }) => {
  return (
    <View style={styles.fileRow}>
      <View style={styles.left}>
        <View style={styles.icon}>
          <Image source={fileMapper(icon || 'ppt')} />
        </View>
        <View>
          <Text style={styles.fileName}>{name || 'Pitchdeck.pptx'}</Text>
          <View style={styles.dateContainer}>
            <Text style={styles.fileDate}>{time || '11 Jan 2021 23:22'} </Text>
            <View style={styles.fileTypeContainer}>
              <Text style={styles.fileType}>{type}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.more}>
        <Entypo name='dots-three-horizontal' size={18} color='black' />
      </View>
    </View>
  );
};

export default File;

const styles = StyleSheet.create({
  fileRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: sizes.p2,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    height: 40,
    width: 40,
    backgroundColor: colors.text20,
    borderRadius: sizes.p1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: sizes.p2,
  },
  fileDate: {
    fontSize: 12,
    color: colors.text60,
  },
  fileName: {
    fontWeight: '600',
    color: colors.text80,
  },
  fileTypeContainer: {
    backgroundColor: colors.text20,
    paddingVertical: sizes.pHalf,
    paddingHorizontal: sizes.p1,
    marginLeft: 4,
    borderRadius: sizes.p2,
  },
  fileType: {
    fontSize: 10,
    fontWeight: '600',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: sizes.pHalf,
  },
});
