import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Badge from './Badge';
import { useLoggedInUser } from '../hooks/user.hooks';

const Avatar = require('../assets/avatar_abcx.png');
const Bell = require('../assets/icons/bell.png');

const UserHeader = ({ firstName }) => {
  const { data: userData } = useLoggedInUser();
  return (
    <View style={styles.header}>
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>
          Hi {userData?.first_name || ''} 👋
        </Text>
      </View>
      <View style={styles.icons}>
        <View style={styles.bellContainer}>
          <Image source={Bell} style={styles.bell} />
          <Badge status='success' number={3} style={styles.badgeStyle} />
        </View>
        <View style={styles.avatarContainer}>
          <Image source={Avatar} style={styles.avatar} />
          <Badge status='success' />
        </View>
      </View>
    </View>
  );
};

export default UserHeader;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 24,
    height: 115,
    justifyContent: 'space-between',
    paddingBottom: 24,
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: '#fff',
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bellContainer: {
    position: 'relative',
    marginRight: 24,
  },
  avatarContainer: {
    position: 'relative',
  },
  bell: {
    height: 20,
    width: 20,
  },
  avatar: {
    width: 32,
    height: 32,
  },
  headerTextContainer: {
    height: 36,
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  badgeStyle: {
    backgroundColor: '#FF0000',
  },
});
