import React, { PropsWithChildren, useContext } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import { CustomContext } from '../../components/CustomProvider';

interface DialogConfirmExtendProps {
  dismissDialog: Function;
  isShow: boolean;
}

function DialogConfirmExtend({ isShow, dismissDialog }: PropsWithChildren<DialogConfirmExtendProps>) {
  const { extendMinutes, setExtendMinutes } = useContext(CustomContext);

  return (
    <Dialog open={isShow} fullWidth={true} maxWidth="xs">
      <DialogTitle>延長が承認されました</DialogTitle>
      <DialogContent>
        <DialogContentText>{extendMinutes}分の延長を承認しました。</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => dismissDialog()} color="primary" autoFocus>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DialogConfirmExtend;
