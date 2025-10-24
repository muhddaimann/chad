
import { cn } from '@/lib/utils';
import * as React from 'react';
import { Image, Text, View } from 'react-native';

const Avatar = React.forwardRef<
  React.ElementRef<typeof View>,
  React.ComponentPropsWithoutRef<typeof View>
>(({ className, ...props }, ref) => (
  <View
    ref={ref}
    className={cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', className)}
    {...props}
  />
));
Avatar.displayName = 'Avatar';

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof Image>,
  React.ComponentPropsWithoutRef<typeof Image>
>(({ className, ...props }, ref) => (
  <Image ref={ref} className={cn('aspect-square h-full w-full', className)} {...props} />
));
AvatarImage.displayName = 'AvatarImage';

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof View>,
  React.ComponentPropsWithoutRef<typeof View>
>(({ className, ...props }, ref) => (
  <View
    ref={ref}
    className={cn('flex h-full w-full items-center justify-center rounded-full bg-muted', className)}
    {...props}
  />
));
AvatarFallback.displayName = 'AvatarFallback';

const AvatarFallbackText = React.forwardRef<
  React.ElementRef<typeof Text>,
  React.ComponentPropsWithoutRef<typeof Text>
>(({ className, ...props }, ref) => (
  <Text
    ref={ref}
    className={cn('text-sm font-medium text-muted-foreground', className)}
    {...props}
  />
));
AvatarFallbackText.displayName = 'AvatarFallbackText';

export { Avatar, AvatarImage, AvatarFallback, AvatarFallbackText };
