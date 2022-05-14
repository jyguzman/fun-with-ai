import { useState } from "react";
import { saveCompletions, retrieveCompletions }  from "../utils/storage_utils";
import useFetchEngines from "../hooks/useFetchEngines";
import { fetchCompletion } from "../utils/apiCallFunctions";

import { Stack, Grid } from "@mui/material";
import PromptField from "./PromptField";
import SubmitButton from "./SubmitButton";
import Completion from "../types/Completion";
import ResponseList from "./ResponseList";
import EngineSelect from "./EngineSelect";
import Header from "./Header";

const MainPage = () => {
    const [prompt, setPrompt] = useState<string>("");
    const [currentEngine, setCurrentEngine] = useState<string>('text-curie-001');
    const [completions, setCompletions] = useState<Completion[]>(retrieveCompletions());
    
    const engines = useFetchEngines();

    const setPromptText = (text: string): void =>  {
        setPrompt(text);
    }

    const submitPrompt = async () => {
        const completion = await fetchCompletion(prompt, currentEngine);
        setCompletions(prev => [...prev, completion]);
        saveCompletions(completion);
    }

    const handleEngineSelect = (event: Event, engine: string): void => {
        setCurrentEngine(engine);
    }

    return (
        <Grid sx={{padding: '5%'}} container 
            direction='column' 
            justifyContent='center'
            alignItems='center'
            spacing={3}>
            <Header text={'Fun with AI!'}/>
            <Grid item container justifyContent={'center'} 
                alignItems='center'>
                <PromptField setPromptText={setPromptText}/>
            </Grid>
            <Grid item container 
                sx={{width: ['100%', '95%', '95%', '87.5%', '100%'], 
                paddingBottom: '5%', margin: 0}} 
                justifyContent={'flex-end'}
                alignItems='baseline'>
                <Stack direction='row' spacing={5} 
                    justifyContent='flex-end'
                    alignItems='center'
                    sx={{width: '100%'}}>
                    <EngineSelect engines={engines} 
                        handleEngineSelect={handleEngineSelect}></EngineSelect>
                    <SubmitButton submitPrompt={submitPrompt}/>
                </Stack>
            </Grid>
            <Header text={'Responses'}/>
            <Grid item container spacing={2} justifyContent={'flex-start'} alignItems='center' 
            sx={{width: ['100%', '92.5%', '92.5%', '86%', '75%']}}>
                <ResponseList completions={completions}/>
            </Grid>
        </Grid>
    )
}

export default MainPage;