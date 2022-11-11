import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import UserHeader from '../../components/UserHeader';
import WelcomeCard from '../../components/WelcomeCard';
import BuyingActivities from '../../components/BuyingActivities';
import SellingActivities from '../../components/SellingActivities';
import {
  useBuyerList,
  useLoggedInUser,
  useSellerList,
} from '../../hooks/user.hooks';
import AuthContainer from '../../container/AuthContainer';

const Dashboard = ({ navigation }) => {
  const { data: userData } = useLoggedInUser();
  const { data: buyerList } = useBuyerList();
  const { data: sellerList } = useSellerList();

  return (
    <AuthContainer navigation={navigation}>
      <View style={styles.container}>
        <UserHeader />
        <ScrollView bounces={false}>
          <View style={styles.dashboard}>
            <WelcomeCard
              navigation={navigation}
              companyName={userData?.member_id || ''}
            />
            <BuyingActivities navigation={navigation} />
            <SellingActivities navigation={navigation} />
          </View>
        </ScrollView>
      </View>
    </AuthContainer>
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
