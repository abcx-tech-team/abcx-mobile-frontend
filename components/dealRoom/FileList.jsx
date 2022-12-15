import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import File from './File';
import { sizes } from '../../utils';
import UploadFileSmall from './UploadFileSmall';

const FileList = ({ files, setUploadFile }) => {
  return (
    <View style={styles.filesContainer}>
      <UploadFileSmall onClick={() => setUploadFile(true)} />
      {files.map((file) => (
        <File
          name={file.fileName}
          time={file.actionDatetime}
          type={file.fileCategory}
        />
      ))}
    </View>
  );
};

export default FileList;

const styles = StyleSheet.create({
  filesContainer: {
    paddingHorizontal: sizes.p2,
  },
});
