import {
  ActivityIndicator,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import React from 'react';
import { colors, sizes } from '../../utils';
import {
  useDeleteDataRoomFile,
  useDownloadDataRoomFile,
} from '../../hooks/deal.hooks';
import Toast from 'react-native-toast-message';
import { useQueryClient } from '@tanstack/react-query';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';

const FileOptions = ({
  visible,
  onSubmit,
  onClose,
  dealId,
  hash,
  canDelete,
}) => {
  const { mutateAsync: deleteFile, isLoading: deletingFile } =
    useDeleteDataRoomFile();
  const { mutateAsync: downloadFile, isLoading: downloadingFile } =
    useDownloadDataRoomFile();

  const queryClient = useQueryClient();

  const handleFileDelete = async () => {
    try {
      const data = {
        deal_id: dealId,
        file_transaction_hash: hash,
      };
      await deleteFile(data);
      queryClient.invalidateQueries({ queryKey: ['data-room-file-list'] });
      Toast.show({
        type: 'success',
        text1: 'File deleted successfully',
      });
      onSubmit();
    } catch (err) {
      console.log(err);
      onClose();
    }
  };
  const handleFileDownload = async () => {
    try {
      const data = {
        deal_id: dealId,
        file_transaction_hash: hash,
      };
      const blob = await downloadFile(data);
      const fr = new FileReader();

      fr.readAsDataURL(blob);
      fr.onload = async () => {
        const fileUri = `${FileSystem.documentDirectory}/${blob._data.name
          .split(' ')
          .join('_')}.pdf`;
        await FileSystem.writeAsStringAsync(fileUri, fr.result.split(',')[1], {
          encoding: FileSystem.EncodingType.Base64,
        });
        await Sharing.shareAsync(fileUri);
        Toast.show({
          type: 'success',
          text1: 'File downloaded successfully',
        });
        onSubmit();
      };
    } catch (err) {
      console.log(err);
      onClose();
    }
  };

  return (
    <>
      {visible ? <View style={styles.filter} /> : null}
      <Modal transparent animationType='slide'>
        <View style={styles.main}>
          <View style={styles.content}>
            <View style={styles.heading}>
              <Text style={styles.headingText}>File Action</Text>
              <Pressable
                onPress={onClose}
                style={({ pressed }) => [
                  styles.close,
                  pressed ? { backgroundColor: colors.text20 } : null,
                ]}
              >
                <Entypo name='cross' size={30} color='black' />
              </Pressable>
            </View>
            <Pressable
              onPress={handleFileDownload}
              style={styles.optionRow}
              disabled={downloadingFile || deletingFile}
            >
              <AntDesign
                name='download'
                size={24}
                color={colors.textFull}
                style={styles.optionIcon}
              />
              <Text style={styles.optionText}>Download</Text>
              {downloadingFile ? (
                <ActivityIndicator size='small' color='black' />
              ) : null}
            </Pressable>
            <Pressable
              onPress={handleFileDelete}
              style={styles.optionRow}
              disabled={downloadingFile || deletingFile || canDelete}
            >
              <AntDesign
                name='delete'
                size={24}
                color={colors.textFull}
                style={styles.optionIcon}
              />
              <Text style={styles.optionText}>Delete File</Text>
              {deletingFile ? (
                <ActivityIndicator size='small' color='black' />
              ) : null}
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default FileOptions;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  filter: {
    backgroundColor: 'rgba(32,32,32,0.6)',
    position: 'absolute',
    height: '110%',
    width: '100%',
  },
  content: {
    padding: sizes.p4,
    backgroundColor: '#fff',
    marginTop: 'auto',
    borderRadius: sizes.p2,
    paddingBottom: sizes.p10,
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: sizes.p4,
    alignItems: 'center',
  },
  headingText: {
    fontSize: 20,
    fontWeight: '600',
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionRow: {
    flexDirection: 'row',
    marginBottom: sizes.p3,
    alignItems: 'center',
    borderBottomColor: colors.text20,
    borderBottomWidth: 1,
    paddingBottom: sizes.p2,
  },
  optionText: {
    fontSize: 20,
    marginHorizontal: sizes.p2,
  },
  close: {
    height: sizes.p5,
    width: sizes.p5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: sizes.p10,
  },
});
