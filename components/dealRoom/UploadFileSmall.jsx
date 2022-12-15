import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { sizes, colors } from '../../utils';
import { Entypo } from '@expo/vector-icons';

const UploadFileSmall = ({ onClick }) => {
  return (
    <Pressable onPress={onClick}>
      <View style={styles.fileRow}>
        <View style={styles.left}>
          <View style={styles.icon}>
            <Entypo name='plus' size={30} color='black' />
          </View>
          <View>
            <Text style={styles.fileName}>Upload a New File</Text>
            <Text style={styles.fileDate}>Browse Files </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default UploadFileSmall;

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
    marginTop: sizes.pHalf,
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
