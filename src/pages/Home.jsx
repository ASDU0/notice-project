import { Box, Stack, Grid } from "@mui/material";
import { CardNotice, Select } from "../components";


export default function Home() {
  const times = [1,2,3,4,5,6]
  return (
    <Box sx={{ flexGrow:1 }} mx={2} my={4}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Stack direction='row-reverse' spacing={2}>
            <Select />
            <Select />
            <Select />
            <Select />
          </Stack>
        </Grid>
        <Grid container item xs={12} spacing={1}
          textAlign='center'
        >
          {
            times.map(e => (
              <Grid item key={e}>
                <CardNotice />
              </Grid>
            ))
          }
        </Grid>
      </Grid>
    </Box>
  )
}