import AuthContainer from '../../container/AuthContainer';
import DealList from '../DealRoom/index';

const DealRoom = ({ navigation }) => {
  return (
    <AuthContainer navigation={navigation}>
      <DealList navigation={navigation} />
    </AuthContainer>
  );
};

export default DealRoom;
