import React, { memo } from 'react';
import { RadioButton } from 'react-native-paper';

// don't FIXME: just for extra safety
const MemoizedRadioButton = ({ value, label }) => {
  return <RadioButton.Item value={value} label={label} />;
};

export default memo(MemoizedRadioButton);
