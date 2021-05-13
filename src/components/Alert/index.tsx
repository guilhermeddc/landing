import React, {useCallback, useEffect, useState} from 'react';
import {CircularProgress, Container, Snackbar} from '@material-ui/core';
import {Alert} from '@material-ui/lab';

import {AlertService, AlertTypes} from '../../services/alertService';

interface IAlertComponentState {
  isOpen: boolean;
  message: string;
  type: AlertTypes;
  onClose?: Function;
}

export const AlertComponent: React.FC = () => {
  const [alert, setAlert] = useState<IAlertComponentState>({
    type: undefined,
    isOpen: false,
    message: '',
  });

  useEffect(() => {
    const subscription = AlertService.subscribe((msg: any) =>
      setAlert({
        message: msg.message,
        type: msg.type,
        isOpen: true,
        onClose: msg.onClose,
      }),
    );
    return () => {
      subscription.unsubscribe();
      setAlert({message: '', type: undefined, isOpen: false});
    };
  }, []);

  const handleOnCloseAlert = useCallback(() => {
    setAlert({
      ...alert,
      isOpen: false,
      type: undefined,
    });
    alert.onClose && alert.onClose();
  }, [setAlert, alert]);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (alert.isOpen && alert.type !== 'loading') {
      timer = setTimeout(handleOnCloseAlert, 3000);
      return () => clearTimeout(timer);
    }
  }, [alert, handleOnCloseAlert]);

  return (
    <Snackbar
      open={alert.isOpen}
      anchorOrigin={{vertical: 'top', horizontal: 'right'}}>
      <Container>
        <Alert
          elevation={6}
          variant="filled"
          onClose={handleOnCloseAlert}
          action={alert.type !== 'loading' ? null : <></>}
          severity={alert.type !== 'loading' ? alert.type : 'info'}
          icon={
            alert.type !== 'loading' ? undefined : (
              <CircularProgress color="inherit" size={20} />
            )
          }>
          {alert.message}
        </Alert>
      </Container>
    </Snackbar>
  );
};
