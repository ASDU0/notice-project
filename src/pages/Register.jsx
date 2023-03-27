import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Stack, TextField, Typography, Button, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { useDispatch } from 'react-redux';
import { startRegister } from '../actions/auth';

export default function Register() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    firstname: '', surnames: '',
    email: '', ruc: '',
    companyName: '', phoneCompanyNumber: 0,
    avatar: 'someurlformyavatar.jpg', role: '',
    password: '', passwordConfirmation: ''
  });

  const {
    firstname, surnames, email, ruc,
    companyName, phoneCompanyNumber,
    avatar, role, password, passwordConfirmation
  } = formValues;

  const goToLogin = () => {
    navigate('/auth');
  }

  const handleSignup = (e) => {
    e.preventDefault();
    dispatch(startRegister(formValues));
  }

  return (
    <Box sx={{ flexGrow: 1 }} my={1}
      className='register'
      component='form'
      onSubmit={handleSignup}
    >
      <Grid container spacing={2}>

        {/* Este componente ocupa 100vh de su padre */}
        <Grid item xs={12} display='flex'
          alignItems='flex-end' justifyContent='center'
          textAlign='center'
        >
          <Typography variant='h5'>
            Registra tus datos
          </Typography>
        </Grid>

        <Grid container item xs={12} spacing={2}>
          <Grid item xs={12} md={6}
            // mx={{ xs: 1, sm: 5, md: 2 }}
            mx={{ sm: 5, md: 0 }}
          >
            <Stack spacing={2}>
              <TextField
                label='Nombres' variant='filled'
                name='firstname' onChange={handleInputChange}
                placeholder='Roswell Jaime' value={firstname}
              />

              <TextField
                label='Apellidos' variant='filled'
                name='surnames' onChange={handleInputChange}
                placeholder='Pando Muñoz' value={surnames}
              />

              <TextField
                label='Email' variant='filled'
                name='email' onChange={handleInputChange}
                placeholder='example@gmail.com' value={email}
              />

              <TextField
                label='Avatar' variant='filled'
                name='avatar' onChange={handleInputChange}
                placeholder='avatar.jpg' value={avatar}
              />
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}
            mx={{ sm: 5, md: 0 }}
          >
            <Stack spacing={2}>
              <TextField
                label='RUC' variant='filled'
                name='ruc' onChange={handleInputChange}
                placeholder='12345678910' value={ruc}
              />

              <TextField
                label='Nombre de Empresa' variant='filled'
                name='companyName' onChange={handleInputChange}
                placeholder='Alicorp S.A.' value={companyName}
              />

              <TextField
                label='Número telefónico' variant='filled'
                name='phoneCompanyNumber' onChange={handleInputChange}
                placeholder='987654321' value={phoneCompanyNumber}
              />

              <TextField
                label='Rol' variant='filled'
                name='role' onChange={handleInputChange}
                placeholder='Director General ...' value={role}
              />
            </Stack>
          </Grid>

          <Grid item xs={12} textAlign='center'
            mx={{ sm: 5, md: 15 }}
          >
            <Stack spacing={2}>
              <TextField
                label='Contraseña' variant='filled' type='password'
                name='password' onChange={handleInputChange}
                placeholder='12345' value={password}
              />

              <TextField
                label='Cofirme contraseña' variant='filled' type='password'
                name='passwordConfirmation' onChange={handleInputChange}
                placeholder='12345' value={passwordConfirmation}
              />
              <Button type='submit' variant='contained'>Registrar</Button>

              <Typography variant='body2'>
                <Link onClick={goToLogin} style={{ cursor: 'pointer' }}>
                  Ya tienes una cuenta ?
                </Link>
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}