import React, { createContext, useContext, useState, useCallback } from 'react';
import { Toast } from '@/components/uii/toast';
import { AlertDialog, AlertDialogContent, AlertDialogView } from '@/components/uii/alertDialog';
import { Text, Button } from '@/components/ui';

const NotificationContext = createContext(null);

export const NotificationProvider = ({ children }) => {
  const [toast, setToast] = useState(null);
  const [alert, setAlert] = useState(null);

  const showToast = useCallback((message, type = 'default') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  }, []);

  const showAlert = useCallback((title, description) => {
    setAlert({ title, description });
  }, []);

  const hideAlert = () => setAlert(null);

  return (
    <NotificationContext.Provider value={{ showToast, showAlert }}>
      {children}

      {toast && <Toast message={toast.message} type={toast.type} />}

      {alert && (
        <AlertDialog visible transparent animationType="fade" onRequestClose={hideAlert}>
          <AlertDialogContent>
            <AlertDialogView>
              <Text variant="h3">{alert.title}</Text>
              <Text>{alert.description}</Text>
              <Button onPress={hideAlert}>
                <Text>OK</Text>
              </Button>
            </AlertDialogView>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => useContext(NotificationContext);
