import { Box, Grid, Typography } from '@mui/material'
import FloatingShadowBox from '../FloatingShadowBox'
import Image from 'next/image'


const About: React.FC = () => {

    return (
        <Box sx={{
            paddingTop: '100px',
            width: {
                xs: '100px',
                sm: '200px',
                md: '600px',
                lg: '100%'
            },
        }}
            id={'about'}>
            <Grid container>
                <Grid item xs={12} sm={6} md={6} lg={6} textAlign='center'
                    sx={{
                     paddingLeft: 30,
                    }}>
                    <Box>
                        <FloatingShadowBox>
                            <Image
                                src={'/3.jpeg'}
                                alt={'Imagen About'}
                                width={500}
                                height={500}
                                priority
                            />
                        </FloatingShadowBox>
                    </Box>
                    <Box sx={{
                        p: 2,
                        width: 500,
                        paddingBottom: '20px',
                        borderRadius: '0.55em',
                        cursor: 'pointer',
                        color: 'white',
                    }}
                    >
                        <Typography
                            paragraph={true}
                            variant="body1"
                            sx={{
                                fontStyle: 'italic',
                                fontFamily: 'Poppins'
                            }}>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Cursus in hac habitasse platea dictumst quisque sagittis. Nisl vel pretium lectus quam id leo. Phasellus
                            egestas tellus rutrum tellus. Porta non pulvinar neque laoreet suspendisse interdum.
                        </Typography>

                    </Box>

                </Grid>
                <Grid item xs={12} sm={6} md={6} textAlign="center" alignContent="center"
                 sx={{
                    paddingLeft: 19,
                 }}>
                    <Box sx={{
                        p: 2,
                        width: 500,
                        borderRadius: '0.55em',
                        cursor: 'pointer',
                        color: 'white',
                    }}
                    >
                        <Typography
                            paragraph={true}
                            variant="body1"
                            sx={{
                                fontStyle: 'italic',
                                fontFamily: 'Poppins'
                            }}>
                            Mi nombre es Eliezer Jara Castillo
                            Chef Profesional con experiencia en el rubro Horeca (Hoteles, Restaurantes, Cafeterias)
                            Actualmente me desempeño como Chef Consultor, asesorando a pequeños y medianos emprendedores a rentabilizar de mejor manera sus negocios de AA.BB.
                            Determinando planes de acción para lograr Objetivos claros desde la operación y administración de tu negocio, visualizando resultados positivos en menor tiempo
                        </Typography>
                    </Box>
                    <Box>
                        <FloatingShadowBox>
                            <Image
                                src={'/12.jpeg'}
                                alt={'Imagen About'}
                                width={500}
                                height={500}
                                priority
                            />
                        </FloatingShadowBox>
                    </Box>
                </Grid>
                
            </Grid>
        </Box>
    )
}

export default About