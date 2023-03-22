import * as React from 'react';
import { Button, Link, Stack, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function PaperLogin() {

  const navigate = useNavigate();

  const goToRegister = () => {
    navigate('/auth/register');
  }

  const handleLogin = (e) => {
    e.preventDefault();
  }
  return (
    <Stack
      alignItems='stretch' spacing={3}
      component='form' onSubmit={handleLogin}
      textAlign='center'
    >
      <Typography variant='h5'>Login</Typography>
      <TextField label='Username' variant='filled'>Hello World</TextField>
      <TextField label='Password' variant='filled' type='password'>Stimate king</TextField>
      <Button variant='contained' type='submit'>Submit</Button>
      <Typography variant='body2'>
        No tienes cuenta? <Link onClick={goToRegister} style={{ cursor: 'pointer' }}>
           Regístrate
        </Link>
      </Typography>
    </Stack>
  );
}