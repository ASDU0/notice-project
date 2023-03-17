import { Box, Grid } from '@mui/material'
import PaperLogin from '../components/PaperLogin'

export default function Login() {
  return (
    <Box
      sx={{
      flexGrow:1, width:'100%', minHeight:'100vh',
      display: 'flex', flexDirection: 'column',
      justifyContent: 'center', alignItems: 'center'
    }}
      className='login'
    >
      <Box sx={{ width: 500}}>
        <PaperLogin />
      </Box>
    </Box>
  )
}