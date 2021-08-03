import React, { PropsWithChildren, useContext } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
// import useRoomCustomState from '../../hooks/useRoomCustomState/useRoomCustomState';
import { CustomContext } from '../../components/CustomProvider';

interface DialogConfirmExtendProps {
  dismissDialog: Function;
  isShow: boolean;
}

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const times = [10, 30, 60];

function DialogConfirmExtend({ isShow, dismissDialog }: PropsWithChildren<DialogConfirmExtendProps>) {
  const classes = useStyles();
  const { extendMinutes, setExtendMinutes } = useContext(CustomContext);

  const handleChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    const min = e.target.value as number;
    console.log('min', min);
    setExtendMinutes(min);
  };

  return (
    <Dialog open={isShow} fullWidth={true} maxWidth="xs">
      <DialogTitle>延長確認</DialogTitle>
      <DialogContent>
        <DialogContentText>
          終了10分前となりました。
          <br />
          延長する場合延長時間の選択をして延長依頼を行ってください。
          <br />
        </DialogContentText>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">時間を選択</InputLabel>
          <Select
            value={extendMinutes}
            onChange={handleChange}
            className={classes.selectEmpty}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
          >
            {times.map((time, index) => {
              return (
                <MenuItem value={time} key={index}>
                  {time}分
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => dismissDialog(extendMinutes)} color="primary" autoFocus>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DialogConfirmExtend;
