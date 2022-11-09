import { FlatList, StyleSheet, View, Platform } from 'react-native';
import React, { useState } from 'react';
import SearchBar from '../../components/SearchBar';
import BriefProfileCard from '../../components/BlindProfileCard';
import AuthContainer from '../../container/AuthContainer';
import { useBlindProfiles } from '../../hooks/blindProfile.hooks';
import { serialize } from '../../utils';

const Explore = ({ navigation }) => {
  const [query, setQuery] = useState({ page: 1, limit: 10 });
  const { data } = useBlindProfiles(serialize(query));
  return (
    <AuthContainer navigation={navigation}>
      <View style={styles.container}>
        <SearchBar />
        <View style={styles.dashboard}>
          <FlatList
            data={[
              'qt50mxvih9tdpps',
              'qt50ygqhe8q5rs',
              'qt50p9a03hazsbe',
              'qt50iqvdtyjac7o',
              'qt5020mvf0v4415',
            ]}
            renderItem={({ item }) => (
              <BriefProfileCard briefProfileId={item} navigation={navigation} />
            )}
            keyExtractor={(item) => item}
            style={styles.scrollView}
            contentContainerStyle={{ paddingHorizontal: 24 }}
          />
        </View>
      </View>
    </AuthContainer>
  );
};

export default Explore;

const styles = StyleSheet.create({
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
  scrollView: {},
});
