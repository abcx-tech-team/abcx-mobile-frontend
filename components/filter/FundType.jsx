import { FlatList } from 'react-native';
import React from 'react';
import { useSearchFundType } from '../../hooks/masters.hooks';
import { RadioButton } from 'react-native-paper';

const FundType = () => {
  const { data } = useSearchFundType();
  return (
    <RadioButton.Group>
      <FlatList
        data={data || []}
        renderItem={({ item }) => (
          <RadioButton.Item value={item.value} label={item.label} />
        )}
        keyExtractor={(item) => item.value}
      ></FlatList>
    </RadioButton.Group>
  );
};

export default FundType;
