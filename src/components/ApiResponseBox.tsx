import Completion from "../types/Completion";
import { Grid, Paper, Typography, Stack } from "@mui/material";
import { styled } from "@mui/material";

const ApiResponseBox = ({prompt, response, time}: Completion) => {
    const styles = {
        paper: {
            padding: '5%',
            backgroundColor: '#f5f5f5'
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
                <Stack direction='row' sx={{}} spacing={2} >
                        <Typography sx={styles.text}>Response:</Typography>
                        <Typography>{response}</Typography>
                </Stack>
            </Grid>
        </Paper>
    )
    
    /*return (
        <Paper sx={styles.paper}>
            <Stack direction='row' >
                <Stack sx={{width: '50%'}} spacing={2}>
                    <Typography sx={{paddingBottom: '10%'}}>Prompt:</Typography>
                    <Typography sx={styles.text}>Response:</Typography>
                </Stack>
                <Stack sx={{width: '100%', textAlign: 'left'}} justifyContent='center' alignItems='center' spacing={2}>
                    <Typography>{prompt}</Typography>
                    <Typography>{response}</Typography>
                </Stack>
            </Stack>
        </Paper>
    )*/
}

export default ApiResponseBox;