import Completion from "../types/Completion";
import { Grid, Paper, Typography, Stack } from "@mui/material";

const Response = ({prompt, response}: Completion) => {
    return (
        <Paper sx={{padding: '5%',backgroundColor: '#f5f5f5'}}>
            <Grid container direction='column'>
                <Stack direction='row' spacing={2}>
                        <Typography sx={{fontWeight: 'bold', paddingRight: '3.75%'}}>Prompt:</Typography>
                        <Typography sx={{textAlign: 'center'}}>{prompt}</Typography>
                </Stack>
                <Stack direction='row' spacing={2} >
                        <Typography sx={{fontWeight: 'bold'}}>Response:</Typography>
                        <Typography>{response}</Typography>
                </Stack>
            </Grid>
        </Paper>
  );
}

export default Response;