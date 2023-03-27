import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

function AuthRouter() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        '& > :not(style)': {
          m: 1,
          p: 3,
        },
      }}
    >
      <Paper elevation={10} >
        <Outlet />
      </Paper>
    </Box>
  )
}

export default AuthRouter
