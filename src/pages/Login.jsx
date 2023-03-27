import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate('/register');
  }

  const handleLogin = (e) => {
    e.preventDefault();
  }

  return (
    <Box
      sx={{
      flexGrow: 1,
      display: 'flex', flexDirection: 'row',
      justifyContent: 'center',
    }}
      className='login'
    >
      <Box sx={{ width: 500}}>
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
      </Box>
    </Box>
  )
}