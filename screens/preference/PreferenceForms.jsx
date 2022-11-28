import { ScrollView, StyleSheet, Text } from 'react-native';
import React, { useState } from 'react';
import PreferenceLayout from '../../container/PreferenceLayout';
import PreferenceItem from '../../components/PreferenceItem';
import Toast from 'react-native-toast-message';
import {
  countryPreference,
  fundingPreference,
  industryPreference,
  regionPreference,
  revenuePreference,
  sizes,
} from '../../utils';

const preferenceData = [
  {
    heading: 'Choose the revenue criteria that you prefer',
    options: [...revenuePreference],
  },
  {
    heading: 'Choose the sectors that you prefer',
    options: [...industryPreference],
  },
  {
    heading: 'Choose the investment stage(s) that you prefer',
    options: [...fundingPreference],
  },
  {
    heading: 'Choose the region that you prefer',
    options: [...regionPreference],
  },
  {
    heading: 'Choose the country that you prefer',
    options: [...countryPreference],
  },
];

const PreferenceForms = ({ navigation }) => {
  const [activeStep, setActiveStep] = useState(1);
  const [selectedPreference, setSelectedPreference] = useState({
    revenuePreference: [],
    industryPreference: [],
    fundingPreference: [],
    regionPreference: [],
    countryPreference: [],
  });

  const handlePreferenceSelect = (type, value) => {
    setSelectedPreference((prev) => {
      if (!prev[type].includes(value)) {
        const newState = {
          ...prev,
          [type]: [...prev[type], value],
        };
        return { ...newState };
      } else {
        const newState = {
          ...prev,
          [type]: prev[type].filter((item) => item !== value),
        };
        return { ...newState };
      }
    });
  };

  const getPreferences = (activeStep) => {
    return preferenceData[activeStep - 1].options.map((item) => (
      <PreferenceItem
        name={item}
        onClick={() => handlePreferenceSelect('revenuePreference', item)}
        key={item}
        selected={selectedPreference.revenuePreference.includes(item)}
      />
    ));
  };

  const handleNext = () => {
    if (activeStep < Object.keys(selectedPreference).length) {
      setActiveStep((prev) => prev + 1);
    } else {
      console.log('Network Call and go to main container');
    }
  };
  const handleBack = () => {
    if (activeStep === 1) {
      Toast.show({
        type: 'success',
        text1: 'Already at the first form',
      });
      return;
    }
    setActiveStep((prev) => prev - 1);
  };

  return (
    <PreferenceLayout
      showNumber
      starting={activeStep}
      total={Object.keys(selectedPreference).length}
      navigation={navigation}
      primaryCTAFunction={handleNext}
      primaryCTA='Continue'
      BackArrowClick={handleBack}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.heading}>
          {preferenceData[activeStep - 1].heading}
        </Text>
        {getPreferences(activeStep)}
      </ScrollView>
    </PreferenceLayout>
  );
};

export default PreferenceForms;

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 1.1,
    marginBottom: sizes.p7,
  },
});
