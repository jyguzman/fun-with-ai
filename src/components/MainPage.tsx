import { useState } from "react";
import { Grid, Box, Typography } from "@mui/material";
import PromptField from "./PromptField";
import SubmitPromptButton from "./SubmitPromptButton";
import fetchCompletion from "../utils/fetchCompletion";
import Completion from "../types/Completion";
import ApiResponseBoxList from "./ApiResponseBoxList";
import { saveCompletions, retrieveCompletions }  from "../utils/storage_utils";

const MainPage = () => {
    const [prompt, setPrompt] = useState<String>("");
    const [completions, setCompletions] = useState<Completion[]>(retrieveCompletions());
    
    const styles = {
        promptField: {
            FontFace: 'Roboto',
        }
    }

    const trackPromptText = (text: String): void =>  {
        setPrompt(text);
    }

    const submitPrompt = async () => {
        const completion = await fetchCompletion(prompt);
        setCompletions(prev => [...prev, completion]);
        saveCompletions(completion);
    }

    return (
        <Grid sx={{padding: '5%', }} container 
            direction='column' 
            justifyContent='center'
            alignItems='center'
            spacing={3}>
            <Grid item sx={{width: ['90%', '85%', '80%', '75%']}}>
                <Typography  variant='h4' sx={{fontWeight: 'bold'}}>
                    Fun with AI!
                </Typography>
            </Grid>
            <Grid item container justifyContent={'center'} 
                alignItems='center'>
                <PromptField trackPromptText={trackPromptText}/>
            </Grid>
            <Grid item container sx={{width: ['90%', '85%', '80%', '75%', '65%'], paddingBottom: '5%'}} justifyContent={'flex-end'}>
                <SubmitPromptButton submitPrompt={submitPrompt}/>
            </Grid>
            <Grid item container spacing={2} justifyContent={'center'} alignItems='center' sx={{width: ['95%', '80%', '65%', '50%', '50%']}}>
                <ApiResponseBoxList completions={completions}/>
            </Grid>
        </Grid>
    )
}

export default MainPage;