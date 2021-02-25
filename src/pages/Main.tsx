import { Box, Typography } from '@material-ui/core';
import React from 'react';
import UserForm from '../components/user/form/UserForm';

export default function Main() {
  return (
    <>
      <Box width={'60%'} display="center">
        <Typography variant="h4" gutterBottom>
          Add user
        </Typography>
        <hr />
        <UserForm />
      </Box>
    </>
  );
}
