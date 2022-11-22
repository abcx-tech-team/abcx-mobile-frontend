import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

const DealScreenHeader = ({ screenName, onBackPress }) => {
  return (
    <View style={styles.header}>
      <Pressable onPress={onBackPress} style={styles.back}>
        <AntDesign name='arrowleft' size={24} color='black' />
      </Pressable>
      <Text style={styles.screenName}>{screenName}</Text>
    </View>
  );
};

export default DealScreenHeader;

const styles = StyleSheet.create({
  header: {
    paddingTop: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  back: {
    marginRight: 12,
  },
  screenName: {
    fontSize: 18,
    fontWeight: '800',
  },
});
