import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import Badge from './Badge';
import { useLoggedInUser } from '../../hooks/user.hooks';
import { Avatar } from 'react-native-paper';
import { colors, sizes, USER_TOKEN_ID_KEY } from '../../utils';
import { AuthContext } from '../../context/authContext';
import { removeStorage } from '../../utils/asyncStorage';

const AvatarImg = require('../../assets/avatar_abcx.png');
const Bell = require('../../assets/icons/bell.png');

const UserHeader = () => {
  const { setState, token } = useContext(AuthContext);

  const { data: userData } = useLoggedInUser(token, !!token);

  const handleLogOut = async () => {
    setState('');
    removeStorage(USER_TOKEN_ID_KEY);
  };
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
          <Pressable style={styles.avatar} onPress={handleLogOut}>
            <Avatar.Image source={AvatarImg} size={30} />
            <Badge status='success' />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default UserHeader;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: sizes.p4,
    height: 115,
    justifyContent: 'space-between',
    paddingBottom: sizes.p3,
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: colors.white,
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bellContainer: {
    position: 'relative',
    marginRight: sizes.p3,
  },
  avatarContainer: {
    position: 'relative',
  },
  bell: {
    height: 20,
    width: 20,
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
    backgroundColor: colors.badgeRed,
  },
});
