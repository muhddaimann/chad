
import { cn } from '@/lib/utils';
import * as React from 'react';
import { Text, View } from 'react-native';
import { Modal, ModalContent, ModalView } from './modal';

const AlertDialog = Modal;

const AlertDialogContent = ModalContent;

const AlertDialogView = ModalView;

const AlertDialogHeader = React.forwardRef<
  React.ElementRef<typeof View>,
  React.ComponentPropsWithoutRef<typeof View>
>(({ className, ...props }, ref) => (
  <View ref={ref} className={cn('flex flex-col space-y-2', className)} {...props} />
));
AlertDialogHeader.displayName = 'AlertDialogHeader';

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof Text>,
  React.ComponentPropsWithoutRef<typeof Text>
>(({ className, ...props }, ref) => (
  <Text
    ref={ref}
    className={cn('text-lg font-semibold text-foreground', className)}
    {...props}
  />
));
AlertDialogTitle.displayName = 'AlertDialogTitle';

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof Text>,
  React.ComponentPropsWithoutRef<typeof Text>
>(({ className, ...props }, ref) => (
  <Text
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
AlertDialogDescription.displayName = 'AlertDialogDescription';

const AlertDialogFooter = React.forwardRef<
  React.ElementRef<typeof View>,
  React.ComponentPropsWithoutRef<typeof View>
>(({ className, ...props }, ref) => (
  <View
    ref={ref}
    className={cn('flex flex-row items-center justify-end space-x-2', className)}
    {...props}
  />
));
AlertDialogFooter.displayName = 'AlertDialogFooter';

export {
  AlertDialog,
  AlertDialogContent,
  AlertDialogView,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
};
