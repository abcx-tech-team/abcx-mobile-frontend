import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { colors, sizes } from '../../utils';

const BottomTab = ({ label, activeImage, inActiveImage, focused }) => {
  return (
    <View style={[styles.container, focused ? styles.activeContainer : null]}>
      <Image
        source={focused ? activeImage : inActiveImage}
        style={styles.image}
        resizeMode='contain'
      />
      <Text
        style={{
          color: focused ? colors.primary : colors.text40,
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
  image: { height: 28, width: 28, marginBottom: 8 },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: sizes.p9,
  },
  text: { fontSize: 12 },
  activeContainer: {
    borderTopColor: colors.primary,
    borderTopWidth: 4,
  },
});
