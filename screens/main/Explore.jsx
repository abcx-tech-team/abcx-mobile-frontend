import AuthContainer from '../../container/AuthContainer';
import ExploreList from '../Explore/index';

const Explore = ({ navigation }) => {
  return (
    <AuthContainer navigation={navigation}>
      <ExploreList navigation={navigation} />
    </AuthContainer>
  );
};

export default Explore;
