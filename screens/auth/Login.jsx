import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import LogoHeader from '../../components/common/LogoHeader';
import LoginView from '../../components/LoginView';
import { colors, ScreenNames, USER_TOKEN_ID_KEY } from '../../utils';

const Login = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <LogoHeader />
        <LoginView navigation={navigation} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.backdrop,
  },
});
