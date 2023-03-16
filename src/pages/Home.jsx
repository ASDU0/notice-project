import { Box, Stack, Grid, FormControl, InputLabel } from "@mui/material";
import { useState } from "react";
import AppbarLogedIn from "../components/AppbarLogedIn";
import CardNotice from "../components/CardNotice2";
import Select from "../components/Select";


export default function Home() {
  return (
    <Box sx={{ flexGrow:1 }} mx={2} my={4}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack direction='row-reverse' spacing={2}>
            <Select />
            <Select />
            <Select />
            <Select />
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack direction='row' spacing={3} flexWrap='wrap'>
            <CardNotice />
            <CardNotice />
            <CardNotice />
            <CardNotice />
            <CardNotice />
            <CardNotice />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  )
}