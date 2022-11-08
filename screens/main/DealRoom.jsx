import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import UserHeader from '../../components/UserHeader';
import PrimaryButton from '../../components/PrimaryButton';

const DealRoom = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <UserHeader />
      <View style={styles.dealRoom}>
        <Text style={styles.text}>DealRoom</Text>
        <PrimaryButton
          title='Go to Login'
          onClick={() => navigation.navigate('Login')}
        />
      </View>
    </View>
  );
};

export default DealRoom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dealRoom: {
    paddingHorizontal: 24,
  },
  text: {
    fontSize: 35,
    textAlign: 'center',
    fontWeight: '600',
    marginVertical: 20,
  },
});
