import {
  FlatList,
  StyleSheet,
  View,
  Platform,
  Text,
  ActivityIndicator,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar';
import BriefProfileCard from '../../components/BlindProfileCard';
import AuthContainer from '../../container/AuthContainer';
import { useBlindProfiles } from '../../hooks/blindProfile.hooks';
import { serialize } from '../../utils';

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
  const [query, setQuery] = useState({
    pageNo: 1,
    pageSize: 10,
    ctrm: '',
    tprm: '',
    ftrm: '',
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
        <SearchBar
          query={query}
          setQuery={setQuery}
          setBlindProfiles={setBlindProfiles}
        />
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
    paddingBottom: Platform.OS === 'ios' ? 250 : 230,
  },
});
