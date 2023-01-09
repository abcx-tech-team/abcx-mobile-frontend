import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Toast from 'react-native-toast-message';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthContext } from './context/authContext';
import { useState } from 'react';
import { navigationRef } from './utils/RootNavigation';
import Router from './Router';
import { ConfirmationProvider } from './context/ModalContext';
import { DealContext, TabListContext } from './context/dealContext';
import { usePreventScreenCapture } from 'expo-screen-capture';
import Notification from './components/Notification';

const queryClient = new QueryClient();
export default function MyApp() {
  usePreventScreenCapture();
  const [authState, setAuthState] = useState('');
  const [deal, setDeal] = useState({});
  const [tabList, setTabList] = useState([]);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContext.Provider
        value={{ token: authState, setState: setAuthState }}
      >
        <DealContext.Provider value={{ deal, setDeal }}>
          <TabListContext.Provider value={{ tabList, setTabList }}>
            <ConfirmationProvider>
              <View style={styles.container}>
                <NavigationContainer ref={navigationRef}>
                  <Router />
                </NavigationContainer>
                <Notification />
                <StatusBar style='dark' />
                <Toast />
              </View>
            </ConfirmationProvider>
          </TabListContext.Provider>
        </DealContext.Provider>
      </AuthContext.Provider>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
