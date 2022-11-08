import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import UserHeader from '../../components/UserHeader';
import WelcomeCard from '../../components/WelcomeCard';
import BuyingActivities from '../../components/BuyingActivities';
import SellingActivities from '../../components/SellingActivities';

const Dashboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <UserHeader />
      <ScrollView>
        <View style={styles.dashboard}>
          <WelcomeCard navigation={navigation} />
          <BuyingActivities navigation={navigation} />
          <SellingActivities navigation={navigation} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dashboard: {
    paddingHorizontal: 24,
    backgroundColor: '#fff',
    flex: 1,
  },
  text: {
    fontSize: 35,
    textAlign: 'center',
    fontWeight: '600',
    marginVertical: 20,
  },
});
