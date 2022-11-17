import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import UserHeader from '../../components/UserHeader';
import AuthContainer from '../../container/AuthContainer';
import DashboardActivities from '../../components/DashboardActivities';
import DashboardInviteCard from '../../components/DashboardInviteCard';
import DashboardBookCall from '../../components/DashboardBookCall';
import DashboardNumbers from '../../components/DashboardNumbers';
import DashboardAccordionContainer from '../../components/DashboardAccordionContainer';

const Dashboard = ({ navigation }) => {
  return (
    <AuthContainer navigation={navigation}>
      <View style={styles.container}>
        <UserHeader />
        <View style={styles.dashboard}>
          <ScrollView bounces={false} style={styles.scrollView}>
            <DashboardActivities />
            <DashboardInviteCard />
            <DashboardNumbers />
            <DashboardAccordionContainer />
            <DashboardBookCall />
          </ScrollView>
        </View>
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
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: Platform.OS === 'ios' ? 118 : 30,
  },
  scrollView: {
    paddingHorizontal: 24,
  },
  text: {
    fontSize: 35,
    textAlign: 'center',
    fontWeight: '600',
    marginVertical: 20,
  },
});
