import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { ScreenNames } from '../utils';

const Office = require('../assets/dashboard.png');

const WelcomeCard = ({ navigation, companyName }) => {
  return (
    <View style={styles.welcomeCard}>
      <View style={styles.textContainer}>
        <Text style={styles.heading}>
          Welcome{'\n'}
          {companyName} !
        </Text>
        <Text style={styles.subHeading}>
          You will be able to list your companies for selling, and explore
          opportunities.
        </Text>
        <Pressable
          onPress={() => navigation.navigate(ScreenNames.explore)}
          style={styles.goContainer}
        >
          <Text style={styles.text}>Go Now</Text>
        </Pressable>
      </View>
      <View style={styles.imageContainer}>
        <Image source={Office} style={styles.image} />
      </View>
    </View>
  );
};

export default WelcomeCard;

const styles = StyleSheet.create({
  welcomeCard: {
    backgroundColor: '#FEF8FC',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 24,
    overflow: 'hidden',
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: '55%',
    padding: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subHeading: {
    fontSize: 12,
    color: 'gray',
  },
  imageContainer: {
    width: '55%',
    height: '100%',
    transform: [{ skewX: '-10deg' }],
    borderLeftColor: '#F4E8F1',
    borderLeftWidth: Platform.OS === 'ios' ? 20 : 0,
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    flex: 1,
  },
  goContainer: {
    marginTop: 8,
  },
  text: {
    color: '#6F0652',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
