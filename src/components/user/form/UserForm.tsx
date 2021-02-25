import { Button, Grid, TextField } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { v4 } from 'uuid';
import { ActionState, IUser } from '../../../core/models';
import { VALIDATION_MSGS } from '../../../core/validation/validation.constants';
import { ModalActionList } from '../../../store/types/modal.type';
import { UserActionList } from '../../../store/types/user.type';
import CountryList from './CountryList';
import Habbits from './Habbits';

interface UserFormProps {
  editUser: IUser;
  state: ActionState;
}

export default function UserForm({
  editUser,
  state = ActionState.ADD,
}: Partial<UserFormProps>) {
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    control,
    errors,
  } = useForm();

  useEffect(() => {
    if (editUser && state === ActionState.EDIT) {
      patchForm(editUser);
    }
  });

  const patchForm = (user: IUser) => {
    //@ts-ignore
    Object.keys(user).forEach((key) => setValue(key, user[key]));
  };

  const onSubmit = (user: Partial<IUser>) => {
    state === ActionState.ADD && onCreate(user);
    state === ActionState.EDIT && onEdit(user);
  };

  const onCreate = (user: Partial<IUser>) => {
    const _user = Object.assign({}, user);
    _user.id = v4();
    console.log(user.habbits?.filter(Boolean));

    _user.habbits = user.habbits?.filter(Boolean);

    dispatch({ type: UserActionList.ADD_USER, payload: _user });
    history.push('/items');
  };

  const onEdit = (user: Partial<IUser>) => {
    const _user = Object.assign({}, user);
    _user.id = editUser?.id;

    dispatch({ type: UserActionList.EDIT_USER, payload: _user });
    dispatch({ type: ModalActionList.CLOSE_MODAL, payload: true });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <Grid container>
        <Grid item lg={4}>
          <TextField
            label="First name"
            variant="outlined"
            name="firstName"
            inputRef={register({ required: true })}
            error={!!errors.firstName}
            helperText={errors.firstName && VALIDATION_MSGS.required}
          />
        </Grid>
        <Grid item lg={4}>
          <TextField
            label="Last name"
            name="lastName"
            variant="outlined"
            inputRef={register({ required: true })}
            error={!!errors.lastName}
            helperText={errors.lastName && VALIDATION_MSGS.required}
          />
        </Grid>
        <Grid item lg={4}>
          <TextField
            fullWidth
            label="Age"
            variant="outlined"
            type="number"
            name="age"
            inputRef={register({ min: 18, max: 99 })}
            error={!!errors.age}
            helperText={errors.age && VALIDATION_MSGS.age}
          />
        </Grid>
      </Grid>
      <Grid container style={{ margin: '1rem 0' }}>
        <Grid item lg={4}>
          <TextField
            label="Personal number"
            variant="outlined"
            type="number"
            name="personalNumber"
            inputRef={register}
          />
        </Grid>
        <Grid item lg={4}>
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            inputRef={register}
          />
        </Grid>
        <Grid item lg={4}>
          <CountryList name="country" control={control} />
        </Grid>
      </Grid>

      <TextField
        label="Note"
        multiline
        rows={5}
        name="note"
        inputRef={register}
        style={{ width: '100%' }}
        variant="outlined"
      />

      <Habbits control={control} name="habbits" />

      <Button variant="contained" color="secondary" type="submit">
        Submit
      </Button>
    </form>
  );
}
