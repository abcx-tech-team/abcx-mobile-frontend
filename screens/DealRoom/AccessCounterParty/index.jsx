import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import OpenDataRoomCard from '../../../components/dealRoom/OpenDataRoomCard';
import { colors, sizes } from '../../../utils';
import DealScreenHeader from '../../../components/dealRoom/DealScreenHeader';
import { Entypo } from '@expo/vector-icons';
import PitchDeck from '../../../components/dealRoom/PitchDeck';

const AccessCounterParty = ({ navigation }) => {
  return (
    <View style={styles.accessCounterPartyContainer}>
      <DealScreenHeader
        screenName='Counterpart Information'
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.border} />
      <View style={styles.filesContainer}>
        <View style={styles.filesRow}>
          <Text style={styles.fileTitle}>Files</Text>
          <Entypo name='chevron-down' size={24} color='black' />
        </View>
        <PitchDeck />
      </View>
      <OpenDataRoomCard />
    </View>
  );
};

export default AccessCounterParty;

const styles = StyleSheet.create({
  accessCounterPartyContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  border: {
    borderWidth: 1,
    borderColor: colors.text20,
    marginHorizontal: sizes.p2,
  },
  filesContainer: {
    paddingHorizontal: sizes.p4,
    marginBottom: sizes.p4,
  },
  filesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  fileTitle: {
    fontSize: 16,
    color: colors.text60,
    fontWeight: 'bold',
  },
});
