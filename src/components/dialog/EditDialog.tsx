import {
  Button,
  Dialog,
  DialogContent,
  DialogProps,
  DialogTitle,
  IconButton,
} from '@material-ui/core';
import { Close, Edit } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import styles from './dialog.module.css';

export default function EditDialog(props: Partial<DialogProps>) {
  const isOpen = useSelector(
    (state: RootState) => state.modalReducer,
  );
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(!isOpen);
  }, [isOpen]);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        color="primary"
        variant="contained"
        size="small"
        onClick={handleClickOpen}
      >
        <Edit />
      </Button>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>
          {props.title}
          <IconButton
            onClick={handleClose}
            className={styles.CloseBtn}
          >
            <Close></Close>
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>{props.children}</DialogContent>
      </Dialog>
    </div>
  );
}
