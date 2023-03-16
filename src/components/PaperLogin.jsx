import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Stack, styled, TextField, Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function PaperLogin() {
  return (
    <Item>
      <Stack
        alignItems='center' spacing={3}
      >
        <Typography variant='h5'>Login</Typography>
        <TextField label='Username' variant='filled'>Hello World</TextField>
        <TextField label='Password' variant='filled' type='password'>Stimate king</TextField>
      </Stack>
    </Item>
  );
}