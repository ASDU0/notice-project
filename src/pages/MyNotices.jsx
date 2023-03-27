import { Avatar, Box, Button, Grid, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ListNotice } from "../components";

export default function MyNotices() {
  const navigate = useNavigate();

  const handleEditProfile = () => {
    navigate("/editprofile");
  }

  return (
    <Box sx={{ flexGrow:1 }} mx={2} my={4}>
      <Grid container spacing={3}>
        <Grid container item xs={12}>
          <Grid item display={{ xs: 'none', sm: 'block' }} sm={4}>
            <Stack alignItems='center' spacing={1} justifyContent='center' height='100%'>
              <Avatar sx={{ width:96, height:96 }}>N</Avatar>
              <Typography>Name and Surname</Typography>
              <Typography>Ocupation, Company</Typography>
              <Typography>email@gmail.com</Typography>
              <Typography>+51 99999999</Typography>
              <Button
                variant="contained"
                onClick={handleEditProfile}
              >
                Edit
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Stack spacing={2}>
              <Typography variant='h3'>Your notices</Typography>
              <ListNotice />
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}