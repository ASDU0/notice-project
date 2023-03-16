import * as React from 'react'
import { Box, Grid, Stack, Typography, TextField, MenuItem, Button } from '@mui/material'
import AppbarLogedIn from '../components/AppbarLogedIn'

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
  }
]

export default function NewNotice() {
  return (
    <>
      <Stack mx={2} my={4} spacing={1} component='form'>
        <Typography variant='h2'>New Notice</Typography>
        <TextField label='Title' variant='filled'>Hello World</TextField>
        <TextField label='Description' variant='filled'>Hello World</TextField>
        <TextField label='Select' variant='filled' select
          defaultValue='C1' helperText='Selecciona una categoria'
          id='filled-select-category'>
          {
            categories.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))
          }
        </TextField>
        <Stack alignSelf='flex-end' direction='row' spacing={1}>
          <Button variant='outlined'>Cancel</Button>
          <Button variant='contained'>Post</Button>
        </Stack>
      </Stack>
    </>
  )
}
