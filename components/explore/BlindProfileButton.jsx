import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../../utils';

const BlindProfileButton = ({ title, onClick }) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable onPress={onClick} style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default BlindProfileButton;

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    width: '100%',
    backgroundColor: colors.grayBackground,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.primary,
    fontWeight: 'bold',
  },
});
