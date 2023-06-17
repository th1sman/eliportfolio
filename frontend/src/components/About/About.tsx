import { Box, Grid, Typography } from '@mui/material'
import FloatingShadowBox from '../FloatingShadowBox'
import Image from 'next/image'
import style from './About.module.css'

const About: React.FC = () => {

    return (
        <Box sx={{
            width: {
                xs: '850px',
                sm: '100vw',
                md: '100%',
                lg: '100%',
            },
            height: {
                xs: '500vh',
                sm: '600px',
                md: '600px',
                lg: '850px'
            }
        }}
            id={'about'}>
            <Grid container>
                <Grid item xs={12} sm={6} md={6} lg={6} textAlign='center'>
                    <Box className={style.image} sx={{
                        width: {
                            xs: '500px',
                            sm: '500px',
                            md: '500px',
                            lg: '100%'
                        },
                        height: {
                            xs: '500px',
                            sm: '500px',
                            md: '500px',
                            lg: '400px'
                        },
                        paddingTop: {
                            lg: '100px'
                        },
                        border: '2px solid green',
                    }}>
                        <Typography variant='h5'>
                            Rubro horeca como empresa de consultorias, se enfoca en llevar
                            a un punto de estabilidad la rentabiliad de un negocio de AA.BB
                        </Typography>
                        <Typography variant='body1'>
                            Trabajamos con un plan de acción, en donde se determinan puntos
                            criticos en el caul el negocio esta filtrando activos, o bien areas
                            que se pueden mejorar para generar una mejor experiencia a su potencial
                            cliente y para lograr obtener mejor margen de utilidad desde la operacion.
                        </Typography>
                    </Box>


                </Grid>
                <Grid item xs={12} sm={6} md={6} textAlign="center" alignContent="center">
                    <Box sx={{
                        width: {
                            xs: '500px',
                            sm: '500px',
                            md: '500px',
                            lg: '100%'
                        },
                        height: {
                            xs: '500px',
                            sm: '500px',
                            md: '500px',
                            lg: '500px'
                        },
                        border: '2px solid green'
                    }}>

                    </Box>

                </Grid>

            </Grid>
        </Box>
    )
}

export default About