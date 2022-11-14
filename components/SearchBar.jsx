import {
  Image,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useState } from 'react';
import FilterModal from './filter/FilterModal';

const MagnifyingGlass = require('../assets/icons/search.png');
const Filter = require('../assets/icons/filter.png');

const SearchBar = ({ setQuery, setBlindProfiles, query }) => {
  const [showFilter, setShowFilter] = useState(false);

  const handleApplyFilter = (key, value) => {
    setQuery((prev) => ({ ...prev, [key]: value, pageNo: 1 }));
    setBlindProfiles({ hasMore: true, data: [] });
  };

  const handleClearFilters = () => {
    setQuery({ pageNo: 1, pageSize: 10, ctrm: '', tprm: '', ftrm: '' });
    setBlindProfiles({ hasMore: true, data: [] });
    setShowFilter(false);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <View style={styles.glassContainer}>
            <Image source={MagnifyingGlass} style={styles.glass} />
          </View>
          <TextInput
            placeholder='Search Opportunities (Try Fintech)'
            style={styles.searchInput}
          />
          <View style={styles.filterContainer}>
            <Pressable onPress={() => setShowFilter(true)}>
              <Image source={Filter} style={styles.filter} />
            </Pressable>
          </View>
        </View>
      </View>
      {showFilter ? (
        <FilterModal
          showFilter={showFilter}
          handleApplyFilter={handleApplyFilter}
          handleClearFilters={handleClearFilters}
          setShowFilter={setShowFilter}
          query={query}
        />
      ) : null}
    </>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    height: Platform.OS === 'ios' ? 136 : 116,
    justifyContent: 'space-between',
    paddingBottom: 24,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  searchBar: {
    paddingHorizontal: 10,
    backgroundColor: '#fbfbfb',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'stretch',
  },
  glassContainer: {
    width: '10%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  filterContainer: {
    marginLeft: 8,
    width: '10%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  glass: {
    height: 15,
    width: 15,
  },
  filter: {
    height: 12,
    width: 18,
  },
  searchInput: {
    height: 40,
    width: '80%',
  },
});
