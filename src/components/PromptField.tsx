import { TextField, InputLabel  } from "@mui/material";

const PromptField = (props: {setPromptText: Function}) => {
    return (
        <TextField 
            sx={{width: ['100%', '95%', '95%', '87.5%', '65%']}}
            placeholder="Enter a prompt!"
            multiline
            rows={10}
            variant='outlined'
            onChange={(e) => props.setPromptText(e.target.value)}
        />
    )
}

export default PromptField;