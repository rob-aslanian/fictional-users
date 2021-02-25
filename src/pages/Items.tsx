import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import ItemForm from '../components/items/form/ItemForm';
import ItemList from '../components/items/ItemList';
import UserList from '../components/user/UserList';
import { ActionState } from '../core/models';

export default function Items() {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item lg={8} xs={12}>
          <UserList />
          <ItemList />
        </Grid>
        <Grid item lg={4} xs={12}>
          <Typography variant="h4" gutterBottom>
            Add item
          </Typography>
          <hr />
          <ItemForm state={ActionState.ADD} />
        </Grid>
      </Grid>
    </>
  );
}
