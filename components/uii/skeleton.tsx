
import { cn } from '@/lib/utils';
import * as React from 'react';
import { View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';

const Skeleton = React.forwardRef<
  React.ElementRef<typeof View>,
  React.ComponentPropsWithoutRef<typeof View>
>(({ className, ...props }, ref) => {
  const opacity = useSharedValue(1);

  React.useEffect(() => {
    opacity.value = withRepeat(withTiming(0.5, { duration: 1000 }), -1, true);
  }, [opacity]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  return (
    <Animated.View
      ref={ref}
      style={animatedStyle}
      className={cn('rounded-md bg-muted', className)}
      {...props}
    />
  );
});

Skeleton.displayName = 'Skeleton';

export { Skeleton };
