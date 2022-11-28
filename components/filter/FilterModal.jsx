import { StyleSheet, Text, View, Modal, Pressable, Image } from 'react-native';
import React, { useState } from 'react';
import PrimaryButton from '../common/PrimaryButton';
import FundRound from './FundRound';
import FundType from './FundType';
import Country from './Country';
import SecondaryButton from '../common/SecondaryButton';
import { colors, sizes } from '../../utils';

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
          <Pressable
            onPress={() => setShowFilter(false)}
            style={({ pressed }) => [
              styles.closeModal,
              {
                backgroundColor: pressed ? colors.text20 : colors.white,
              },
            ]}
          >
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
    paddingHorizontal: sizes.p3,
    flex: 1,
  },
  action: {
    marginBottom: sizes.p2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    fontSize: sizes.p3,
    fontWeight: 'bold',
    marginLeft: sizes.p3,
  },
  actionButtons: {
    backgroundColor: colors.white,
    width: '100%',
    marginBottom: sizes.p5,
    paddingHorizontal: sizes.p3,
    paddingTop: sizes.p3,
    borderTopWidth: 1,
    borderTopColor: colors.borderColor,
  },
  rightButton: {
    marginBottom: sizes.p2,
  },
  filterItem: {
    paddingTop: sizes.p2,
  },
  filterText: {
    textAlign: 'center',
    marginBottom: sizes.p2,
  },
  activeFilterItem: {
    backgroundColor: colors.text20,
  },
  gradientBackground: {
    height: 1,
    backgroundColor: colors.text20,
  },
  mainFilter: {
    flexDirection: 'row',
    flex: 1,
  },
  left: {
    width: '40%',
    backgroundColor: colors.grayBackground,
  },
  right: {
    width: '60%',
    paddingLeft: sizes.p2,
  },
  closeModal: {
    height: sizes.p5,
    width: sizes.p5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
});
