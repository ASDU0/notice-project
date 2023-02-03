import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Stack, TextField, Typography, Button } from '@mui/material';
export default function Register() {
  return (
    <Box sx={{ flexGrow: 1 }} mx={5} my={1}>
      <Grid container spacing={2} minHeight='100vh'>
        <Grid item xs={6} mt={2} className='have-account' >
          <Stack spacing={2}  alignItems='center' direction='column-reverse'
              height='100%' pb={6}>
            <Button variant='contained'>Log In</Button>
            <Typography variant='body1'>Already have an account?</Typography>
          </Stack>
        </Grid>
        {/* Este componente ocupa 100vh de su padre */}
        <Grid item xs={6} display='flex' direction='column' alignItems='strech'>
          <Box padding={2} component='form' minHeight='100%' display='flex' flexDirection='column'
              justifyContent='center'>
            <Stack spacing={2} >
              <Typography variant='h5'>Sing Up</Typography>
              <TextField label='Username' variant='filled'>Hello World</TextField>
              <TextField label='Email' variant='filled'>Stimate king</TextField>
              <TextField label='Phone Number' variant='filled'>Stimate king</TextField>
              <TextField label='Password' variant='filled' type='password'>Stimate king</TextField>
              <TextField label='Cofirm password' variant='filled' type='password'>Stimate king</TextField>
              <Button variant='contained'>Sign Up</Button>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}