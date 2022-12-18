import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import { colors, sizes } from '../../utils';

const Downloads = ({ company }) => {
  return (
    <View>
      <Text style={styles.label}>Company Pitchdeck</Text>
      <Pressable>
        <Text style={styles.value}>Access Company Pitchdeck</Text>
      </Pressable>
      <Text style={styles.label}>Financial Data</Text>
      <Pressable>
        <Text style={styles.value}>Open Data Room</Text>
      </Pressable>
    </View>
  );
};

export default Downloads;

const styles = StyleSheet.create({
  label: {
    marginTop: sizes.p2,
    color: colors.text60,
    marginBottom: sizes.pHalf,
    fontSize: 15,
    fontWeight: '500',
  },
  value: {
    textDecorationLine: 'underline',
    fontSize: 20,
    fontWeight: '600',
  },
});
