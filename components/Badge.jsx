import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Badge = ({ number, style, textStyle }) => {
  return (
    <View style={[styles.badge, style]}>
      <Text style={[styles.text, textStyle]}>{number || ''}</Text>
    </View>
  );
};

export default Badge;

const styles = StyleSheet.create({
  badge: {
    height: 14,
    width: 14,
    borderRadius: 100,
    backgroundColor: '#FF9966',
    position: 'absolute',
    left: '75%',
    top: '-5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
});
