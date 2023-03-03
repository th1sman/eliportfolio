import { Box, Grid } from '@mui/material'
import Image from 'next/image'
import styles from './About.module.css'

export interface AboutInterface { }

const About: React.FC<AboutInterface> = () => {
    return (
        <div id={'about'}>
            <Grid container>
                <Grid item xs={12} sm={6} md={6}>
                    <Box className={styles.imageContainer} >
                        <Image
                            src={'/6.jpeg'}
                            alt={'Imagen About'}
                            fill
                            style={{ objectFit: 'contain' }}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Box sx={{ backgroundColor: '#181a1b' }} className={styles['content']}>
                        Mi nombre es Eliezer Jara Castillo
                        Chef Profesional con experiencia en el rubro Horeca (Hoteles, Restaurantes, Cafeterias)
                    </Box>
                    <Box sx={{ backgroundColor: '#181a1b' }} className={styles['content']}>
                        Actualmente me desempeño como Chef Consultor, asesorando a pequeños y medianos emprendedores a rentabilizar de mejor manera sus negocios de AA.BB.
                        Determinando planes de acción para lograr Objetivos claros desde la operación y administración de tu negocio, visualizando resultados positivos en menor tiempo
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default About