import { TextField  } from "@mui/material";

const PromptField = (props: {trackPromptText: Function}) => {
    return (
        <TextField 
            sx={{width: ['90%', '85%', '80%', '75%', '65%']}}
            placeholder="Enter a prompt!"
            multiline
            rows={10}
            variant='outlined'
            onChange={(e) => props.trackPromptText(e.target.value)}
        />
    )
}

export default PromptField;