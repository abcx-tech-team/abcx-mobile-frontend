import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

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
    backgroundColor: '#fbfbfa',
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#6F0652',
    fontWeight: 'bold',
  },
});
