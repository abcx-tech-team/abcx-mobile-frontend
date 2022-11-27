import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors, sizes } from '../utils';

const Chat = require('../assets/icons/messages.png');

const DashboardInviteCard = () => {
  const handleClick = () => {
    console.log('CTA clicked');
  };
  return (
    <View style={styles.invite}>
      <View style={styles.left}>
        <Text style={styles.heading}>
          Know someone who’s raising from circle
        </Text>
        <Text style={styles.subHeading}>Spread the word.</Text>
        <Pressable onPress={handleClick}>
          <Text style={styles.ctaText}>Invite Now</Text>
        </Pressable>
      </View>
      <View style={styles.right}>
        <Image source={Chat} style={styles.chatImage} />
      </View>
    </View>
  );
};

export default DashboardInviteCard;

const styles = StyleSheet.create({
  invite: {
    flexDirection: 'row',
    marginHorizontal: -sizes.p2,
    backgroundColor: colors.lightBlueBackground,
    marginTop: sizes.p3,
    paddingVertical: sizes.p2,
    justifyContent: 'space-between',
    flexShrink: 0,
  },
  left: {
    paddingLeft: sizes.p4,
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: 280,
  },
  chatImage: {
    height: 110,
    width: 100,
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
    letterSpacing: 1.2,
    color: colors.text80,
  },
  subHeading: {
    fontSize: 18,
    color: colors.text80,
    marginTop: sizes.p1,
  },
  ctaText: {
    marginTop: sizes.p2,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
