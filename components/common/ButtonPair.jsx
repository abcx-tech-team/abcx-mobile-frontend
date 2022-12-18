import { StyleSheet, View } from 'react-native';
import React from 'react';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import { colors, sizes } from '../../utils';

const ButtonPair = ({
  primaryCTA,
  secondaryCTA,
  secondaryCTAFunction,
  primaryCTAFunction,
  primaryDisabled,
}) => {
  return (
    <View style={styles.preferenceButton}>
      <View style={styles.topButton}>
        <PrimaryButton
          title={primaryCTA}
          onClick={primaryCTAFunction}
          disabled={primaryDisabled}
          noLoader
        />
      </View>
      <View style={styles.bottomButton}>
        <SecondaryButton
          title={secondaryCTA}
          onClick={secondaryCTAFunction}
          noLoader
        />
      </View>
    </View>
  );
};

export default ButtonPair;

const styles = StyleSheet.create({
  preferenceButton: {
    paddingBottom: sizes.p3,
    paddingTop: sizes.p3,
    paddingHorizontal: sizes.p4,
    borderTopWidth: 1,
    borderTopColor: colors.borderColor,
  },
  topButton: {
    marginBottom: sizes.p2,
  },
});
