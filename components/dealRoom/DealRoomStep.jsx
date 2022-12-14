import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { colors, sizes } from '../../utils';

const DealRoomStep = ({
  nextStepName,
  nextStepDesc,
  isRecommended,
  isEnabled,
  buttonDisabled = false,
  onClick,
  nextStepCode,
}) => {
  return (
    <View style={[styles.dealRoomStep, isRecommended ? styles.active : null]}>
      <View style={styles.stepDetail}>
        <Text
          style={[
            styles.stepText,
            isRecommended ? styles.activeText : null,
            !isEnabled ? styles.disabledText : null,
          ]}
        >
          {nextStepName}
        </Text>
      </View>
      <View style={styles.stepActions}>
        <Text style={styles.descriptionText}>{nextStepDesc}</Text>
        <View style={styles.backContainer}>
          <Pressable
            style={({ pressed }) => [
              styles.back,
              isEnabled
                ? {
                    backgroundColor: pressed ? colors.text20 : colors.white,
                  }
                : null,
            ]}
            disabled={buttonDisabled || !isEnabled}
            onPress={() => onClick(nextStepCode)}
          >
            <AntDesign
              name='arrowright'
              size={24}
              color={
                isRecommended
                  ? colors.primary
                  : isEnabled
                  ? colors.text80
                  : colors.text40
              }
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default DealRoomStep;

const styles = StyleSheet.create({
  dealRoomStep: {
    borderColor: colors.borderColor,
    borderWidth: 1,
    padding: sizes.p3,
    marginBottom: sizes.p2,
    borderRadius: sizes.p2,
  },
  stepDetail: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stepImage: {
    marginRight: sizes.p2,
    height: sizes.p3,
    width: sizes.p3,
    resizeMode: 'contain',
  },
  stepText: {
    fontSize: 18,
    fontWeight: '700',
  },
  stepActions: {
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  descriptionText: {
    color: colors.text40,
    width: '85%',
  },
  disabledText: {
    color: colors.text40,
  },
  active: {
    borderColor: colors.primaryBackground,
  },
  activeText: {
    color: colors.primary,
  },
  back: {
    height: sizes.p5,
    width: sizes.p5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  backContainer: {
    width: '15%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
