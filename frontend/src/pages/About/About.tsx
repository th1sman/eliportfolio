import { Box, Paper, Grid } from '@mui/material'
import Image from 'next/image'
import styles from './About.module.css'

export interface AboutInterface { }

const About: React.FC<AboutInterface> = () => {
    return (
        <Box sx={{ flexGrow: 1 }} id={'about'}>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <Paper elevation={0} className={styles.imageContainer}>
                        <Image
                            src={'/6.jpeg'}
                            alt={'Imagen About'}
                            fill
                            style={{ objectFit: 'contain' }}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={1} className={styles['content']}>
                        Mi nombre es Eliezer Jara Castillo
                        Chef Profesional con experiencia en el rubro Horeca (Hoteles, Restaurantes, Cafeterias)
                    </Paper>
                    <Paper elevation={1} className={styles['content']}>
                        Actualmente me desempeño como Chef Consultor, asesorando a pequeños y medianos emprendedores a rentabilizar de mejor manera sus negocios de AA.BB.
                        Determinando planes de acción para lograr Objetivos claros desde la operación y administración de tu negocio, visualizando resultados positivos en menor tiempo
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}

export default About