
import { Grid, Box, Stack, TextField, MenuItem, Typography, Avatar, Button } from "@mui/material";

const categories = [
  {
    value:'category1',
    label:'C1'
  },
  {
    value:'category2',
    label:'C2'
  },
  {
    value:'category3',
    label:'C3'
  },
  {
    value:'category4',
    label:'C4'
  },
  {
    value: 'nothing',
    label: ''
  }
]

export default function EditProfile() {
  return (
    <>
      <Box sx={{ flexGrow:1 }} mx={2} my={4}>
        <Grid container spacing={3} >
          <Grid item xs={12}>
            <Typography variant='h3'>Edit profile</Typography>
          </Grid>
          <Grid item xs={12} sm={7}>
            <Stack spacing={1} component='form'>
              <TextField label='Nombre actual' variant='filled'>Hello World</TextField>
              <TextField label='Apellido actual' variant='filled'>Hello World</TextField>
              <TextField label='Select' variant='filled' select
                defaultValue='' helperText='Selecciona una compañia'
                id='filled-select-category'>
                {
                  categories.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))
                }
              </TextField>
              <TextField label='Rol actual' variant='filled'>Hello World</TextField>
              <TextField label='Telefono actual' variant='filled'>Hello World</TextField>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={5} display='flex' flexDirection='column'
            alignItems='center' justifyContent='center' >
            <Avatar sx={{ width:180, height:180, mb:2 }}
              style={{ cursor: 'pointer' }}
            >
              N
            </Avatar>
          </Grid>
          <Grid item xs={12}>
            <Stack direction='row' spacing={1} >
              <Button variant='outlined'>Cancel</Button>
              <Button variant='contained'>Editar</Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}