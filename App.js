import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { ScreenNames } from './utils';
import MainContainer from './container/MainContainer';
import Introduction from './screens/Introduction';
import PreferenceIntroduction from './screens/preference/Introduction';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/auth/Login';
import ResetPassword from './screens/auth/ResetPassword';
import BlindProfile from './screens/main/BlindProfile';
import Toast from 'react-native-toast-message';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PreferenceForms from './screens/preference/PreferenceForms';

const Stack = createNativeStackNavigator();

const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <View style={styles.container}>
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
            <Stack.Screen
              name={ScreenNames.login}
              component={Login}
              options={{ gestureEnabled: false }}
            />
            <Stack.Screen
              name={ScreenNames.resetPassword}
              component={ResetPassword}
            />
            <Stack.Screen
              name={ScreenNames.main}
              component={MainContainer}
              options={{ gestureEnabled: false }}
            />
            <Stack.Screen
              name={ScreenNames.blindProfile}
              component={BlindProfile}
            />
            <Stack.Screen
              name={ScreenNames.preferenceIntroduction}
              component={PreferenceIntroduction}
              options={{ gestureEnabled: false }}
            />
            <Stack.Screen
              name={ScreenNames.preferenceForms}
              component={PreferenceForms}
              options={{ gestureEnabled: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style='dark' />
        <Toast />
      </View>
    </QueryClientProvider>
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
