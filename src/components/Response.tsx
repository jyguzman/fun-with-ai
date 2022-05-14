import Completion from "../types/Completion";
import { Grid, Paper, Typography, Stack } from "@mui/material";

const ApiResponseBox = ({prompt, response, time}: Completion) => {
    const styles = {
        paper: {
            
            padding: '5%',
            backgroundColor: '#f5f5f5',            
        },
        text: {
            fontWeight: 'bold'
        }
    }

    return (
        <Paper sx={styles.paper}>
            <Grid container direction='column'>
                <Stack direction='row' spacing={2}>
                        <Typography sx={{fontWeight: 'bold', paddingRight: '3.75%'}}>Prompt:</Typography>
                        <Typography sx={{textAlign: 'center'}}>{prompt}</Typography>
                </Stack>
                <Stack direction='row' spacing={2} >
                        <Typography sx={styles.text}>Response:</Typography>
                        <Typography>{response}</Typography>
                </Stack>
            </Grid>
        </Paper>
    )
}

export default ApiResponseBox;