import { Image, Pressable, StyleSheet, Text } from 'react-native';
import React from 'react';
import { colors, sizes } from '../../utils';

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
    borderColor: colors.borderColor,
    borderRadius: 50,
    paddingHorizontal: sizes.p2,
    paddingVertical: sizes.p1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabImage: {
    height: 18,
    width: 18,
    resizeMode: 'contain',
    marginRight: sizes.p1,
  },
  tabText: {
    fontWeight: '600',
    fontSize: 12,
  },
  activeTab: {
    borderColor: colors.primary,
  },
  activeTabText: {
    color: colors.primary,
  },
});
