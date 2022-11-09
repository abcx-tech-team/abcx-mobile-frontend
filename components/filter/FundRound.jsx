import { FlatList } from 'react-native';
import React from 'react';
import { useSearchFundRound } from '../../hooks/masters.hooks';
import { RadioButton } from 'react-native-paper';

const FundRound = () => {
  const { data } = useSearchFundRound();
  return (
    <RadioButton.Group>
      <FlatList
        data={data || []}
        renderItem={({ item }) => (
          <RadioButton.Item
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
