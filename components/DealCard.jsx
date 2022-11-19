import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const Investing = require('../assets/icons/investingTag.png');
const Clock = require('../assets/icons/clock_deal.png');

const data = {
  name: 'Kalyp Technology Limited',
  type: 'Investing',
  counterPartMember: 'Octopus Ventures',
  currentStage: 'Access Brief Profile',
  tag: 'Pending Approval',
};

const DealCard = () => {
  return (
    <View style={styles.dealCard}>
      <View style={styles.header}>
        <Text style={styles.companyName}>{data.name}</Text>
        <View style={styles.dealType}>
          <Image source={Investing} style={styles.dealImage} />
          <Text style={styles.dealTypeText}>{data.type}</Text>
        </View>
      </View>
      <View style={styles.dealDetails}>
        <Text style={styles.dealDetailsText}>
          Counterparty Member: {data.counterPartMember}
        </Text>
        <Text style={styles.dealDetailsText}>
          Current Stage: {data.currentStage}
        </Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.tag}>
          <Image source={Clock} style={styles.tagImage} />
          <Text style={styles.tagText}>{data.tag}</Text>
        </View>
        <Pressable
          onPress={() => console.log('Deal Presses')}
          style={styles.infoButton}
        >
          <Text style={styles.infoButtonText}>View Deal</Text>
          <Entypo name='chevron-right' size={24} color='#6F0652' />
        </Pressable>
      </View>
    </View>
  );
};

export default DealCard;

const styles = StyleSheet.create({
  dealCard: {
    borderWidth: 1,
    borderColor: '#efefef',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 16,
    borderBottomColor: '#cecece',
    borderBottomWidth: 1,
  },
  companyName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#34495E',
  },
  dealType: {
    flexDirection: 'row',
    backgroundColor: 'rgba(171, 0, 133, 0.16)',
    paddingVertical: 4,
    paddingHorizontal: 10,
    alignItems: 'center',
    borderRadius: 16,
  },
  dealTypeText: {
    color: '#6F0652',
    marginLeft: 8,
  },
  dealTypeImage: {
    height: 11,
    width: 13,
  },
  dealDetails: {
    marginVertical: 16,
  },
  dealDetailsText: {
    fontSize: 14,
    color: '#51575E',
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tag: {
    backgroundColor: 'rgba(154, 200, 127, 0.2)',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tagText: {
    color: '#5AB46A',
    marginLeft: 8,
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
    marginRight: 4,
    fontWeight: '600',
    color: '#6F0652',
  },
});
