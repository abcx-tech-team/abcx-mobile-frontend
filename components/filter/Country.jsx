import { FlatList } from 'react-native';
import React, { memo } from 'react';
import { useSearchCountry } from '../../hooks/masters.hooks';
import { RadioButton } from 'react-native-paper';
import MemoizedRadioButton from '../MemoizedRadioButton';

const Country = ({ query, handleApplyFilter }) => {
  const { data } = useSearchCountry();
  return (
    <RadioButton.Group
      onValueChange={(e) => handleApplyFilter('ctrm', e)}
      value={query.ctrm}
    >
      <FlatList
        data={data || []}
        renderItem={({ item }) => (
          <MemoizedRadioButton
            value={item.country_name}
            label={item.country_name}
          />
        )}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </RadioButton.Group>
  );
};

export default Country;
