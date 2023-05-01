import { Box, Grid } from '@mui/material'
import  Image  from 'next/image'


export interface AboutInterface { }

const About: React.FC<AboutInterface> = () => {

    return (
        <div id={'about'}>
            <Grid container >
                <Grid item xs={12} sm={6} md={6}>
                    <Box sx={{
                        width: 750,
                    }}
                    >
                        <Image
                            src={'/45.jpeg'}
                            alt={'Imagen About'}
                            width={750}
                            height={500}
                            priority
                        />
                    </Box>
                    <Box sx={{
                        width: 750,
                        paddingBottom: '40px',
                        borderRadius: '0.55em',
                        cursor: 'pointer',
                        fontFamily: 'Dancing Script',
                        color: 'white'
                    }}
                    >
                        Mi nombre es Eliezer Jara Castillo
                        Chef Profesional con experiencia en el rubro Horeca (Hoteles, Restaurantes, Cafeterias)
                        Actualmente me desempeño como Chef Consultor, asesorando a pequeños y medianos emprendedores a rentabilizar de mejor manera sus negocios de AA.BB.
                        Determinando planes de acción para lograr Objetivos claros desde la operación y administración de tu negocio, visualizando resultados positivos en menor tiempo
                    </Box>


                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Box sx={{
                        width: 750,
                        paddingBottom: '40px',
                        borderRadius: '0.55em',
                        cursor: 'pointer',
                        fontFamily: 'Dancing Script',
                        
                    }}
                    >
                        Mi nombre es Eliezer Jara Castillo
                        Chef Profesional con experiencia en el rubro Horeca (Hoteles, Restaurantes, Cafeterias)
                        Actualmente me desempeño como Chef Consultor, asesorando a pequeños y medianos emprendedores a rentabilizar de mejor manera sus negocios de AA.BB.
                        Determinando planes de acción para lograr Objetivos claros desde la operación y administración de tu negocio, visualizando resultados positivos en menor tiempo
                    </Box>
                    <Box sx={{
                        width: 750,
                    }}
                    >
                        <Image
                            src={'/12.jpeg'}
                            alt={'Imagen About'}
                            width={750}
                            height={500}
                            priority
                        />
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default About