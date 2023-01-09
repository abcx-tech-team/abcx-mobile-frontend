import { useEffect, useState } from 'react';
import { Animated, Button, StyleSheet } from 'react-native';

const ModalFilter = () => {
  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
    return () => {
      animation.setValue(0);
    };
  }, [animation]);
  const animatedStyle = {
    ...styles.filter,
    opacity: animation,
  };
  return <Animated.View style={animatedStyle}></Animated.View>;
};

export default ModalFilter;

const styles = StyleSheet.create({
  filter: {
    position: 'absolute',
    height: '110%',
    width: '100%',
    backgroundColor: 'rgba(32, 32, 32, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
