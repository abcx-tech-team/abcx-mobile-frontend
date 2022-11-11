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
import Country from './filter/Country';
import FundType from './filter/FundType';
import FundRound from './filter/FundRound';
import PrimaryButton from './PrimaryButton';
import BlindProfileButton from './BlindProfileButton';

const MagnifyingGlass = require('../assets/icons/search.png');
const Filter = require('../assets/icons/filter.png');
const Cross = require('../assets/icons/cross.png');

const Filters = ['Country', 'Funding Type', 'Last Round'];

const SearchBar = ({ query, setQuery, setBlindProfiles }) => {
  const [showFilter, setShowFilter] = useState(false);
  const [filterType, setFilterType] = useState('Country');

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
        <Modal animationType='slide' visible={showFilter}>
          <View style={styles.filterModal}>
            <View style={styles.action}>
              <Pressable onPress={() => setShowFilter(false)}>
                <Image source={Cross} />
              </Pressable>
              <Text style={styles.actionText}>Filter</Text>
            </View>
            <View style={styles.mainFilter}>
              <View style={styles.left}>
                {Filters.map((item) => (
                  <Pressable
                    style={[
                      styles.filterItem,
                      item === filterType ? styles.activeFilterItem : null,
                    ]}
                    key={item}
                    onPress={() => setFilterType(item)}
                  >
                    <Text style={styles.filterText}>{item}</Text>
                    <View style={styles.gradientBackground} />
                  </Pressable>
                ))}
              </View>
              <View style={styles.right}>
                {filterType === 'Country' ? (
                  <Country
                    handleApplyFilter={handleApplyFilter}
                    query={query}
                  />
                ) : filterType === 'Funding Type' ? (
                  <FundType
                    handleApplyFilter={handleApplyFilter}
                    query={query}
                  />
                ) : (
                  <FundRound
                    handleApplyFilter={handleApplyFilter}
                    query={query}
                  />
                )}
              </View>
            </View>
            <View style={styles.actionButtons}>
              <View style={styles.leftButton}>
                <BlindProfileButton
                  onClick={handleClearFilters}
                  title='Clear Filters'
                />
              </View>
              <View style={styles.rightButton}>
                <PrimaryButton
                  onClick={() => setShowFilter(false)}
                  title='Apply Filters'
                  noLoader
                />
              </View>
            </View>
          </View>
        </Modal>
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
  filterModal: {
    paddingTop: Platform.OS === 'ios' ? 80 : 30,
    paddingHorizontal: 24,
    flex: 1,
  },
  action: {
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 24,
  },
  mainFilter: {
    flexDirection: 'row',
    flex: 1,
  },
  left: {
    width: '40%',
    backgroundColor: '#fbfbfb',
  },
  right: {
    width: '60%',
    paddingLeft: 16,
  },
  filterItem: {
    paddingTop: 16,
  },
  filterText: {
    textAlign: 'center',
    marginBottom: 16,
  },
  activeFilterItem: {
    backgroundColor: '#d1cfcf',
  },
  gradientBackground: {
    height: 1,
    backgroundColor: 'gray',
  },
  actionButtons: {
    backgroundColor: '#fff',
    width: '100%',
    flexDirection: 'column',
    marginBottom: 40,
    justifyContent: 'space-evenly',
    paddingTop: 24,
  },
  leftButton: {
    width: '45%',
  },
  rightButton: {
    width: '45%',
  },
});
