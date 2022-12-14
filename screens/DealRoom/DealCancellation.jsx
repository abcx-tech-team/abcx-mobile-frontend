import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { sizes, colors, ScreenNames } from '../../utils';
import SecondaryButton from '../../components/common/SecondaryButton';
import PrimaryButton from '../../components/common/PrimaryButton';
import { Feather, AntDesign } from '@expo/vector-icons';

const DealCancellation = ({ navigation }) => {
  return (
    <View style={styles.dealCancelContainer}>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? colors.text20 : colors.white,
          },
          styles.back,
        ]}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name='arrowleft' size={24} color='black' />
      </Pressable>
      <View style={styles.content}>
        <Feather name='thumbs-up' size={100} color='rgba(224, 106, 110, 1)' />
        <Text style={styles.heading}>Congratulations</Text>
        <Text style={styles.subHeading}>
          We are so happy that we were able to facilate this deal between you
          folks. We would love to do it again. Cheers!
        </Text>
      </View>
      <View style={styles.actionButtons}>
        <View style={styles.primaryButtonContainer}>
          <View style={styles.line} />
          <PrimaryButton title='Let us know the reason' noLoader />
        </View>
        <SecondaryButton
          title='Explore New Opportunities'
          onClick={() => navigation.navigate(ScreenNames.explore)}
          noLoader
        />
      </View>
    </View>
  );
};

export default DealCancellation;

const styles = StyleSheet.create({
  dealCancelContainer: {
    paddingHorizontal: sizes.p3,
    paddingTop: sizes.p7,
    backgroundColor: colors.white,
    flex: 1,
  },
  back: {
    marginRight: sizes.p2,
    height: 40,
    width: 40,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 32,
    fontWeight: '800',
    color: colors.text80,
    marginTop: sizes.p3,
    marginBottom: sizes.p2,
  },
  subHeading: {
    fontSize: 16,
    color: colors.text60,
  },
  content: {
    alignItems: 'center',
    marginTop: sizes.p9,
  },
  actionButtons: {
    marginTop: sizes.p2,
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: sizes.p1,
    paddingBottom: sizes.p3,
  },
  primaryButtonContainer: {
    marginBottom: sizes.p1,
  },
  line: {
    borderTopWidth: 1,
    marginBottom: sizes.p3,
    borderColor: colors.text20,
    marginHorizontal: -sizes.p4,
  },
});
