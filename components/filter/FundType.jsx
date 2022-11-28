import { FlatList } from 'react-native';
import React, { memo } from 'react';
import { useSearchFundType } from '../../hooks/masters.hooks';
import { RadioButton } from 'react-native-paper';
import MemoizedRadioButton from '../common/MemoizedRadioButton';

const FundType = ({ query, handleApplyFilter }) => {
  const { data } = useSearchFundType();
  return (
    <RadioButton.Group
      onValueChange={(e) => handleApplyFilter('tprm', e)}
      value={query.tprm}
    >
      <FlatList
        data={data || []}
        renderItem={({ item }) => (
          <MemoizedRadioButton value={item.value} label={item.label} />
        )}
        keyExtractor={(item) => item.value}
      ></FlatList>
    </RadioButton.Group>
  );
};

export default FundType;
