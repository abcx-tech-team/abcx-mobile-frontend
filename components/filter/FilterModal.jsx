import { StyleSheet, Text, View, Modal, Pressable, Image } from 'react-native';
import React, { useState } from 'react';
import PrimaryButton from '../PrimaryButton';
import FundRound from './FundRound';
import FundType from './FundType';
import Country from './Country';
import SecondaryButton from '../SecondaryButton';

const Cross = require('../../assets/icons/cross.png');

const Filters = ['Country', 'Funding Type', 'Last Round'];

const FilterModal = ({
  showFilter,
  setShowFilter,
  handleApplyFilter,
  handleClearFilters,
  query,
}) => {
  const [filterType, setFilterType] = useState('Country');
  return (
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
              <Country handleApplyFilter={handleApplyFilter} query={query} />
            ) : filterType === 'Funding Type' ? (
              <FundType handleApplyFilter={handleApplyFilter} query={query} />
            ) : (
              <FundRound handleApplyFilter={handleApplyFilter} query={query} />
            )}
          </View>
        </View>
      </View>
      <View style={styles.actionButtons}>
        <View style={styles.rightButton}>
          <PrimaryButton
            onClick={() => setShowFilter(false)}
            title='Apply Filters'
            noLoader
          />
        </View>
        <View style={styles.leftButton}>
          <SecondaryButton
            onClick={handleClearFilters}
            title='Clear Filters'
            noLoader
          />
        </View>
      </View>
    </Modal>
  );
};

export default FilterModal;

const styles = StyleSheet.create({
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
  actionButtons: {
    backgroundColor: '#fff',
    width: '100%',
    marginBottom: 40,
    paddingHorizontal: 24,
    paddingTop: 24,
    borderTopWidth: 1,
    borderTopColor: '#efefef',
  },
  rightButton: {
    marginBottom: 16,
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
});
