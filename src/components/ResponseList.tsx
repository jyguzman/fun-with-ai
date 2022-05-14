import Response from "./Response";
import { Stack, Skeleton } from "@mui/material";
import Completion from "../types/Completion";

const ResponseList = (props: {completions: Completion[]}) => {
    return (
        <Stack spacing={2} sx={{width: '100%'}} justifyContent='center' alignItems='center'>
            {props.completions.slice().reverse()
                .map((completion: Completion, index: number) => {
                return (
                    <Response key={index}
                        prompt={completion.prompt}
                        response={completion.response}
                    />
                )
            })}
        </Stack>
    )
}

export default ResponseList;