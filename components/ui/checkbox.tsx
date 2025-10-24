
import { cn } from '@/lib/utils';
import * as React from 'react';
import { Pressable, View } from 'react-native';
import { Check } from 'lucide-react-native';
import { Icon } from './icon';

const Checkbox = React.forwardRef<
  React.ElementRef<typeof Pressable>,
  React.ComponentPropsWithoutRef<typeof Pressable> & { checked?: boolean }
>(({ className, checked, ...props }, ref) => {
  return (
    <Pressable
      ref={ref}
      className={cn(
        'h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        checked && 'bg-primary',
        className
      )}
      {...props}
    >
      {checked && (
        <View className={'flex-1 items-center justify-center'}>
          <Icon as={Check} className="h-3 w-3 text-primary-foreground" />
        </View>
      )}
    </Pressable>
  );
});

Checkbox.displayName = 'Checkbox';

export { Checkbox };
