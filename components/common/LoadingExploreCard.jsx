import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors, sizes } from '../../utils';

const LoadingExploreCard = () => {
  return (
    <View style={styles.briefProfileCard}>
      <View style={styles.topBar}>
        <View>
          <View style={styles.fundingRound} />
        </View>
        <View style={styles.bookMark}></View>
      </View>
      <View style={styles.aboutCompany}>
        <View>
          <View style={styles.aboutInfo}>
            <Text style={styles.label} />
            <Text style={styles.value} />
          </View>
          <View style={styles.aboutInfo}>
            <Text style={styles.label} />
            <Text style={styles.value} />
          </View>
        </View>
        <View></View>
      </View>
      <View style={styles.companyFunding}>
        <View style={styles.fundingRow}>
          <View style={styles.fundingInfo}>
            <View style={styles.text} />
            <View style={[styles.text, styles.textValue]} />
          </View>
          <View style={styles.fundingInfo}>
            <View style={styles.text} />
            <View style={[styles.text, styles.textValue]} />
          </View>
        </View>
        <View style={styles.fundingRow}>
          <View style={styles.fundingInfo}>
            <View style={styles.text} />
            <View style={[styles.text, styles.textValue]} />
          </View>
          <View style={styles.fundingInfo}>
            <View style={styles.text} />
            <View style={[styles.text, styles.textValue]} />
          </View>
        </View>
      </View>
      <View style={styles.cta}></View>
    </View>
  );
};

export default LoadingExploreCard;

const styles = StyleSheet.create({
  briefProfileCard: {
    backgroundColor: colors.white,
    borderRadius: sizes.p2,
    elevation: sizes.p1,
    shadowColor: colors.textFull,
    shadowOffset: {
      width: 0,
      height: sizes.pHalf,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10.65,
    paddingHorizontal: 10,
    paddingVertical: sizes.p3,
    marginBottom: sizes.p4,
    marginTop: sizes.p2,
  },
  topBar: {
    paddingHorizontal: sizes.p2,
    marginBottom: sizes.p2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fundingRound: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: '700',
    paddingVertical: 18,
    backgroundColor: colors.grayBackground,
    width: 160,
    borderRadius: 16,
  },
  aboutCompany: {
    backgroundColor: colors.grayBackground,
    paddingHorizontal: sizes.p2,
    paddingVertical: sizes.p3,
    marginBottom: sizes.p2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: sizes.p2,
  },
  companyFunding: {
    paddingHorizontal: sizes.p2,
    flexDirection: 'column',
  },
  label: {
    fontSize: 14,
    color: colors.text20,
    fontWeight: '600',
    marginBottom: sizes.p1,
    paddingVertical: 5,
    width: '100%',
    backgroundColor: colors.grayBackground,
    borderRadius: sizes.p2,
  },
  value: {
    fontSize: 18,
    color: colors.textFull,
    fontWeight: '600',
    paddingVertical: 5,
    width: '60%',
    backgroundColor: colors.grayBackground,
    borderRadius: sizes.p3,
  },
  text: {
    backgroundColor: colors.grayBackground,
    borderRadius: sizes.p3,
    paddingVertical: 15,
    marginBottom: sizes.p2,
  },
  textValue: {
    width: '70%',
  },
  fundingRow: {
    flexDirection: 'row',
    marginBottom: sizes.p2,
    justifyContent: 'space-between',
  },
  fundingInfo: {
    width: '48%',
  },
  aboutInfo: {
    marginBottom: sizes.p2,
  },
  cta: {
    marginVertical: sizes.p2,
    marginHorizontal: sizes.p2,
    paddingVertical: 20,
    backgroundColor: colors.grayBackground,
    borderRadius: sizes.p2,
  },
  bookMark: {
    paddingVertical: 10,
    width: 60,
    backgroundColor: colors.grayBackground,
    borderRadius: sizes.p2,
  },
});
