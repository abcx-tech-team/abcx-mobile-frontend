import { StyleSheet, View } from 'react-native';
import React from 'react';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import { ScreenNames } from '../utils';

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
    paddingBottom: 40,
    paddingTop: 24,
    paddingHorizontal: 24,
    borderTopWidth: 1,
    borderTopColor: '#EFEFEF',
  },
  topButton: {
    marginBottom: 16,
  },
});
