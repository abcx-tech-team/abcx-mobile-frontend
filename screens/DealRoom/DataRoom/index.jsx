import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDataRoomFileList } from '../../../hooks/deal.hooks';
import DealScreenHeader from '../../../components/dealRoom/DealScreenHeader';
import { colors, sizes } from '../../../utils';
import { Entypo } from '@expo/vector-icons';
import FileUploadWidget from '../../../components/dealRoom/FileUploadWidget';
import FileList from '../../../components/dealRoom/FileList';

const DataRoom = ({ navigation, route }) => {
  const [files, setFiles] = useState([]);
  const { dealId } = route.params;
  const { data: dataRoomFiles, isLoading: loadingFiles } =
    useDataRoomFileList(dealId);
  const [uploadFile, setUploadFile] = useState(false);

  useEffect(() => {
    if (dataRoomFiles) {
      setFiles(dataRoomFiles.dataRoomActivity);
    }
  }, [dataRoomFiles]);

  return (
    <View style={styles.dataRoomContainer}>
      <DealScreenHeader
        screenName='Data Room'
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.border} />

      <View style={styles.filesContainer}>
        <View style={styles.filesRow}>
          <Text style={styles.fileTitle}>Files</Text>
          <Entypo name='chevron-down' size={24} color='black' />
        </View>
      </View>
      {loadingFiles ? (
        <ActivityIndicator size='large' />
      ) : !!files.length && !uploadFile ? (
        <FileList files={files} setUploadFile={setUploadFile} />
      ) : (
        <FileUploadWidget
          setUploadFile={setUploadFile}
          navigation={navigation}
        />
      )}
    </View>
  );
};

export default DataRoom;

const styles = StyleSheet.create({
  dataRoomContainer: {
    backgroundColor: colors.white,
    flex: 1,
  },
  border: {
    borderWidth: 1,
    borderColor: colors.text20,
    marginHorizontal: sizes.p2,
  },
  filesContainer: {
    paddingHorizontal: sizes.p4,
    marginBottom: sizes.p4,
  },
  filesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  fileTitle: {
    fontSize: 16,
    color: colors.text60,
    fontWeight: 'bold',
  },
});
