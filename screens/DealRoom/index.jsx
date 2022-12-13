import { useMemo, useState } from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import DealCard from '../../components/dealRoom/DealCard';
import NoDealCard from '../../components/dealRoom/NoDealCard';
import SearchTag from '../../components/common/SearchTag';
import AuthContainer from '../../container/AuthContainer';
import { useBuyerList, useSellerList } from '../../hooks/user.hooks';
import { colors, sizes } from '../../utils';

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

  const dealList = useMemo(() => {
    switch (activeTab) {
      case 'All':
        return [...(buyerList ?? []), ...(sellerList ?? [])];
      case 'Capital Raising':
        return [...(sellerList ?? [])];
      case 'Investing':
        return [...(buyerList ?? [])];
    }
  }, [activeTab, sellerList, buyerList]);

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
        {dealList.length ? (
          <ScrollView
            bounces={false}
            contentContainerStyle={styles.cardContainer}
          >
            {dealList.map((item, index) => (
              <DealCard key={index} dealData={item} navigation={navigation} />
            ))}
          </ScrollView>
        ) : buyerListLoading && sellerListLoading ? (
          <ActivityIndicator size='large' />
        ) : (
          <NoDealCard />
        )}
      </View>
    </AuthContainer>
  );
};

export default DealRoom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: sizes.p8,
    paddingBottom: 120,
  },
  screenName: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: sizes.p2,
    color: colors.text80,
  },
  tabsContainer: {
    marginVertical: sizes.p3,
    paddingHorizontal: sizes.p2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContainer: {
    paddingHorizontal: sizes.p2,
  },
});
