import { Image, Pressable, StyleSheet, Text } from 'react-native';
import React from 'react';

const SearchTag = ({
  image,
  activeImage,
  name,
  onPress,
  activeTab,
  tabStyle,
}) => {
  return (
    <Pressable
      style={[
        styles.tab,
        activeTab === name ? styles.activeTab : null,
        tabStyle,
      ]}
      onPress={onPress}
    >
      <Image
        style={styles.tabImage}
        source={activeTab === name ? activeImage : image}
      />
      <Text
        style={[styles.tabText, activeTab === name ? styles.activeTabText : '']}
      >
        {name}
      </Text>
    </Pressable>
  );
};

export default SearchTag;

const styles = StyleSheet.create({
  tab: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#69737C',
    borderRadius: 50,
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabImage: {
    height: 18,
    width: 18,
    resizeMode: 'contain',
    marginRight: 8,
  },
  tabText: {
    fontWeight: '600',
    fontSize: 12,
  },
  activeTab: {
    borderColor: '#6F0652',
  },
  activeTabText: {
    color: '#6F0652',
  },
});
