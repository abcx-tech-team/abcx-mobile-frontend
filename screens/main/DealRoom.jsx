import { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import DealCard from '../../components/DealCard';
import PrimaryButton from '../../components/PrimaryButton';
import SearchTag from '../../components/SearchTag';
import SecondaryButton from '../../components/SecondaryButton';
import AuthContainer from '../../container/AuthContainer';
import { useBuyerList, useSellerList } from '../../hooks/user.hooks';

const tabs = [
  {
    image: require('../../assets/icons/bag.png'),
    activeImage: require('../../assets/icons/bag_active.png'),
    name: 'All',
  },
  {
    image: require('../../assets/icons/money.png'),
    name: 'Investing',
    activeImage: require('../../assets/icons/money_active.png'),
  },
  {
    image: require('../../assets/icons/ticket.png'),
    name: 'Capital Raising',
    activeImage: require('../../assets/icons/ticket_active.png'),
  },
];

const DealRoom = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('All');
  const { data: buyerList, isLoading: buyerListLoading } = useBuyerList();
  const { data: sellerList, isLoading: sellerListLoading } = useSellerList();

  const getDealList = (tab) => {
    switch (tab) {
      case 'All':
        return [...(buyerList ?? []), ...(sellerList ?? [])];
      case 'Capital Raising':
        return [...(sellerList ?? [])];
      case 'Investing':
        return [...(buyerList ?? [])];
    }
  };

  return (
    <AuthContainer navigation={navigation}>
      <View style={styles.container}>
        <Text style={styles.screenName}>Deal Room</Text>
        <View style={styles.tabsContainer}>
          {tabs.map((item) => (
            <SearchTag
              key={item.name}
              {...item}
              activeTab={activeTab}
              onPress={() => setActiveTab(item.name)}
            />
          ))}
        </View>
        {getDealList(activeTab).length ? (
          <ScrollView
            bounces={false}
            contentContainerStyle={styles.cardContainer}
          >
            {getDealList(activeTab).map((item, index) => (
              <DealCard key={index} dealData={item} navigation={navigation} />
            ))}
          </ScrollView>
        ) : buyerListLoading && sellerListLoading ? (
          <ActivityIndicator size='large' />
        ) : (
          <View style={styles.noDealContainer}>
            <View style={styles.noDealCard}>
              <Text style={styles.heading}>You don’t have any deals yet.</Text>
              <Text style={styles.subHeading}>
                You can either explore exciting opportunities listed by other
                members or list a few of your own portfolio companies{' '}
              </Text>
              <View style={styles.buttonContainer}>
                <PrimaryButton title='Explore Opportunities' noLoader />
                <SecondaryButton title='List Companies' noLoader />
              </View>
            </View>
          </View>
        )}
      </View>
    </AuthContainer>
  );
};

export default DealRoom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 64,
  },
  screenName: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    color: '#34495E',
  },
  tabsContainer: {
    marginVertical: 24,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContainer: {
    paddingHorizontal: 16,
    paddingBottom: 120,
  },
  noDealCard: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(251, 251, 251, 1)',
  },
  noDealContainer: {
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 16,
  },
  subHeading: {
    fontSize: 14,
    fontWeight: '500',
    color: 'rgba(118, 118, 118, 1)',
    marginBottom: 32,
  },
});
