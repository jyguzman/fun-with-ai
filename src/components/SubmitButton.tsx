import { Button } from "@mui/material";

const SubmitButton = (props: {submitPrompt: Function}) => {
    
    const styles = {
        button: {
            padding: '2% 5%',
            marginTop: 0,
            FontFace: 'Roboto',
            fontSize: '85%'
        }
    }
    
    return (
        <Button variant="contained" 
            sx={styles.button}
            onClick={() => props.submitPrompt()}>
            Submit
        </Button>
    )
}

export default SubmitButton;