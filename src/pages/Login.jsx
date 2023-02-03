import { Box, Grid } from '@mui/material'
import SimplePaper from '../components/SimplePaper'
import banneremploye from '../images/banneremploye.png'

export default function Login() {
  return (
    <Box sx={{ flexGrow:1, width:'100%', height:'100%' }}>
      <Grid container>
        <SimplePaper />
      </Grid>
    </Box>
  )
}