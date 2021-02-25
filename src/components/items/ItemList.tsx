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
import { ItemActionList } from '../../store/types/item.type';
import EditDialog from '../dialog/EditDialog';
import ItemForm from './form/ItemForm';

const columns: any[] = [
  { id: 'title', label: 'Title' },
  { id: 'description', label: 'Description' },
  { id: 'price', label: 'Price' },
  { id: 'amount', label: 'Amount' },
];

export default function ItemList() {
  const dispatch = useDispatch();
  const items = useSelector(
    (state: RootState) => state.itemReducer.items,
  );

  const handleRemoveItem = (id: string) =>
    dispatch({ type: ItemActionList.DELETE_ITEM, payload: id });

  const tableBody = Array.from(items).map(([id, item]) => {
    return (
      <TableRow hover role="checkbox" key={id}>
        <TableCell>
          <ButtonGroup>
            <EditDialog title="Edit item">
              <ItemForm editItem={item} state={ActionState.EDIT} />
            </EditDialog>
            <Button
              color="secondary"
              size="small"
              variant="contained"
              onClick={() => handleRemoveItem(id)}
            >
              <Delete />
            </Button>
          </ButtonGroup>
        </TableCell>
        {columns.map((column) => {
          //@ts-ignore
          const value = item[column.id];
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
        Items
      </Typography>
      <Paper>
        {items.size > 0 ? (
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
            There is no items
          </Typography>
        )}
      </Paper>
    </>
  );
}
