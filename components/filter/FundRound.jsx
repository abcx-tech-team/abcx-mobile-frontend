import { FlatList } from 'react-native';
import React from 'react';
import { useSearchFundRound } from '../../hooks/masters.hooks';
import { RadioButton } from 'react-native-paper';
import MemoizedRadioButton from '../MemoizedRadioButton';

const FundRound = ({ query, handleApplyFilter }) => {
  const { data } = useSearchFundRound();
  return (
    <RadioButton.Group
      onValueChange={(e) => handleApplyFilter('ftrm', e)}
      value={query.ftrm}
    >
      <FlatList
        data={data || []}
        renderItem={({ item }) => (
          <MemoizedRadioButton
            value={item.funding_round}
            label={item.funding_round}
          />
        )}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </RadioButton.Group>
  );
};

export default FundRound;
