import { Alert, Collapse, Button } from "@mui/material";

const InvalidEngineAlert = (props: {open: boolean, closeAlert: Function}) => {
    
    return (
        <Collapse in={props.open}>
          <Alert
            action = {
              <Button color="inherit" size="small"
                onClick={() => props.closeAlert()}
                sx={{}}>
                  Close
              </Button>
            }
            severity="error"
            color='error'
            sx={{ mb: 2, 
              '.MuiAlert-icon': {
                display: "flex", alignSelf: 'center'
              }
            }}
          >
            Please choose an engine from the dropdown.
          </Alert>
      </Collapse>
    );
}

export default InvalidEngineAlert;