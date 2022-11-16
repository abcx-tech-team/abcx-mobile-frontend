import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import FilterModal from './filter/FilterModal';
import MultiSelect from 'react-native-multiple-select';
import { useSearchKeywords } from '../hooks/masters.hooks';

const MagnifyingGlass = require('../assets/icons/search.png');
const Filter = require('../assets/icons/filter.png');

const SearchBar = ({ setQuery, setBlindProfiles, query }) => {
  const [showFilter, setShowFilter] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [searchKeywords, setSearchKeywords] = useState([]);

  const { data } = useSearchKeywords();

  useEffect(() => {
    if (data) {
      const newData = data.map((item) => ({ id: item, name: item }));
      setSearchKeywords([...newData]);
    }
  }, [data]);

  useEffect(() => {
    let strm = selectedItems.reduce((acc, item) => {
      return (acc += `${item.toLowerCase()},`);
    }, '');
    strm = strm.slice(0, strm.length - 1);
    setQuery((prev) => ({ ...prev, strm, pageNo: 1 }));
    setBlindProfiles({ hasMore: true, data: [] });
  }, [selectedItems]);

  const handleApplyFilter = (key, value) => {
    setQuery((prev) => ({ ...prev, [key]: value, pageNo: 1 }));
    setBlindProfiles({ hasMore: true, data: [] });
  };

  const handleClearFilters = () => {
    setSelectedItems([]);
    setQuery({
      pageNo: 1,
      pageSize: 10,
      ctrm: '',
      tprm: '',
      ftrm: '',
      strm: '',
    });
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
          <View style={styles.searchInput}>
            <MultiSelect
              hideTags
              items={searchKeywords}
              uniqueKey='id'
              onSelectedItemsChange={(data) => setSelectedItems(data)}
              selectedItems={selectedItems}
              selectText='Search Opportunities...'
              searchInputPlaceholderText='Search Opportunities (Try Fintech..)'
              submitButtonText='Submit'
              selectedItemTextColor='#6F0652'
              submitButtonColor='#6F0652'
              styleIndicator={{ display: 'none' }}
              styleInputGroup={{
                ...styles.searchInput,
                width: '100%',
              }}
              searchIcon={null}
              styleListContainer={{
                backgroundColor: '#fff',
                elevation: 8,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.1,
                shadowRadius: 10.65,
                height: 200,
                paddingVertical: 16,
              }}
              styleDropdownMenuSubsection={{
                backgroundColor: '#fbfbfb',
                borderBottomWidth: 0,
              }}
              hideSubmitButton
            />
          </View>
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
    height: 18,
    width: 18,
  },
  searchInput: {
    height: 40,
    width: '80%',
    position: 'relative',
    backgroundColor: '#fbfbfb',
    marginLeft: 0,
    paddingLeft: 0,
  },
});
