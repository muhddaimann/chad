
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { Text, View } from 'react-native';

const badgeVariants = cva(
  'items-center rounded-full px-2.5 py-0.5 text-xs font-semibold',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground',
        secondary: 'bg-secondary text-secondary-foreground',
        destructive: 'bg-destructive text-destructive-foreground',
        outline: 'text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const badgeTextVariants = cva('text-xs font-semibold', {
  variants: {
    variant: {
      default: 'text-primary-foreground',
      secondary: 'text-secondary-foreground',
      destructive: 'text-destructive-foreground',
      outline: 'text-foreground',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type BadgeProps = React.ComponentProps<typeof View> & VariantProps<typeof badgeVariants>;

function Badge({ className, variant, ...props }: BadgeProps) {
  return <View className={cn(badgeVariants({ variant }), className)} {...props} />;
}

function BadgeText({ className, variant, ...props }: React.ComponentProps<typeof Text> & VariantProps<typeof badgeTextVariants>) {
  return <Text className={cn(badgeTextVariants({ variant }), className)} {...props} />;
}

export { Badge, BadgeText, badgeVariants };
export type { BadgeProps };
