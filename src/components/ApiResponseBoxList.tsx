import ApiResponseBox from "./ApiResponseBox";
import { Stack, Grid } from "@mui/material";
import Completion from "../types/Completion";

const ApiResponseBoxList = (props: {completions: Completion[]}) => {
    const completions = props.completions.reverse();
    return (
        <Stack spacing={2} justifyContent='center' alignItems='center'>
            {completions
                .map((completion: Completion, index: number) => {
                return (
                    <ApiResponseBox key={index}
                        prompt={completion.prompt}
                        response={completion.response}
                        time={completion.time}
                    />
                )
            })}
        </Stack>
    )
}

export default ApiResponseBoxList;