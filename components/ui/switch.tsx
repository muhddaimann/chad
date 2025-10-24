
import { cn } from '@/lib/utils';
import * as React from 'react';
import { Switch as RNSwitch } from 'react-native';

const Switch = React.forwardRef<
  React.ElementRef<typeof RNSwitch>,
  React.ComponentPropsWithoutRef<typeof RNSwitch>
>(({ className, ...props }, ref) => {
  return (
    <RNSwitch
      ref={ref}
      className={cn(
        'ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
  );
});

Switch.displayName = 'Switch';

export { Switch };
