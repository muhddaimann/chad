
import { cn } from '@/lib/utils';
import * as React from 'react';
import { View } from 'react-native';

const Progress = React.forwardRef<
  React.ElementRef<typeof View>,
  React.ComponentPropsWithoutRef<typeof View> & { value?: number }
>(({ className, value, ...props }, ref) => {
  return (
    <View
      ref={ref}
      className={cn('relative h-4 w-full overflow-hidden rounded-full bg-secondary', className)}
      {...props}
    >
      <View
        className="h-full w-full flex-1 bg-primary transition-all"
        style={{ transform: [{ translateX: `${(value || 0) - 100}%` }] }}
      />
    </View>
  );
});
Progress.displayName = 'Progress';

export { Progress };
