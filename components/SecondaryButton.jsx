import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

const SecondaryButton = ({
  title,
  onClick,
  isLoading = false,
  noLoader = false,
}) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable onPress={onClick} style={styles.button}>
        <Text style={styles.text}>{title}</Text>
        {!noLoader ? (
          <View style={styles.loaderContainer}>
            {isLoading ? (
              <ActivityIndicator
                size='small'
                color='#fff'
                style={styles.loader}
              />
            ) : null}
          </View>
        ) : null}
      </Pressable>
    </View>
  );
};

export default SecondaryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    width: '100%',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 16,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0018FF',
  },
  loaderContainer: {
    height: 20,
    width: 20,
  },
  loader: {
    marginLeft: 16,
  },
});
