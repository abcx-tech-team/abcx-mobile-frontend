import { HelperText, TextInput } from 'react-native-paper';
import { Controller, useFormContext } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';

const CustomTextInput = ({ placeholder, label, name, ...rest }) => {
  const { control } = useFormContext();
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
            style={{ height: 40, fontSize: 14 }}
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
});

export default CustomTextInput;
