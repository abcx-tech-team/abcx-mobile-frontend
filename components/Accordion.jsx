import * as React from 'react';
import {
  LayoutAnimation,
  Text,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

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
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 56,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#efefef',
    paddingBottom: 16,
    marginBottom: 16,
  },
  parentHr: {
    height: 1,
    width: '100%',
  },
  child: {
    paddingVertical: 8,
  },
  data: {
    fontSize: 15,
    color: '#637381',
  },
});

export default Accordion;
