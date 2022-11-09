import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { ScreenNames } from './utils';
import MainContainer from './container/MainContainer';
import Introduction from './screens/Introduction';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/auth/Login';
import ResetPassword from './screens/auth/ResetPassword';
import BriefProfile from './screens/main/BriefProfile';
import Toast from 'react-native-toast-message';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <Toast />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={ScreenNames.introduction}
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name={ScreenNames.introduction}
            component={Introduction}
          />
          <Stack.Screen name={ScreenNames.login} component={Login} />
          <Stack.Screen
            name={ScreenNames.resetPassword}
            component={ResetPassword}
          />
          <Stack.Screen name={ScreenNames.main} component={MainContainer} />
          <Stack.Screen
            name={ScreenNames.briefProfile}
            component={BriefProfile}
          />
        </Stack.Navigator>
      </NavigationContainer>

      <StatusBar style='dark' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  a: {
    backgroundColor: '#895545',
    flex: 1,
  },
  b: {
    flex: 2,
    backgroundColor: '#123540',
  },
  c: {
    flex: 1,
    backgroundColor: '#323568',
  },
});
