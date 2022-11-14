import { Button, StyleSheet, Text } from 'react-native';
import React, { useState } from 'react';
import PreferenceLayout from '../../container/PreferenceLayout';
import PreferenceItem from '../../components/PreferenceItem';

const revenuePreference = [
  'Pre-Revenue',
  '$0-1M',
  '$1-10M',
  '$10-25M',
  '$25M and above',
];
const industryPreference = [
  'Fintech',
  'AdTech',
  'AgroTech',
  'Artificial Intelligence',
  'Technology',
];
const fundingPreference = [
  'Seed to Series A',
  'Series A and Above',
  'Pre-Seed',
  'Early Investor',
  'Any Size',
];

const preferenceTypes = ['', '', ''];

const PreferenceForms = ({ navigation }) => {
  const [activeStep, setActiveStep] = useState(1);
  const [selectedPreference, setSelectedPreference] = useState({
    revenuePreference: [],
    industryPreference: [],
    fundingPreference: [],
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
    switch (activeStep) {
      case 1:
        return revenuePreference.map((item) => (
          <PreferenceItem
            name={item}
            onClick={() => handlePreferenceSelect('revenuePreference', item)}
            key={item}
            selected={selectedPreference.revenuePreference.includes(item)}
          />
        ));
      case 2:
        return industryPreference.map((item) => (
          <PreferenceItem
            name={item}
            onClick={() => handlePreferenceSelect('industryPreference', item)}
            key={item}
            selected={selectedPreference.industryPreference.includes(item)}
          />
        ));
      case 3:
        return fundingPreference.map((item) => (
          <PreferenceItem
            name={item}
            onClick={() => handlePreferenceSelect('fundingPreference', item)}
            key={item}
            selected={selectedPreference.fundingPreference.includes(item)}
          />
        ));
      default:
        return null;
    }
  };

  const handleNext = () => {
    if (activeStep < 3) {
      setActiveStep((prev) => prev + 1);
    } else {
      console.log('Network Call and go to main container');
    }
  };
  const handleBack = () => {
    if (activeStep === 1) {
      return;
    }
    setActiveStep((prev) => prev - 1);
  };

  return (
    <PreferenceLayout
      showNumber
      starting={activeStep}
      total={3}
      navigation={navigation}
      primaryCTAFunction={handleNext}
      primaryCTA='Continue'
      BackArrowClick={handleBack}
    >
      <Text style={styles.heading}>What do you prefer</Text>
      {getPreferences(activeStep)}
    </PreferenceLayout>
  );
};

export default PreferenceForms;

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    marginBottom: 56,
  },
});
