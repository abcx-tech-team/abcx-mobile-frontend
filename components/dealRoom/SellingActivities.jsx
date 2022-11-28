import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PrimaryButton from './PrimaryButton';
import { ScreenNames } from '../../utils';

const ImageURL = require('../assets/activities.png');

const SellingActivities = ({ navigation }) => {
  return (
    <View style={styles.sellingContainer}>
      <View style={styles.headingContainer}>
        <Text style={styles.sectionHeading}>SELLING ACTIVITY</Text>
      </View>
      <View style={styles.sellingActivities}>
        <Text style={styles.heading}>No activities yet</Text>
        <View style={styles.imageContainer}>
          <Image source={ImageURL} style={styles.image} />
        </View>
        <PrimaryButton
          title='Explore Opportunities Now'
          onClick={() => navigation.navigate(ScreenNames.explore)}
        />
      </View>
    </View>
  );
};

export default SellingActivities;

const styles = StyleSheet.create({
  sellingContainer: {
    paddingBottom: 150,
  },
  headingContainer: {
    marginVertical: 24,
  },
  sectionHeading: {
    fontSize: 20,
    fontWeight: '600',
    letterSpacing: 2,
  },
  sellingActivities: {
    padding: 24,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 10.84,

    elevation: 5,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
  },
  image: {
    resizeMode: 'contain',
    marginVertical: 40,
  },
  imageContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
