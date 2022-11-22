import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const Clock = require('../assets/icons/clock.png');
const CircleTick = require('../assets/icons/circle_tick_green.png');

const DealStepTags = (tagName) => {
  switch (tagName) {
    case 'Approved':
      return (
        <View style={[styles.successTag, styles.tab]}>
          <Image source={CircleTick} style={styles.clock} />
          <Text style={[styles.successTabText, styles.tabText]}>
            Needs Attention
          </Text>
        </View>
      );
    case 'Yet to Start':
      return (
        <View style={[styles.pendingTag, styles.tab]}>
          <Image source={Clock} style={styles.clock} />
          <Text style={[styles.pendingTabText, styles.tabText]}>
            yet to Start
          </Text>
        </View>
      );
    default:
      return null;
  }
};

export default DealStepTags;

const styles = StyleSheet.create({
  tab: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 50,
  },
  pendingTag: {
    backgroundColor: 'rgba(248, 176, 50, 0.2)',
  },
  clock: {
    height: 15,
    width: 15,
    marginRight: 8,
  },
  tabText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  pendingTabText: {
    color: '#E89612',
  },
  successTag: {
    backgroundColor: 'rgba(154, 200, 127, 0.2)',
  },
  successTabText: {
    color: '#5AB46A',
  },
});
