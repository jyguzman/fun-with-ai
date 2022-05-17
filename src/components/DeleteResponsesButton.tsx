import { Button } from "@mui/material";

const DeleteResponsesButton = (props: {deleteResponses: Function}) => {
    
    const styles = {
        button: {
            padding: '1.5% 5%',
            marginTop: 0,
            FontFace: 'Roboto',
            fontSize: '85%',
        }
    }
    
    return (
        <Button variant="contained" 
            sx={styles.button}
            onClick={() => props.deleteResponses()}>
            Delete Responses
        </Button>
    )
}

export default DeleteResponsesButton;