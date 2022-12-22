import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import { colors, sizes } from '../../utils';
import { useConfirmation } from '../../context/ModalContext';
import DashboardActivityModal from '../modals/DashboardActivityModal';

const DashboardActivityCard = ({
  leftIcon,
  heading,
  subHeading,
  ctaIcon,
  ctaText,
  modalHeading,
  modalText,
}) => {
  const confirmation = useConfirmation();
  const handleActivity = async () => {
    try {
      await confirmation({
        Component: DashboardActivityModal,
        heading: modalHeading,
        subHeading: modalText,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View style={styles.activityCard}>
      <View style={styles.left}>
        <Image source={leftIcon} style={styles.circleTick} />
      </View>
      <View style={styles.right}>
        <Text style={styles.cardHeading}>{heading}</Text>
        <Text style={styles.cardSubHeading}>{subHeading}</Text>
        <View style={styles.cardCta}>
          <Text style={styles.cardCtaText}>{ctaText}</Text>
          <Pressable
            style={({ pressed }) => [
              styles.back,
              {
                backgroundColor: pressed ? colors.text20 : colors.white,
              },
            ]}
            onPress={handleActivity}
          >
            <Image style={styles.arrowIcon} source={ctaIcon} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default DashboardActivityCard;

const styles = StyleSheet.create({
  activityCard: {
    backgroundColor: colors.white,
    padding: sizes.p2,
    flexDirection: 'row',
    borderRadius: sizes.p1,
    shadowColor: colors.textFull,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
    marginBottom: sizes.p2,
  },
  circleTick: {
    height: 22,
    width: 22,
  },
  cardHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text80,
  },
  cardSubHeading: {
    fontSize: 15,
    color: colors.text40,
    marginVertical: sizes.p1,
  },
  cardCta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardCtaText: {
    fontSize: 13,
    fontWeight: '500',
    color: colors.blue,
  },
  left: {
    marginRight: sizes.p2,
  },
  right: {
    flex: 1,
  },
  back: {
    height: sizes.p5,
    width: sizes.p5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
});
