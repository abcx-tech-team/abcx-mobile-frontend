import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import SearchBar from '../../components/SearchBar';
import BriefProfileCard from '../../components/BriefProfileCard';

const Explore = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SearchBar />
      <View style={styles.dashboard}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={{ paddingHorizontal: 24 }}
          horizontal={false}
        >
          {[
            'qt50mxvih9tdpps',
            'qt50ygqhe8q5rs',
            'qt50p9a03hazsbe',
            'qt50iqvdtyjac7o',
            'qt5020mvf0v4415',
          ].map((item) => (
            <BriefProfileCard
              key={item}
              briefProfileId={item}
              navigation={navigation}
            />
          ))}
        </ScrollView>
      </View>
    </View>
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
    paddingBottom: 256,
  },
  scrollView: {},
});
