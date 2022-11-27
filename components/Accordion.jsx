import * as React from 'react';
import {
  LayoutAnimation,
  Text,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { colors, sizes } from '../utils';

const Accordion = ({ title, data, expanded, setExpanded, index }) => {
  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded((prev) => {
      if (prev === index) {
        return -1;
      }
      return index;
    });
  };

  return (
    <View style={styles.accordion}>
      <Pressable style={styles.row} onPress={toggleExpand}>
        <Text style={[styles.title, styles.font]}>{title}</Text>
        <AntDesign name={expanded ? 'minus' : 'plus'} size={24} color='black' />
      </Pressable>
      <View style={styles.parentHr} />
      {expanded && (
        <View style={styles.child}>
          <Text style={styles.data}>{data}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text80,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: sizes.p7,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
    paddingBottom: sizes.p2,
    marginBottom: sizes.p2,
  },
  parentHr: {
    height: 1,
    width: '100%',
  },
  child: {
    paddingVertical: sizes.p1,
  },
  data: {
    fontSize: 15,
    color: colors.text60,
  },
});

export default Accordion;
