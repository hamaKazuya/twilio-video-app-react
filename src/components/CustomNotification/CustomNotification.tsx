import React, { useState, useContext } from 'react';
import { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import MicIcon from '../../icons/MicIcon';
import DialogConfirmExtend from '../DialogConfirmExtend/DialogConfirmExtend';
import DialogExtendRequested from '../DialogExtendRequested/DialogExtendRequested';
import { CustomContext } from '../CustomProvider';
export default function CustomNotification() {
  const [isShow, setIsShow] = useState(false);
  const [isShowRequestedDialog, setIsShowRequestedDialog] = useState(false);
  const { extendMinutes, setExtendMinutes } = useContext(CustomContext);

  useEffect(() => {
    console.log('useEffect is invoked.');
  });

  const onDismissDialog = (tiem: number) => {
    setIsShow(false);
    console.log('api call, post extend minutes.', tiem);
    setExtendMinutes(tiem);
    setIsShowRequestedDialog(true);
  };

  const onDismissRequestDialog = () => {
    console.log('extendMinutes', extendMinutes);
    setIsShowRequestedDialog(false);
    setExtendMinutes(0);
  };

  return (
    <>
      <Button onClick={() => setIsShow(true)} startIcon={<MicIcon />}>
        [テスト]延長dialog表示
      </Button>
      extendMinutes: {extendMinutes}
      <DialogConfirmExtend isShow={isShow} dismissDialog={onDismissDialog} />;
      <DialogExtendRequested isShow={isShowRequestedDialog} dismissDialog={onDismissRequestDialog} />;
    </>
  );
}
