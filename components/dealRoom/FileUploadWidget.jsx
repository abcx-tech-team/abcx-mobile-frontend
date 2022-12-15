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

const FileUploadWidget = ({ setUploadFile, navigation }) => {
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState('');
  const { data: fileCategories } = useDataRoomFileCategory();
  const sheetRef = useRef(null);
  const snapPoints = useMemo(() => ['65%'], []);

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    if (result.type === 'success') {
      setFile(result);
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
            onClick={() => setUploadFile(false)}
            noLoader
          />
        </View>
        <SecondaryButton
          title='Go Back'
          onClick={() => navigation.goBack()}
          noLoader
        />
      </View>
      <BottomSheet
        ref={sheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose
      >
        <View>
          {(fileCategories ?? []).map((item) => (
            <Pressable
              key={item.category_code}
              onPress={() => setCategory(item.category_name)}
              style={styles.fileCategories}
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
});
