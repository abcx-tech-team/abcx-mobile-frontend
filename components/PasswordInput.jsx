import { HelperText, TextInput } from 'react-native-paper';
import { Controller, useFormContext } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';

const CustomPasswordInput = ({ placeholder, label, name, ...rest }) => {
  const { control } = useFormContext();
  const [show, setShow] = useState(false);
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, value, onBlur },
        fieldState: { error },
      }) => (
        <View>
          <TextInput
            placeholder={placeholder}
            label={label}
            mode='outlined'
            onChangeText={onChange}
            value={value}
            onBlur={onBlur}
            error={!!error}
            theme={{
              colors: {
                text: '#6F0652',
                primary: '#6F0652',
                background: '#fff',
              },
              roundness: 12,
            }}
            style={styles.textInput}
            secureTextEntry={!show}
            right={
              <TextInput.Icon
                icon={show ? 'eye-off' : 'eye'}
                onPress={() => {
                  setShow((prev) => !prev);
                }}
                forceTextInputFocus={false}
                style={styles.icon}
              />
            }
            {...rest}
          />
          <HelperText style={styles.error} type='error' visible={!!error}>
            {error?.message || ''}
          </HelperText>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  error: {
    marginTop: 4,
    fontSize: 14,
    marginBottom: 8,
  },
  textInput: {
    height: 40,
    fontSize: 14,
  },
  icon: {
    height: 40,
    width: 40,
    marginTop: 14,
  },
});

export default CustomPasswordInput;
