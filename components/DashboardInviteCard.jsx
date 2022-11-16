import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

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
    marginHorizontal: -24,
    backgroundColor: '#F9F9FF',
    marginTop: 24,
    paddingVertical: 16,
    justifyContent: 'space-between',
    flexShrink: 0,
  },
  left: {
    paddingLeft: 32,
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
  },
  subHeading: {
    fontSize: 18,
    marginTop: 8,
  },
  ctaText: {
    marginTop: 16,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
