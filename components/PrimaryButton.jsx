import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const PrimaryButton = ({ title, onClick }) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable onPress={onClick} style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    width: '100%',
    backgroundColor: '#6F0652',
    height: 36,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});
