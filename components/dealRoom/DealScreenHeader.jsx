import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { colors, sizes } from '../../utils';

const DealScreenHeader = ({ screenName, onBackPress }) => {
  return (
    <View style={styles.header}>
      <Pressable
        onPress={onBackPress}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? colors.text20 : colors.white,
          },
          styles.back,
        ]}
      >
        <AntDesign name='arrowleft' size={24} color='black' />
      </Pressable>
      <Text style={styles.screenName}>{screenName}</Text>
    </View>
  );
};

export default DealScreenHeader;

const styles = StyleSheet.create({
  header: {
    paddingTop: sizes.p8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: sizes.p2,
  },
  back: {
    marginRight: sizes.p2,
    height: 40,
    width: 40,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenName: {
    fontSize: 18,
    fontWeight: '800',
  },
});
