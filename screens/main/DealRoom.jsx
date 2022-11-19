import { ScrollView, StyleSheet, Text, View } from 'react-native';
import DealCard from '../../components/DealCard';
import AuthContainer from '../../container/AuthContainer';

const DealRoom = ({ navigation }) => {
  return (
    <AuthContainer navigation={navigation}>
      <View style={styles.container}>
        <Text style={styles.screenName}>Deal Room</Text>
        <View style={styles.tabsContainer}></View>
        <ScrollView>
          <DealCard />
        </ScrollView>
      </View>
    </AuthContainer>
  );
};

export default DealRoom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 64,
  },
  tabsContainer: {
    marginVertical: 24,
  },
  screenName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#34495E',
  },
});
