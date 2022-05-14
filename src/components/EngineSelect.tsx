import { TextField, Autocomplete } from "@mui/material";

const EngineSelect = (props: {engines: string[], handleEngineSelect: Function}) => {
    return (
      <Autocomplete
        sx={{width: ['100%', '75%']}}
        id="engine-search-bar"
        aria-required
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