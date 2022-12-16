import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TextInput } from 'react-native-paper';
import dayjs from 'dayjs';
import { colors, sizes } from '../../utils';
import { AntDesign } from '@expo/vector-icons';
import { useConfirmation } from '../../context/ModalContext';
import MeetingInvitation from '../modals/MeetingInvitation';
import ButtonPair from '../common/ButtonPair';

const CallSetUpForm = () => {
  const confirmation = useConfirmation();

  const handleDateSelect = async () => {
    try {
      console.log('Here');
      await confirmation({ Component: MeetingInvitation });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.setUpForm}>
      <View style={styles.setUpFormContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.scrollContainer}>
            <TextInput
              mode='outlined'
              placeholder='Meeting Title'
              label='Meeting Title'
              value='Intro Call Buyer x Seller'
              theme={{
                colors: {
                  text: colors.primary,
                  primary: colors.primary,
                  background: colors.white,
                },
                roundness: 12,
              }}
              style={{ marginTop: sizes.p3 }}
            />
            <View style={styles.dateSelectContainer}>
              <View style={styles.dateSelect}>
                <View style={styles.labelContainer}>
                  <Text style={styles.labelText}>Select Date</Text>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <View style={styles.dateContainer}>
                    {Array(5)
                      .fill(1)
                      .map((_, index) => (
                        <Pressable style={[styles.date]} key={index}>
                          <Text style={styles.dateMonth}>
                            {dayjs()
                              .add(index + 1, 'day')
                              .format('D MMM')}
                          </Text>
                          <View style={styles.divider} />
                          <Text style={styles.dateMonth}>
                            {dayjs()
                              .add(index + 1, 'day')
                              .format('ddd')}
                          </Text>
                        </Pressable>
                      ))}
                    <Pressable style={styles.date} onPress={handleDateSelect}>
                      <Text style={styles.dataSelect}>Other</Text>
                    </Pressable>
                  </View>
                </ScrollView>
              </View>
            </View>
            <View style={styles.timeSelectContainer}>
              <View style={styles.dateSelect}>
                <View style={styles.labelContainer}>
                  <Text style={styles.labelText}>Select Time (IST)</Text>
                </View>
                <View style={styles.timeSelect}>
                  <View style={styles.timeForm}>
                    <Text style={styles.timeLabel}>From</Text>
                    <Text style={styles.timeValue}>1:00 PM</Text>
                  </View>
                  <AntDesign name='right' size={24} color='black' />
                  <View style={styles.timeTo}>
                    <Text style={styles.timeLabel}>To</Text>
                    <Text style={styles.timeValue}>2:00 PM</Text>
                  </View>
                </View>
              </View>
            </View>
            <TextInput
              mode='outlined'
              placeholder='Meeting Venue'
              label='Meeting Venue'
              value='Google Meet Link (sent upon confirmation)'
              theme={{
                colors: {
                  text: colors.primary,
                  primary: colors.primary,
                  background: colors.white,
                },
                roundness: 12,
              }}
              style={{ marginTop: sizes.p3 }}
            />
          </View>
        </ScrollView>
      </View>
      <ButtonPair
        primaryCTA='Continue'
        secondaryCTA='Go Back'
        primaryCTAFunction={handleDateSelect}
        secondaryCTAFunction={() => navigation.goBack()}
      />
    </View>
  );
};

export default CallSetUpForm;

const styles = StyleSheet.create({
  setUpForm: {
    flex: 1,
  },
  setUpFormContainer: {
    paddingHorizontal: sizes.p2,
    flex: 1,
  },
  dateSelect: {
    borderColor: colors.text20,
    borderWidth: 1,
    marginTop: 50,
    borderRadius: 16,
    padding: sizes.p2,
    paddingBottom: 24,
  },
  labelContainer: {
    transform: [{ translateX: 10 }, { translateY: -27 }],
    flexDirection: 'row',
  },
  labelText: {
    fontSize: 16,
    paddingHorizontal: sizes.p1,
    fontWeight: '600',
    backgroundColor: colors.white,
  },
  dateContainer: {
    flexDirection: 'row',
  },
  date: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: sizes.p2,
    marginRight: sizes.p2,
    padding: sizes.p2,
    width: sizes.p9,
  },
  divider: {
    height: sizes.p4,
    backgroundColor: colors.primary,
    width: 1,
    marginVertical: 8,
  },
  dateMonth: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  dataSelect: {
    fontSize: 12,
    fontWeight: '600',
  },
  timeSelect: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    transform: [{ translateY: -10 }],
  },
  timeLabel: {
    fontSize: 14,
    color: colors.text60,
    marginBottom: sizes.p1,
  },
  timeValue: {
    fontSize: 18,
    fontWeight: '600',
  },
  scrollContainer: {
    marginBottom: sizes.p2,
  },
});
