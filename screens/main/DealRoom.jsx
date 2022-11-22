import { useCallback, useEffect, useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import DealCard from '../../components/DealCard';
import SearchTag from '../../components/SearchTag';
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
  const { data: buyerList } = useBuyerList();
  const { data: sellerList } = useSellerList();

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
        <ScrollView
          bounces={false}
          contentContainerStyle={styles.cardContainer}
        >
          {getDealList(activeTab).map((item, index) => (
            <DealCard key={index} dealData={item} navigation={navigation} />
          ))}
        </ScrollView>
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
});
