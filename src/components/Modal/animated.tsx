import React, { useCallback, useEffect, useState } from 'react';
import { Animated, StyleSheet, Dimensions } from 'react-native';
const { height } = Dimensions.get('window');

interface ModalProps {
  show: boolean;
}

const AnimatedModal: React.FC<ModalProps> = ({ children, show }) => {
  const [state] = useState({
    opacity: new Animated.Value(0),
    container: new Animated.Value(height),
    modal: new Animated.Value(height),
  });
  const openModal = useCallback(() => {
    Animated.sequence([
      Animated.timing(state.container, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(state.opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.spring(state.modal, {
        toValue: 0,
        bounciness: 5,
        useNativeDriver: true,
      }),
    ]).start();
  }, [state.container, state.opacity, state.modal]);

  useEffect(() => {
    show && openModal();
  }, [show, openModal]);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: state.opacity,
          transform: [{ translateY: state.container }],
        },
      ]}>
      <Animated.View
        style={[
          styles.container,
          {
            transform: [{ translateY: state.modal }],
          },
        ]}>
        {children}
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    zIndex: 99,
  },
});

export default AnimatedModal;
