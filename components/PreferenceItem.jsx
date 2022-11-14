import { Pressable, StyleSheet, Text } from 'react-native';

const PreferenceItem = ({ name, onClick, selected }) => {
  return (
    <Pressable
      style={[styles.preferenceItem, selected ? styles.activePreference : '']}
      onPress={onClick}
    >
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
    borderColor: '#efefef',
    paddingVertical: 16,
    marginBottom: 24,
    borderRadius: 8,
  },
  preferenceText: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  activePreference: {
    backgroundColor: '#6F0652',
  },
  activePreferenceText: {
    color: '#fff',
  },
});
