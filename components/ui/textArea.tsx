
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { Platform, TextInput as RNTextInput } from 'react-native';

const textAreaVariants = cva(
  cn(
    'flex w-full rounded-md border border-input bg-background px-3 py-2 text-base text-foreground',
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

type TextAreaProps = React.ComponentProps<typeof RNTextInput> &
  VariantProps<typeof textAreaVariants>;

const TextArea = React.forwardRef<RNTextInput, TextAreaProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <RNTextInput
        ref={ref}
        multiline
        className={cn(textAreaVariants({ variant }), 'h-20', className)}
        {...props}
      />
    );
  }
);

TextArea.displayName = 'TextArea';

export { TextArea, textAreaVariants };
export type { TextAreaProps };
