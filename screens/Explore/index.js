import {
  FlatList,
  StyleSheet,
  View,
  Platform,
  Text,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar';
import BriefProfileCard from '../../components/BlindProfileCard';
import AuthContainer from '../../container/AuthContainer';
import { useBlindProfiles } from '../../hooks/blindProfile.hooks';
import { serialize } from '../../utils';
import SearchTag from '../../components/SearchTag';

const tabs = [
  {
    name: 'All',
    image: require('../../assets/icons/world.png'),
    activeImage: require('../../assets/icons/world_active.png'),
  },
  {
    name: 'Recommended',
    image: require('../../assets/icons/star.png'),
    activeImage: require('../../assets/icons/star_active.png'),
  },
  {
    name: 'Trending',
    image: require('../../assets/icons/arrow.png'),
    activeImage: require('../../assets/icons/arrow_active.png'),
  },
  {
    name: 'New',
    image: require('../../assets/icons/arrow.png'),
    activeImage: require('../../assets/icons/arrow_active.png'),
  },
  {
    name: 'Revenue Earning',
    image: require('../../assets/icons/arrow.png'),
    activeImage: require('../../assets/icons/arrow_active.png'),
  },
  {
    name: 'Futuristic',
    image: require('../../assets/icons/arrow.png'),
    activeImage: require('../../assets/icons/arrow_active.png'),
  },
  {
    name: 'Your Watchlist',
    image: require('../../assets/icons/arrow.png'),
    activeImage: require('../../assets/icons/arrow_active.png'),
  },
];

const FooterComponent = ({ isLoading, data }) =>
  isLoading ? (
    <View style={[styles.loader]}>
      <ActivityIndicator size='large' color='rgba(0,0,0,0.6)' />
    </View>
  ) : data.length ? (
    <Text style={styles.emptyText}>No more blind profiles to show 😓</Text>
  ) : (
    <Text style={styles.emptyText}>No data to show 😓</Text>
  );

const Explore = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('All');

  const [query, setQuery] = useState({
    pageNo: 1,
    pageSize: 10,
    ctrm: '',
    tprm: '',
    ftrm: '',
    strm: '',
  });

  const [blindProfiles, setBlindProfiles] = useState({
    hasMore: true,
    data: [],
  });

  const { data: blindProfileData, isLoading } = useBlindProfiles(
    serialize(query)
  );

  const fetchMoreData = () => {
    if (blindProfiles.hasMore) {
      setQuery((prev) => ({ ...prev, pageNo: prev.pageNo + 1 }));
    }
  };

  useEffect(() => {
    if (blindProfileData) {
      if (blindProfileData.next) {
        setBlindProfiles((prev) => ({
          ...prev,
          hasMore: true,
          data: [...prev.data, ...blindProfileData.results],
        }));
      } else {
        setBlindProfiles((prev) => ({
          ...prev,
          hasMore: false,
          data: [...prev.data, ...blindProfileData.results],
        }));
      }
    }
  }, [blindProfileData]);

  return (
    <AuthContainer navigation={navigation}>
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <SearchBar
            query={query}
            setQuery={setQuery}
            setBlindProfiles={setBlindProfiles}
          />
        </View>
        <View>
          <ScrollView
            style={styles.scroll}
            contentContainerStyle={styles.tabsContainer}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {tabs.map((item, index) => (
              <SearchTag
                {...item}
                key={item.name}
                tabStyle={index !== tabs.length - 1 ? styles.tabStyle : null}
                onPress={() => setActiveTab(item.name)}
                activeTab={activeTab}
              />
            ))}
          </ScrollView>
        </View>
        <View style={styles.dashboard}>
          <FlatList
            bounces={false}
            data={blindProfiles.data}
            renderItem={({ item }) => (
              <BriefProfileCard briefProfile={item} navigation={navigation} />
            )}
            keyExtractor={(item) => item.companyUUID}
            style={styles.scrollView}
            contentContainerStyle={{ paddingHorizontal: 24 }}
            onEndReachedThreshold={0.01}
            onEndReached={fetchMoreData}
            ListFooterComponent={
              <FooterComponent
                isLoading={isLoading}
                data={blindProfiles.data}
              />
            }
            ListFooterComponentStyle={{
              height: 36,
              width: '100%',
              marginBottom: 16,
            }}
          />
        </View>
      </View>
    </AuthContainer>
  );
};

export default Explore;

const styles = StyleSheet.create({
  emptyText: {
    fontSize: Platform.OS === 'ios' ? 18 : 16,
    fontWeight: '600',
    letterSpacing: 1.5,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 35,
    textAlign: 'center',
    fontWeight: '600',
    marginVertical: 20,
  },
  dashboard: {
    paddingBottom: Platform.OS === 'ios' ? 310 : 290,
  },
  searchBar: {
    zIndex: 50,
  },
  tabsContainer: {
    marginBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 24,
  },
  scroll: {
    flexGrow: 0,
  },
  tabStyle: {
    marginRight: 8,
  },
});
