import React, { useEffect, useRef } from 'react';
import { Animated, View, Text as RNText } from 'react-native';
import { cn } from '@/lib/utils';

type ToastProps = {
  message: string;
  type?: 'default' | 'success' | 'error' | 'warning';
  duration?: number;
};

export function Toast({ message, type = 'default', duration = 3000 }: ToastProps) {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(opacity, { toValue: 1, duration: 250, useNativeDriver: true }),
        Animated.timing(translateY, { toValue: 0, duration: 250, useNativeDriver: true }),
      ]),
      Animated.delay(duration),
      Animated.parallel([
        Animated.timing(opacity, { toValue: 0, duration: 250, useNativeDriver: true }),
        Animated.timing(translateY, { toValue: 20, duration: 250, useNativeDriver: true }),
      ]),
    ]).start();
  }, [opacity, translateY, duration]);

  const bgColors = {
    default: 'bg-gray-800',
    success: 'bg-green-600',
    error: 'bg-red-600',
    warning: 'bg-yellow-600',
  };

  return (
    <View
      pointerEvents="none"
      className="absolute bottom-10 left-0 right-0 z-50 items-center px-4"
    >
      <Animated.View
        style={{
          opacity,
          transform: [{ translateY }],
        }}
        className={cn(
          'w-full max-w-sm rounded-lg px-4 py-3 shadow-lg',
          bgColors[type],
        )}
      >
        <RNText className="text-center text-white text-base">{message}</RNText>
      </Animated.View>
    </View>
  );
}
