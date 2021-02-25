import { Box, Button, Grid, TextField } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { ActionState, IItem } from '../../../core/models';
import { VALIDATION_MSGS } from '../../../core/validation/validation.constants';
import { ItemActionList } from '../../../store/types/item.type';
import { ModalActionList } from '../../../store/types/modal.type';

interface ItemFormProps {
  editItem?: IItem;
  state: ActionState;
}

export default function ItemForm({ editItem, state }: ItemFormProps) {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    errors,
  } = useForm();

  useEffect(() => {
    if (editItem && state === ActionState.EDIT) {
      patchForm(editItem);
    }
  });

  const patchForm = (item: IItem) => {
    //@ts-ignore
    Object.keys(item).forEach((key) => setValue(key, item[key]));
  };

  const onSubmit = (item: Partial<IItem>) => {
    state === ActionState.ADD && onCreate(item);
    state === ActionState.EDIT && onEdit(item);
  };

  const onCreate = (item: Partial<IItem>) => {
    const _item = Object.assign({}, item);
    _item.id = v4();

    dispatch({ type: ItemActionList.ADD_ITEM, payload: _item });
    reset();
  };

  const onEdit = (item: Partial<IItem>) => {
    const _item = Object.assign({}, item);
    _item.id = editItem?.id;

    dispatch({ type: ItemActionList.EDIT_ITEM, payload: _item });
    dispatch({ type: ModalActionList.CLOSE_MODAL, payload: true });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <Grid container spacing={3}>
        <Grid item lg={6} xs={12}>
          <TextField
            label="Title"
            name="title"
            inputRef={register({ required: true })}
            variant="outlined"
            error={!!errors.title}
            helperText={errors.title && VALIDATION_MSGS.required}
          />
        </Grid>
        <Grid item lg={6} xs={12}>
          <TextField
            label="Description"
            name="description"
            multiline
            inputRef={register({ required: true })}
            variant="outlined"
            error={!!errors.description}
            helperText={
              errors.description && VALIDATION_MSGS.required
            }
          />
        </Grid>

        <Grid item lg={6} xs={12}>
          <TextField
            label="Price"
            name="price"
            type="number"
            inputRef={register}
            variant="outlined"
          />
        </Grid>
        <Grid item lg={6} xs={12}>
          <TextField
            label="Amount"
            name="amount"
            type="number"
            inputRef={register}
            defaultValue={1}
            variant="outlined"
          />
        </Grid>
      </Grid>

      <Box mt={3}>
        <Button variant="contained" color="secondary" type="submit">
          Submit
        </Button>
      </Box>
    </form>
  );
}
