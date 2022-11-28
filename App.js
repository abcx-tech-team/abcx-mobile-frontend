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

const queryClient = new QueryClient();
export default function App() {
  const [authState, setAuthState] = useState('');
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContext.Provider
        value={{ token: authState, setState: setAuthState }}
      >
        <ConfirmationProvider>
          <View style={styles.container}>
            <NavigationContainer ref={navigationRef}>
              <Router />
            </NavigationContainer>
            <StatusBar style='dark' />
            <Toast />
          </View>
        </ConfirmationProvider>
      </AuthContext.Provider>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
