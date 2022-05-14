import { TextField, Autocomplete } from "@mui/material";

const EngineSelect = (props: {engines: string[], handleEngineSelect: Function}) => {
    return (
      <Autocomplete
        id="breed-search-bar"
        defaultValue={'text-curie-001'}
        options={props.engines}
        getOptionLabel={(engine: string) => engine}
        onChange={(e, val) => props.handleEngineSelect(e, val)}
        renderInput={(params: any) => <TextField {...params} 
            label="Choose engine" variant="outlined" />}
      />
    );
}

export default EngineSelect;