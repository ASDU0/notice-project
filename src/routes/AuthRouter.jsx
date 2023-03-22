import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Outlet } from 'react-router-dom';

const AuthRouter = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        '& > :not(style)': {
          m: 1,
          p: 3,
          width: '85vw'
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
