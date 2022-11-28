import { StyleSheet, View } from 'react-native';
import React from 'react';
import PrimaryButton from './common/PrimaryButton';
import SecondaryButton from './common/SecondaryButton';
import { colors, ScreenNames, sizes } from '../utils';

const PreferenceButtons = ({
  primaryCTA,
  secondaryCTA,
  navigation,
  primaryCTAFunction,
}) => {
  return (
    <View style={styles.preferenceButton}>
      <View style={styles.topButton}>
        <PrimaryButton
          title={primaryCTA}
          onClick={primaryCTAFunction}
          noLoader
        />
      </View>
      <View style={styles.bottomButton}>
        <SecondaryButton
          title={secondaryCTA}
          onClick={() => navigation.navigate(ScreenNames.main)}
          noLoader
        />
      </View>
    </View>
  );
};

export default PreferenceButtons;

PreferenceButtons.defaultProps = {
  primaryCTA: 'Request Brief profile',
  secondaryCTA: 'I’ll do it later',
};

const styles = StyleSheet.create({
  preferenceButton: {
    paddingBottom: sizes.p5,
    paddingTop: sizes.p3,
    paddingHorizontal: sizes.p4,
    borderTopWidth: 1,
    borderTopColor: colors.borderColor,
  },
  topButton: {
    marginBottom: sizes.p2,
  },
});
