import PreferenceForms from './screens/preference/PreferenceForms';
import { ScreenNames } from './utils';
import MainContainer from './container/MainContainer';
import Introduction from './screens/Introduction';
import PreferenceIntroduction from './screens/preference/Introduction';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/auth/Login';
import ResetPassword from './screens/auth/ResetPassword';
import BlindProfile from './screens/Explore/BlindProfile';

const StackScreens = [
  {
    name: ScreenNames.introduction,
    component: Introduction,
  },
  {
    name: ScreenNames.login,
    component: Login,
  },
  {
    name: ScreenNames.resetPassword,
    component: ResetPassword,
  },
  {
    name: ScreenNames.main,
    component: MainContainer,
  },
  {
    name: ScreenNames.preferenceIntroduction,
    component: PreferenceIntroduction,
  },
  {
    name: ScreenNames.preferenceForms,
    component: PreferenceForms,
  },
  {
    name: ScreenNames.blindProfile,
    component: BlindProfile,
  },
];

const Stack = createNativeStackNavigator();
const Router = () => {
  return (
    <Stack.Navigator
      initialRouteName={ScreenNames.introduction}
      screenOptions={{
        headerShown: false,
      }}
    >
      {StackScreens.map((screen) => (
        <Stack.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{ gestureEnabled: false }}
        />
      ))}
    </Stack.Navigator>
  );
};

export default Router;
