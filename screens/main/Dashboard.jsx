import { ScrollView, StyleSheet, View } from 'react-native';
import UserHeader from '../../components/common/UserHeader';
import AuthContainer from '../../container/AuthContainer';
import DashboardActivities from '../../components/dashboard/DashboardActivities';
import DashboardInviteCard from '../../components/dashboard/DashboardInviteCard';
import DashboardBookCall from '../../components/dashboard/DashboardBookCall';
import DashboardNumbers from '../../components/dashboard/DashboardNumbers';
import DashboardAccordionContainer from '../../components/dashboard/DashboardAccordionContainer';
import { colors, sizes } from '../../utils';
import ModalFilter from '../../components/common/ModalFilter';

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
    backgroundColor: colors.white,
    paddingBottom: Platform.OS === 'ios' ? 118 : 30,
  },
  scrollView: {
    paddingHorizontal: sizes.p2,
  },
});
