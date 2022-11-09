import { FlatList } from 'react-native';
import React from 'react';
import { useSearchCountry } from '../../hooks/masters.hooks';
import { RadioButton } from 'react-native-paper';

const Country = () => {
  const { data } = useSearchCountry();
  return (
    <RadioButton.Group>
      <FlatList
        data={data || []}
        renderItem={({ item }) => (
          <RadioButton.Item
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
