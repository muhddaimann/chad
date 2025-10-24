
import { cn } from '@/lib/utils';
import * as React from 'react';
import { Pressable, View } from 'react-native';

const Radio = React.forwardRef<
  React.ElementRef<typeof Pressable>,
  React.ComponentPropsWithoutRef<typeof Pressable> & { checked?: boolean }
>(({ className, checked, ...props }, ref) => {
  return (
    <Pressable
      ref={ref}
      className={cn(
        'h-4 w-4 shrink-0 rounded-full border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    >
      {checked && (
        <View className={'flex-1 items-center justify-center'}>
          <View className="h-2 w-2 rounded-full bg-primary" />
        </View>
      )}
    </Pressable>
  );
});

Radio.displayName = 'Radio';

export { Radio };
