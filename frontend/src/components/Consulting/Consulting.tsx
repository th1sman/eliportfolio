import { Box, Grid, Button, Typography } from '@mui/material'
import Image from 'next/image'
import style from './Consulting.module.css'


export interface ConsultingInterface { }

const Consulting: React.FC<ConsultingInterface> = () => {
    return (
        <Box sx={{
            width: {
                xs: '230vw',
                sm: '100%',
                md: '100%',
                lg: '100%',
            },
            height: {
                xs: '250vh',
                sm: '150vh',
                md: '100vh',
                lg: '60vh'
            },
            backgroundColor: '#EEE5E9',
        }}
            id={'consulting'}
        >
            <Grid container spacing={5} className={style.containerText} >
                <Grid item xs={12} sm={6} md={4} >
                    <Image
                        src={'/89.jpeg'}
                        alt={'Consulting1'}
                        width={420}
                        className={style.image}
                        height={700}
                        style={{
                            objectFit: 'scale-down',
                            objectPosition: '50% 50%'
                        }}
                    />

                    <Typography variant='h5' className={style.text} fontFamily="Poppins">
                        Dentro de nuestra principal misión y visión como asesores
                        gastronómicos esta mejorar la alimentación y concientizar a
                        nuestra sociedad frente a distintos problemas que nos aquejan
                        mundialmente.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Image
                        src={'/69.jpeg'}
                        alt={'Consulting2'}
                        width={420}
                        height={600}
                        className={style.image}
                        style={{
                            objectFit: 'scale-down',
                            objectPosition: '50% 50%',
                        }}
                    />
                    <Typography variant='h5' className={style.text} fontFamily="Poppins">
                        Como sociedad en el mundo tenemos hambrunas, pero a su vez
                        ilogicamente desechamos y desperdiciamos alimentos en inimaginables
                        cantidades.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4} >
                    <Image
                        src={'/87.jpeg'}
                        alt={'Consulting3'}
                        width={420}
                        height={600}
                        className={style.image}
                        style={{
                            objectFit: 'scale-down',
                            objectPosition: '50% 50%',
                        }}
                    />
                    <Typography variant='h5' className={style.text} fontFamily="Poppins">
                        Realizar propuestas de cartas y menus con una planificación
                        y asesoramiento en donde el desperdicio de alimentos sea muchisimo
                        menor, no solo mejorara su negocio y lo volvera mas rentable.
                    </Typography>
                </Grid>
            </Grid>
        </Box >
    )
}

export default Consulting