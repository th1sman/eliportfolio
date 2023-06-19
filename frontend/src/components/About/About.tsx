import * as React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import style from './About.module.css'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import NextWeekIcon from '@mui/icons-material/NextWeek';
import WorkHistoryRoundedIcon from '@mui/icons-material/WorkHistoryRounded';

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
                        </Box>
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
                    }}>
                        <List disablePadding>
                            <ListItem alignItems='flex-start'>
                                <NextWeekIcon className={style.itemIcon} />
                                <ListItemText className={style.itemText} primary={
                                    <React.Fragment>
                                        <Typography
                                            textAlign='justify'
                                            variant="h5"
                                        >
                                            Trabajamos con un plan de acción
                                        </Typography>
                                    </React.Fragment>
                                }
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                textAlign='justify'
                                                variant="body2"
                                            >
                                                En donde se determinan puntos criticos en el cual el  negocio esta filtrando activos, o bien areas que se pueden mejorar para generar una mejor experiencia
                                                a su potencial cliente y para lograr obtener mejor margen de utilidad desde la operación.
                                            </Typography>
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider component='li' />
                            <ListItem alignItems='flex-start'>
                                <WorkHistoryRoundedIcon className={style.itemIcon} />
                                <ListItemText className={style.itemText} primary={
                                    <React.Fragment>
                                        <Typography
                                            textAlign='justify'
                                            variant="h5"
                                        >
                                            Trabajamos con un plan de acción
                                        </Typography>
                                    </React.Fragment>
                                }
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                textAlign='justify'
                                                variant="body2"
                                            >
                                                En donde se determinan puntos criticos en el cual el  negocio esta filtrando activos, o bien areas que se pueden mejorar para generar una mejor experiencia
                                                a su potencial cliente y para lograr obtener mejor margen de utilidad desde la operación.
                                            </Typography>
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                        </List>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    )
}

export default About