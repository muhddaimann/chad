
import { cn } from '@/lib/utils';
import * as React from 'react';
import { ActivityIndicator } from 'react-native';

const Spinner = React.forwardRef<
  React.ElementRef<typeof ActivityIndicator>,
  React.ComponentPropsWithoutRef<typeof ActivityIndicator>
>(({ className, ...props }, ref) => {
  return <ActivityIndicator ref={ref} className={cn('text-primary', className)} {...props} />;
});

Spinner.displayName = 'Spinner';

export { Spinner };
