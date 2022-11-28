import { StyleSheet, View } from 'react-native';
import Dashboard from '../screens/main/Dashboard';
import Explore from '../screens/main/Explore';
import DealRoom from '../screens/main/DealRoom';
import { ScreenNames } from '../utils';
import BottomTab from '../components/common/BottomTab';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const DashboardActive = require('../assets/icons/pie_active.png');
const DashboardInActive = require('../assets/icons/pie.png');
const DealRoomActive = require('../assets/icons/bag_active.png');
const DealRoomInActive = require('../assets/icons/bag.png');
const ExploreActive = require('../assets/icons/search_active.png');
const ExploreInActive = require('../assets/icons/search.png');

const Tab = createBottomTabNavigator();

const MainContainer = () => {
  return (
    <View style={styles.mainAppContainer}>
      <Tab.Navigator
        initialRouteName={ScreenNames.dashboard}
        screenOptions={() => ({
          tabBarActiveTintColor: '#6F0652',
          tabBarStyle: {
            ...styles.tabBarContainer,
          },
          headerShown: false,
          tabBarShowLabel: false,
        })}
      >
        <Tab.Screen
          name={ScreenNames.dashboard}
          component={Dashboard}
          options={{
            tabBarIcon: ({ focused }) => (
              <BottomTab
                focused={focused}
                activeImage={DashboardActive}
                inActiveImage={DashboardInActive}
                label='DashBoard'
              />
            ),
          }}
        />
        <Tab.Screen
          name={ScreenNames.explore}
          component={Explore}
          options={{
            tabBarIcon: ({ focused }) => (
              <BottomTab
                focused={focused}
                activeImage={ExploreActive}
                inActiveImage={ExploreInActive}
                label='Explore'
              />
            ),
          }}
        />
        <Tab.Screen
          name={ScreenNames.dealRoom}
          component={DealRoom}
          options={{
            tabBarIcon: ({ focused }) => (
              <BottomTab
                focused={focused}
                activeImage={DealRoomActive}
                inActiveImage={DealRoomInActive}
                label='Deal Room'
              />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default MainContainer;

const styles = StyleSheet.create({
  tabBarContainer: {
    position: 'absolute',
    bottom: 25,
    left: 10,
    right: 10,
    borderRadius: 15,
    height: 90,
    elevation: 8,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    zIndex: 100,
    borderTopWidth: 0,
    paddingBottom: 0,
  },
  mainAppContainer: {
    flex: 1,
  },
});
