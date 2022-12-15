import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors, fileMapper, sizes } from '../../utils';
import { MaterialIcons } from '@expo/vector-icons';

const UploadingFilePreview = ({ name, icon, onDelete }) => {
  return (
    <View style={styles.fileRow}>
      <View style={styles.left}>
        <View style={styles.icon}>
          <Image source={fileMapper(icon || 'ppt')} />
        </View>
        <View>
          <Text style={styles.fileName}>{name || 'Pitchdeck.pptx'}</Text>
        </View>
      </View>
      <Pressable style={styles.more} onPress={onDelete}>
        <MaterialIcons
          name='delete-outline'
          size={25}
          color={colors.badgeRed}
        />
      </Pressable>
    </View>
  );
};

export default UploadingFilePreview;

const styles = StyleSheet.create({
  fileRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    padding: sizes.p2,
    borderStyle: 'dashed',
    borderRadius: sizes.p2,
    borderColor: colors.primary,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
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
    width: '80%',
  },
  more: {
    backgroundColor: colors.lightRedBackground,
    padding: sizes.p1,
    borderRadius: sizes.p4,
  },
});
