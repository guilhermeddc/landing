import React from 'react';
import {Alert as MuiAlert, AlertProps} from '@material-ui/lab';
import {CircularProgress, Container, Snackbar} from '@material-ui/core';

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

interface BasicSnackBarProps {
  isOpen: boolean;
  message: string;
  onClose?(): void;
  type: 'error' | 'warning' | 'info' | 'success' | 'loading' | undefined;
}
export const BasicSnackBar: React.FC<BasicSnackBarProps> = ({
  message,
  isOpen,
  onClose,
  type,
}) => {
  setTimeout(
    () => {
      onClose && onClose();
    },
    type !== 'loading' ? 6000 : 99999999,
  );

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={type !== 'loading' ? 6000 : 99999999}
      anchorOrigin={{vertical: 'top', horizontal: 'right'}}
      onClose={onClose}>
      <Container>
        <Alert
          icon={type !== 'loading' ? undefined : <CircularProgress size={20} />}
          severity={type !== 'loading' ? type : 'success'}
          onClose={onClose}>
          {message}
        </Alert>
      </Container>
    </Snackbar>
  );
};
