import { Keyboard, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useMemo, useRef, useState } from 'react';
import * as DocumentPicker from 'expo-document-picker';
import { AntDesign } from '@expo/vector-icons';
import { useDataRoomFileCategory } from '../../hooks/masters.hooks';
import { colors, sizes } from '../../utils';
import BottomSheet from '@gorhom/bottom-sheet';
import { TextInput } from 'react-native-paper';
import UploadingFilePreview from './UploadingFilePreview';
import PrimaryButton from '../common/PrimaryButton';
import SecondaryButton from '../common/SecondaryButton';
import Toast from 'react-native-toast-message';
import { useUploadDataRoomFile } from '../../hooks/deal.hooks';
import { useQueryClient } from '@tanstack/react-query';

const FileUploadWidget = ({ setUploadFile, navigation, files, dealId }) => {
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState('');

  const { data: fileCategories } = useDataRoomFileCategory();
  const { mutateAsync: uploadFile, isLoading: uploadingFile } =
    useUploadDataRoomFile();
  const queryClient = useQueryClient();

  const sheetRef = useRef(null);
  const snapPoints = useMemo(() => ['79%'], []);

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    if (result.type === 'success') {
      setFile(result);
    }
  };

  const handleUploadFile = async () => {
    try {
      const fd = new FormData();
      fd.append('deal_id', dealId);
      fd.append('upload_file', file);
      fd.append('category_name', category);
      await uploadFile(fd);
      queryClient.invalidateQueries({
        queryKey: ['data-room-file-list'],
      });
      setUploadFile(false);
      Toast.show({ type: 'success', text1: 'File uploaded successfully' });
    } catch (err) {
      console.log(err);
      Toast.show({ type: 'error', text1: 'Something went wrong' });
    }
  };

  return (
    <View style={styles.uploadScreen}>
      {file ? (
        <UploadingFilePreview name={file.name} onDelete={() => setFile(null)} />
      ) : (
        <View style={styles.documentUpload}>
          <Pressable style={styles.uploadButton} onPress={pickDocument}>
            <AntDesign name='upload' size={40} color={colors.primary} />
            <Text style={styles.browse}>Browse Files</Text>
          </Pressable>
        </View>
      )}
      {file ? (
        <TextInput
          mode='outlined'
          placeholder='File Category'
          label='File Category'
          value={category}
          theme={{
            colors: {
              text: colors.primary,
              primary: colors.primary,
              background: colors.white,
            },
            roundness: 12,
          }}
          onFocus={(e) => {
            Keyboard.dismiss();
            sheetRef.current?.snapToIndex(0);
          }}
          style={{ marginTop: sizes.p3 }}
        />
      ) : null}
      <View style={styles.actionButtons}>
        <View style={styles.primaryButtonContainer}>
          <View style={styles.line} />
          <PrimaryButton
            title='Upload File'
            onClick={handleUploadFile}
            disabled={!file || !category || uploadingFile}
            isLoading={uploadingFile}
          />
        </View>
        <SecondaryButton
          title='Go Back'
          onClick={() => {
            if (files.length) {
              setUploadFile(false);
            } else {
              navigation.goBack();
            }
          }}
          disabled={uploadingFile}
        />
      </View>
      <BottomSheet
        ref={sheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose
        backgroundStyle={styles.bottomSheetContainer}
        handleStyle={{ top: 45 }}
      >
        <View style={styles.bottomSheetView}>
          {(fileCategories ?? []).map((item, index) => (
            <Pressable
              key={item.category_code}
              onPress={() => setCategory(item.category_name)}
              style={[
                styles.fileCategories,
                index === fileCategories.length - 1
                  ? styles.noBorderBottom
                  : null,
              ]}
            >
              <Text
                style={[
                  styles.fileCategoryName,
                  category === item.category_name
                    ? styles.selectedCategory
                    : null,
                ]}
              >
                {item.category_name}
              </Text>
            </Pressable>
          ))}
        </View>
      </BottomSheet>
    </View>
  );
};

export default FileUploadWidget;

const styles = StyleSheet.create({
  uploadScreen: {
    paddingHorizontal: sizes.p2,
    flex: 1,
  },
  documentUpload: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: colors.primary,
    height: 250,
    borderRadius: sizes.p3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  fileCategories: {
    marginHorizontal: sizes.p4,
    paddingVertical: sizes.p2,
    borderBottomWidth: 1,
    borderColor: colors.text20,
  },
  fileCategoryName: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text80,
  },
  selectedCategory: {
    color: colors.primary,
    fontWeight: '700',
    fontSize: 18,
  },
  browse: {
    marginTop: sizes.p2,
    fontSize: 16,
    fontWeight: '500',
    color: colors.text80,
  },
  actionButtons: {
    marginTop: sizes.p2,
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: sizes.p1,
    paddingBottom: sizes.p3,
  },
  primaryButtonContainer: {
    marginBottom: sizes.p1,
  },
  line: {
    borderTopWidth: 1,
    marginBottom: sizes.p3,
    borderColor: colors.text20,
    marginHorizontal: -sizes.p4,
  },

  bottomSheetContainer: {
    backgroundColor: 'transparent',
  },

  bottomSheetView: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
    width: '90%',
    backgroundColor: 'white',
    left: '5%',
    marginTop: sizes.p2,
    paddingTop: sizes.p3,
    paddingBottom: sizes.p5,
    borderRadius: sizes.p2,
  },
  noBorderBottom: {
    borderBottomWidth: 0,
  },
});
