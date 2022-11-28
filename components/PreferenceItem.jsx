import { Image, Pressable, StyleSheet, Text } from 'react-native';
import { colors, sizes } from '../utils';
const Tick = require('../assets/icons/tick.png');

const PreferenceItem = ({ name, onClick, selected }) => {
  return (
    <Pressable
      style={[styles.preferenceItem, selected ? styles.activePreference : '']}
      onPress={onClick}
    >
      {selected ? <Image source={Tick} style={styles.tick} /> : null}
      <Text
        style={[
          styles.preferenceText,
          selected ? styles.activePreferenceText : '',
        ]}
      >
        {name}
      </Text>
    </Pressable>
  );
};

export default PreferenceItem;

const styles = StyleSheet.create({
  preferenceItem: {
    borderWidth: 2,
    borderColor: colors.borderColor,
    paddingVertical: sizes.p2,
    marginBottom: sizes.p3,
    borderRadius: sizes.p1,
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative',
  },
  preferenceText: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  activePreference: {
    borderColor: colors.primary,
  },
  activePreferenceText: {
    color: colors.primary,
  },
  tick: {
    height: 15,
    width: 15,
    position: 'absolute',
    top: '80%',
    left: '5%',
  },
});
