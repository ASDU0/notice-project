import { Avatar, Box, Button, Grid, Stack, Typography } from "@mui/material";
import AppbarLogedIn from "../components/AppbarLogedIn";
import ListNotice from "../components/ListNotice";

export default function MyNotices() {
  return (
    <Box sx={{ flexGrow:1 }} mx={2} my={4}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <AppbarLogedIn />
        </Grid>
        <Grid container item xs={12}>
          <Grid item xs={4}>
            <Stack alignItems='center' spacing={1} justifyContent='center' height='100%'>
              <Avatar sx={{ width:96, height:96 }}>N</Avatar>
              <Typography>Name and Surname</Typography>
              <Typography>Ocupation, Company</Typography>
              <Typography>email@gmail.com</Typography>
              <Typography>+51 99999999</Typography>
              <Button variant="contained">Edit</Button>
            </Stack>
          </Grid>
          <Grid item xs={8}>
            <Stack spacing={2}>
              <Typography variant='h4'>Your notices</Typography>
              <ListNotice />
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}