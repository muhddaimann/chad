
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { Platform, TextInput as RNTextInput } from 'react-native';

const textInputVariants = cva(
  cn(
    'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base text-foreground',
    Platform.select({
      web: 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
    })
  ),
  {
    variants: {
      variant: {
        default: 'border-input',
        filled: 'bg-muted border-muted',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

type TextInputProps = React.ComponentProps<typeof RNTextInput> &
  VariantProps<typeof textInputVariants>;

const TextInput = React.forwardRef<RNTextInput, TextInputProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <RNTextInput
        ref={ref}
        className={cn(textInputVariants({ variant }), className)}
        {...props}
      />
    );
  }
);

TextInput.displayName = 'TextInput';

export { TextInput, textInputVariants };
export type { TextInputProps };
