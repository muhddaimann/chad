import * as React from 'react';

type UseDisclosureOptions = {
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export function useDisclosure(options: UseDisclosureOptions = {}) {
  const { defaultOpen = false, onOpenChange } = options;
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  const open = React.useCallback(() => {
    setIsOpen(true);
    onOpenChange?.(true);
  }, [onOpenChange]);

  const close = React.useCallback(() => {
    setIsOpen(false);
    onOpenChange?.(false);
  }, [onOpenChange]);

  const toggle = React.useCallback(() => {
    setIsOpen((prev) => {
      const next = !prev;
      onOpenChange?.(next);
      return next;
    });
  }, [onOpenChange]);

  return { isOpen, open, close, toggle, setOpen: setIsOpen };
}
