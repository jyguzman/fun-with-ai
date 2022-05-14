import { Button } from "@mui/material";

const SubmitPromptButton = (props: {submitPrompt: Function}) => {
    return (
        <Button variant="contained" 
            onClick={() => props.submitPrompt()}>
            Submit
        </Button>
    )
}

export default SubmitPromptButton;