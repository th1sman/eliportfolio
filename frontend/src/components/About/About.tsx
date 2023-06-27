import * as React from 'react'
import { Box, Grid, Typography, Button } from '@mui/material'
import style from './About.module.css'
import FloatingShadowBox from '../FloatingShadowBox'
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'

const About: React.FC = () => {

    const videoUrl = '/video.mp4'

    return (
        <Box sx={{
            width: {
                xs: '230vw',
                sm: '100vw',
                md: '100%',
                lg: '100%',
            },
            height: {
                xs: '220vh',
                sm: '100vh',
                md: '600px',
                lg: '100vh',
            },
        }}
            id={'about'}>
            <FloatingShadowBox>
                <Grid container>
                    <Grid item xs={12} sm={6} md={5} lg={6} textAlign='center'>
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
                                lg: '90vh'
                            }
                        }}>
                            <Box className={style.container}>
                                <Typography variant='h5' className={style.phrase} fontFamily="Poppins">
                                    Rubro Horeca como empresa de consultorias, se enfoca en llevar
                                    a un punto de estabilidad la rentabiliad de un negocio de AA.BB
                                </Typography>
                                <Typography variant='body1' className={style.phrase} fontFamily="Poppins">
                                    Trabajamos con un plan de acción, en donde se determinan puntos
                                    criticos en el cual el negocio esta filtrando activos, o bien areas
                                    que se pueden mejorar para generar una mejor experiencia a su potencial
                                    cliente y para lograr obtener mejor margen de utilidad desde la operación.
                                </Typography>
                                <Typography variant='body1' className={style.phrase} fontFamily="Poppins">
                                    Somos concientes que desde nuestra labor no solo podemos mejorar su empresa de AA.BB, sino que
                                    dentro de nuestra planificación capacitamos a su personal con metodos informales de Mindfullnes,
                                    fortaleciendo y asegurando el trabajo en equipo y formando lideres para que su empresa pueda crear un
                                    proposito frente a la sociedad mucho mas sustentable y sostenible en el tiempo.
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} textAlign="center" alignContent="center">
                        <Box sx={{
                            width: {
                                xs: '100%',
                                sm: '500px',
                                md: '500px',
                                lg: '100%'
                            },
                            height: {
                                xs: '850px',
                                sm: '500px',
                                md: '500px',
                                lg: '100vh'
                            }
                        }}>
                            <VideoPlayer src={videoUrl} />
                        </Box>
                    </Grid>
                </Grid>
            </FloatingShadowBox>
        </Box>
    )
}

export default About