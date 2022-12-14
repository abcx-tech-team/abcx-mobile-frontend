import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const CircleTick = require('../../assets/icons/circle_tick_green.png');

const DealStepTags = (tagName) => {
  switch (tagName) {
    case 'Completed':
      return (
        <View style={[styles.successTag, styles.tab]}>
          <AntDesign
            name='checkcircleo'
            size={15}
            color='#5AB46A'
            style={styles.marginRight}
          />
          <Text style={[styles.successTabText, styles.tabText]}>{tagName}</Text>
        </View>
      );
    case 'Yet to Start':
      return (
        <View style={[styles.pendingTag, styles.tab]}>
          <AntDesign
            name='clockcircleo'
            size={15}
            color='#E89612'
            style={styles.marginRight}
          />
          <Text style={[styles.pendingTabText, styles.tabText]}>{tagName}</Text>
        </View>
      );
    case 'In progress':
      return (
        <View style={[styles.pendingTag, styles.tab]}>
          <MaterialCommunityIcons
            name='progress-check'
            size={15}
            color='#E89612'
            style={styles.marginRight}
          />
          <Text style={[styles.pendingTabText, styles.tabText]}>{tagName}</Text>
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
  marginRight: {
    fontWeight: 'bold',
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
