import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { colors, ScreenNames, sizes } from '../../utils';

const Investing = require('../../assets/icons/money_active.png');
const Clock = require('../../assets/icons/clock_deal.png');

const DealCard = ({ dealData, navigation }) => {
  return (
    <View style={styles.dealCard}>
      <View style={styles.header}>
        <Text style={styles.companyName}>
          {dealData?.dealMeta?.company_name || 'XXX-XXXX'}
        </Text>
        <View style={styles.dealType}>
          <Image source={Investing} style={styles.dealImage} />
          <Text style={styles.dealTypeText}>{dealData.tag}</Text>
        </View>
      </View>
      <View style={styles.dealDetails}>
        <Text style={styles.dealDetailsText}>
          Counterparty Member:{' '}
          {dealData.tag === 'Investing'
            ? dealData?.dealParty?.seller?.memberName
            : dealData?.dealParty?.buyer?.memberName}
        </Text>
        <Text style={styles.dealDetailsText}>
          Current Stage: {dealData?.dealStage || 'N/A'}
        </Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.tag}>
          <Image source={Clock} style={styles.tagImage} />
          <Text style={styles.tagText}>{dealData.dealStatus}</Text>
        </View>
        <Pressable
          onPress={() => {
            console.log(dealData.dealMeta.dealUUID);
            navigation.navigate(ScreenNames.dealDetails, {
              dealId: dealData.dealMeta.dealUUID,
            });
          }}
          style={styles.infoButton}
        >
          <Text style={styles.infoButtonText}>View Deal</Text>
          <Entypo name='chevron-right' size={24} color={colors.primary} />
        </Pressable>
      </View>
    </View>
  );
};

export default DealCard;

const styles = StyleSheet.create({
  dealCard: {
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: sizes.p2,
    padding: sizes.p2,
    marginBottom: sizes.p2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: sizes.p2,
    borderBottomColor: colors.borderColor,
    borderBottomWidth: 1,
  },
  companyName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text80,
  },
  dealType: {
    flexDirection: 'row',
    backgroundColor: colors.primaryBackground,
    paddingVertical: sizes.p1,
    paddingHorizontal: sizes.p2,
    alignItems: 'center',
    borderRadius: sizes.p2,
  },
  dealTypeText: {
    color: colors.primary,
    marginLeft: sizes.p1,
    fontWeight: '700',
  },
  dealTypeImage: {
    height: 11,
    width: 13,
  },
  dealDetails: {
    marginVertical: sizes.p2,
  },
  dealDetailsText: {
    fontSize: 14,
    color: colors.text60,
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tag: {
    backgroundColor: colors.greenBackground,
    paddingVertical: sizes.pHalf,
    paddingHorizontal: sizes.p2,
    borderRadius: sizes.p2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tagText: {
    color: colors.green,
    marginLeft: sizes.p1,
  },
  tagImage: {
    height: 12,
    width: 12,
  },
  infoButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoButtonText: {
    marginRight: sizes.pHalf,
    fontWeight: '600',
    color: colors.primary,
  },
  dealImage: {
    height: 18,
    width: 18,
    resizeMode: 'contain',
  },
});
