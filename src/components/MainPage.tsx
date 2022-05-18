import { useState } from "react";
import { saveCompletions, retrieveCompletions, deleteCompletions }  from "../utils/storage_utils";
import useFetchEngines from "../hooks/useFetchEngines";
import { fetchCompletion } from "../utils/apiCallFunctions";

import { Stack, Grid, CircularProgress } from "@mui/material";
import PromptField from "./PromptField";
import SubmitButton from "./SubmitButton";
import Completion from "../types/Completion";
import ResponseList from "./ResponseList";
import EngineSelect from "./EngineSelect";
import Header from "./Header";
import InvalidEngineAlert from "./InvalidEngineAlert";
import DeleteResponsesButton from "./DeleteResponsesButton";

const MainPage = () => {
    const [prompt, setPrompt] = useState<string>("");
    const [currentEngine, setCurrentEngine] = useState<string>('');
    const [completions, setCompletions] = useState<Completion[]>(retrieveCompletions());
    const [loading, setLoading] = useState<boolean>(false);
    const [openAlert, setOpenAlert] = useState<boolean>(false);
    const engines = useFetchEngines();

    const setPromptText = (text: string): void =>  {
        setPrompt(text);
    }

    const submitPrompt = async () => {
        if (!engines.includes(currentEngine)) {
            setOpenAlert(true);
        } else {
            setOpenAlert(false);
            setLoading(true);
            const completion = await fetchCompletion(prompt, currentEngine);
            setCompletions(prev => [...prev, completion]);
            setLoading(false);
            saveCompletions(completion);
        }
    }

    const handleEngineSelect = (event: Event, engine: string): void => {
        setCurrentEngine(engine);
    }

    const closeAlert = (event: Event): void => {
        setOpenAlert(false);
    }

    const deleteResponses = (): void => {
        setCompletions([]);
        deleteCompletions();
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
                <Stack direction='row' spacing={2} 
                    justifyContent='flex-end'
                    alignItems='center'
                    sx={{width: '100%'}}>
                    <EngineSelect engines={engines} 
                        handleEngineSelect={handleEngineSelect}></EngineSelect>
                    <SubmitButton submitPrompt={submitPrompt}/>
                </Stack>
            </Grid>
            <Grid item>
                <InvalidEngineAlert open={openAlert} closeAlert={() => setOpenAlert(false)}/>
            </Grid>
            <Grid container direction="row" spacing={5} justifyContent='space-around' alignItems='center'>
                <Grid item>
                    <Header text={'Responses'}/>
                </Grid>
                <Grid container item justifyContent='flex-end' xs={6}>
                    <DeleteResponsesButton deleteResponses={deleteResponses} />
                </Grid>
            </Grid>
            <Grid item container spacing={2} justifyContent={'flex-start'} alignItems='center' 
            sx={{width: ['100%', '92.5%', '92.5%', '86%', '75%']}}>
                <Stack justifyContent={'center'} alignItems='center' spacing={2}>
                    {loading ? <CircularProgress/> : null}
                    <ResponseList completions={completions}/>
                </Stack>
            </Grid>
        </Grid>
    )
}

export default MainPage;