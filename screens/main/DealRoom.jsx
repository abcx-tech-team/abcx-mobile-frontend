import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import UserHeader from '../../components/UserHeader';
import PrimaryButton from '../../components/PrimaryButton';
import { removeStorage } from '../../utils/asyncStorage';
import { ScreenNames, USER_TOKEN_ID_KEY } from '../../utils';
import AuthContainer from '../../container/AuthContainer';

const DealRoom = ({ navigation }) => {
  return (
    <AuthContainer navigation={navigation}>
      <View style={styles.container}>
        <UserHeader />
        <View style={styles.dealRoom}>
          <Text style={styles.text}>DealRoom</Text>
          <PrimaryButton
            title='LogOut'
            onClick={() => {
              removeStorage(USER_TOKEN_ID_KEY);
              navigation.navigate(ScreenNames.login);
            }}
          />
        </View>
      </View>
    </AuthContainer>
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
