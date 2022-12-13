import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { colors, sizes } from '../../utils';

const PrimaryButton = ({
  title,
  onClick,
  isLoading = false,
  noLoader = false,
  disabled = false,
}) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable onPress={onClick} style={styles.button} disabled={disabled}>
        <Text style={styles.text}>{title}</Text>
        {!noLoader ? (
          <View style={styles.loaderContainer}>
            {isLoading ? (
              <ActivityIndicator
                size='small'
                color={colors.white}
                style={styles.loader}
              />
            ) : null}
          </View>
        ) : null}
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    width: '100%',
    backgroundColor: colors.primary,
    borderRadius: sizes.p1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: sizes.p5,
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  loaderContainer: {
    height: 20,
    width: 20,
  },
  loader: {
    marginLeft: sizes.p2,
  },
});
