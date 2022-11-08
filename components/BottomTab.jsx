import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const BottomTab = ({ label, activeImage, inActiveImage, focused }) => {
  return (
    <View style={styles.container}>
      <Image
        source={focused ? activeImage : inActiveImage}
        style={styles.image}
        resizeMode='contain'
      />
      <Text
        style={{
          color: focused ? '#6F0652' : '#B7B7B7',
          ...styles.text,
        }}
      >
        {label}
      </Text>
    </View>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  image: { height: 25, width: 25, marginBottom: 8 },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    top: Platform.OS === 'ios' ? 16 : 8,
  },
  text: { fontSize: 12 },
});
