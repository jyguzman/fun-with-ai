import { Typography, Grid } from "@mui/material";

const Header = (props: {text: string}) => {
    return (
        <Grid item sx={{width: ['100%', '95%', '95%', '87.5%', '80%'], paddingBottom: '2%'}}>
            <Typography  variant='h4' sx={{fontWeight: 'bold'}}>
                {props.text}
            </Typography>
        </Grid>
    )
}

export default Header;