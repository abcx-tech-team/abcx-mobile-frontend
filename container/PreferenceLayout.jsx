import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import PreferenceButtons from '../components/PreferenceButtons';
import { colors, sizes } from '../utils';

const Back = require('../assets/icons/back.png');

const PreferenceLayout = ({
  showNumber,
  starting,
  total,
  children,
  primaryCTA,
  secondaryCTA,
  navigation,
  primaryCTAFunction,
  BackArrowClick,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Pressable
          onPress={BackArrowClick}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? colors.text20 : colors.white,
            },
            styles.back,
          ]}
        >
          <Image source={Back} />
        </Pressable>
        {showNumber ? (
          <View style={styles.numberContainer}>
            <Text style={styles.number}>
              {starting}/{total}
            </Text>
          </View>
        ) : null}
      </View>
      <View style={styles.main}>{children}</View>
      <PreferenceButtons
        primaryCTA={primaryCTA}
        secondaryCTA={secondaryCTA}
        navigation={navigation}
        primaryCTAFunction={primaryCTAFunction}
      />
    </View>
  );
};

export default PreferenceLayout;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  back: {
    height: sizes.p5,
    width: sizes.p5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  topBar: {
    paddingTop: sizes.p8,
    paddingBottom: sizes.p4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: sizes.p3,
  },
  number: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  main: {
    flex: 1,
    paddingHorizontal: sizes.p3,
  },
});
