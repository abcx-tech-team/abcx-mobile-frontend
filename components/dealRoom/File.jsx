import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, fileMapper, sizes } from '../../utils';
import { Entypo } from '@expo/vector-icons';
import { useConfirmation } from '../../context/ModalContext';
import FileOptions from '../modals/FileOptions';

const File = ({ name, icon, time, type, hash, dealId, canDelete }) => {
  const confirmation = useConfirmation();

  const handleFileUpdate = async () => {
    try {
      await confirmation({ Component: FileOptions, hash, dealId, canDelete });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View style={styles.fileRow}>
      <View style={styles.left}>
        <View style={styles.icon}>
          <Image source={fileMapper(icon || 'pdf')} />
        </View>
        <View style={styles.fileNameContainer}>
          <Text style={styles.fileName}>{name || 'Pitchdeck.pptx'}</Text>
          <View style={styles.dateContainer}>
            <Text style={styles.fileDate}>{time || '11 Jan 2021 23:22'} </Text>
            <View style={styles.fileTypeContainer}>
              <Text style={styles.fileType}>{type}</Text>
            </View>
          </View>
        </View>
      </View>
      <Pressable
        onPress={() => handleFileUpdate(0)}
        style={({ pressed }) => [
          styles.more,
          pressed ? { backgroundColor: colors.text20 } : null,
        ]}
      >
        <Entypo name='dots-three-horizontal' size={18} color='black' />
      </Pressable>
    </View>
  );
};

export default File;

const styles = StyleSheet.create({
  fileRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: sizes.p3,
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
  fileNameContainer: {
    width: '75%',
  },
  more: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
});
