import * as React from 'react';
import {
  LayoutAnimation,
  Text,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { colors, sizes } from '../../utils';

const CompanyAccordion = ({ title, child, expanded, setExpanded, index }) => {
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
        <Entypo
          name={expanded ? 'chevron-up' : 'chevron-down'}
          size={30}
          color='black'
        />
      </Pressable>
      {expanded && <View style={styles.child}>{child}</View>}
    </View>
  );
};

export default CompanyAccordion;

const styles = StyleSheet.create({
  accordion: {
    borderWidth: 1,
    borderColor: colors.text20,
    padding: sizes.p3,
    borderRadius: sizes.p2,
    marginBottom: sizes.p2,
  },
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
