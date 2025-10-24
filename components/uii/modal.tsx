
import { cn } from '@/lib/utils';
import * as React from 'react';
import { Modal as RNModal, View } from 'react-native';

const Modal = ({ ...props }) => {
  return <RNModal {...props} />;
};

const ModalContent = React.forwardRef<
  React.ElementRef<typeof View>,
  React.ComponentPropsWithoutRef<typeof View>
>(({ className, ...props }, ref) => (
  <View
    ref={ref}
    className={cn(
      'flex-1 items-center justify-center bg-black/80',
      className
    )}
    {...props}
  />
));
ModalContent.displayName = 'ModalContent';

const ModalView = React.forwardRef<
  React.ElementRef<typeof View>,
  React.ComponentPropsWithoutRef<typeof View>
>(({ className, ...props }, ref) => (
  <View
    ref={ref}
    className={cn(
      'm-5 rounded-lg border border-border bg-card p-6 text-card-foreground shadow-lg',
      className
    )}
    {...props}
  />
));
ModalView.displayName = 'ModalView';

export { Modal, ModalContent, ModalView };
