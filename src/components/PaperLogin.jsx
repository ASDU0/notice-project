import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Button, Link, Stack, styled, TextField, Typography } from '@mui/material';
import { AuthContext } from '../auth/AuthContext';
import { types } from '../types/types';
import { useNavigate } from 'react-router-dom';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function PaperLogin() {

  const {dispatch} = React.useContext(AuthContext);

  const navigate = useNavigate();

  const goToRegister = () => {
    navigate('/register');
  }

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch({
      type: types.login,
      payload: 'Roswell',
    });
  }
  return (
    <Item>
      <Stack
        alignItems='stretch' spacing={3}
        component='form' onSubmit={handleLogin}
      >
        <Typography variant='h5'>Login</Typography>
        <TextField label='Username' variant='filled'>Hello World</TextField>
        <TextField label='Password' variant='filled' type='password'>Stimate king</TextField>
        <Button variant='contained' type='submit'>Submit</Button>
        <Typography variant='body2'>
          No tienes cuenta? <Link onClick={goToRegister}>Registrate</Link>
        </Typography>
      </Stack>
    </Item>
  );
}