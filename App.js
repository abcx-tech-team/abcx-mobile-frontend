import MaskedView from '@react-native-masked-view/masked-view';
import { useEffect, useMemo, useState } from 'react';
import { Animated, View, StyleSheet } from 'react-native';
import MyApp from './MyApp';
import { colors } from './utils';

export default function App() {
  const [loadingProgress] = useState(new Animated.Value(0));
  const [animationDone, setAnimationDone] = useState(false);

  const fullScreenBackgroundLayer = useMemo(() => {
    return animationDone ? null : (
      <View style={[StyleSheet.absoluteFill, styles.backgroundStyle]} />
    );
  }, [animationDone]);

  const fullScreenWhiteLayer = useMemo(() => {
    return animationDone ? null : (
      <View style={[StyleSheet.absoluteFill, styles.fullScreenWhiteLayer]} />
    );
  }, [animationDone]);

  useEffect(() => {
    Animated.timing(loadingProgress, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      setAnimationDone(true);
    });
  }, []);

  const opacityClearToVisible = {
    opacity: loadingProgress.interpolate({
      inputRange: [0, 15, 30],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp',
    }),
  };

  const imageScale = {
    transform: [
      {
        scale: loadingProgress.interpolate({
          inputRange: [0, 10, 100],
          outputRange: [1, 0.8, 70],
        }),
      },
    ],
  };

  const appScale = {
    transform: [
      {
        scale: loadingProgress.interpolate({
          inputRange: [0, 7, 100],
          outputRange: [1.1, 1.05, 1],
        }),
      },
    ],
  };

  return (
    <View style={styles.fullScreen}>
      {fullScreenBackgroundLayer}
      <MaskedView
        style={{ flex: 1 }}
        maskElement={
          <View style={styles.centeredFullScreen}>
            <Animated.Image
              style={[styles.maskImageStyle, imageScale]}
              source={require('./assets/abcx_x.png')}
            />
          </View>
        }
      >
        {fullScreenWhiteLayer}
        <Animated.View style={[{ flex: 1 }, appScale, opacityClearToVisible]}>
          <MyApp />
        </Animated.View>
      </MaskedView>
    </View>
  );
}

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
  centeredFullScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  maskImageStyle: {
    height: 150,
    width: 150,
  },
  fullScreenWhiteLayer: {
    backgroundColor: colors.white,
  },
  backgroundStyle: {
    backgroundColor: colors.primary,
  },
});
