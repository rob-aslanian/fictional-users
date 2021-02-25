import {
  Button,
  ButtonGroup,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActionState } from '../../core/models';
import { RootState } from '../../store/reducers';
import { UserActionList } from '../../store/types/user.type';
import EditDialog from '../dialog/EditDialog';
import UserForm from './form/UserForm';

const columns: any[] = [
  { id: 'firstName', label: 'First name', minWidth: 170 },
  { id: 'lastName', label: 'Last name', minWidth: 170 },
  { id: 'age', label: 'Age', minWidth: 170 },
  { id: 'personalNumber', label: 'Pe/No', minWidth: 170 },
  { id: 'email', label: 'Email', minWidth: 170 },
  { id: 'country', label: 'Country', minWidth: 170 },
  { id: 'habbits', label: 'Habbits', minWidth: 170 },
  { id: 'note', label: 'Note', minWidth: 170 },
];

export default function UserList() {
  const dispatch = useDispatch();
  const users = useSelector(
    (state: RootState) => state.userReducer.users,
  );

  const handleRemoveUser = (id: string) =>
    dispatch({ type: UserActionList.DELETE_USER, payload: id });

  const tableBody = Array.from(users).map(([id, user]) => {
    return (
      <TableRow hover role="checkbox" key={id}>
        <TableCell>
          <ButtonGroup>
            <EditDialog title="Chlen">
              <UserForm editUser={user} state={ActionState.EDIT} />
            </EditDialog>
            <Button
              color="secondary"
              variant="contained"
              size="small"
              onClick={() => handleRemoveUser(id)}
            >
              <Delete />
            </Button>
          </ButtonGroup>
        </TableCell>
        {columns.map((column) => {
          //@ts-ignore
          const value = user[column.id];
          return (
            <TableCell key={column.id + id}>
              {Array.isArray(value) ? value.join(' | ') : value}
            </TableCell>
          );
        })}
      </TableRow>
    );
  });

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Users
      </Typography>

      <Paper>
        {users.size > 0 ? (
          <TableContainer style={{ maxHeight: '400px' }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox"></TableCell>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>{tableBody}</TableBody>
            </Table>
          </TableContainer>
        ) : (
          <Typography variant="subtitle1" align="center" gutterBottom>
            There is no users
          </Typography>
        )}
      </Paper>
    </>
  );
}
