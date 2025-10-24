
import { cn } from '@/lib/utils';
import * as React from 'react';
import { Text, View } from 'react-native';

const EmptyState = React.forwardRef<
  React.ElementRef<typeof View>,
  React.ComponentPropsWithoutRef<typeof View>
>(({ className, ...props }, ref) => (
  <View
    ref={ref}
    className={cn('flex items-center justify-center p-6', className)}
    {...props}
  />
));
EmptyState.displayName = 'EmptyState';

const EmptyStateIcon = React.forwardRef<
  React.ElementRef<typeof View>,
  React.ComponentPropsWithoutRef<typeof View>
>(({ className, ...props }, ref) => (
  <View ref={ref} className={cn('mb-4', className)} {...props} />
));
EmptyStateIcon.displayName = 'EmptyStateIcon';

const EmptyStateTitle = React.forwardRef<
  React.ElementRef<typeof Text>,
  React.ComponentPropsWithoutRef<typeof Text>
>(({ className, ...props }, ref) => (
  <Text
    ref={ref}
    className={cn('text-lg font-semibold text-foreground', className)}
    {...props}
  />
));
EmptyStateTitle.displayName = 'EmptyStateTitle';

const EmptyStateDescription = React.forwardRef<
  React.ElementRef<typeof Text>,
  React.ComponentPropsWithoutRef<typeof Text>
>(({ className, ...props }, ref) => (
  <Text
    ref={ref}
    className={cn('mt-2 text-sm text-muted-foreground', className)}
    {...props}
  />
));
EmptyStateDescription.displayName = 'EmptyStateDescription';

export {
  EmptyState,
  EmptyStateIcon,
  EmptyStateTitle,
  EmptyStateDescription,
};
