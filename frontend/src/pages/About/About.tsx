import { Box, Paper, Grid } from '@mui/material'

export interface AboutInterface { }

const About: React.FC<AboutInterface> = () => {
    return (
        <Box sx={{ flexGrow: 1}}>
        <Grid container spacing={1}>
            <Grid item xs={6}>
                <Paper elevation={1}>
                    Imagen
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper elevation={1}>
                    Texto
                </Paper>
            </Grid>
        </Grid>
        <Grid container sx={{ paddingTop: '20px'}}>
            <Grid item xs={12}>
                <Paper elevation={1}>
                    Mas Texti
                </Paper>
            </Grid>
        </Grid>
        </Box>
    )
}

export default About