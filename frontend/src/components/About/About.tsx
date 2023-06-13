import { Box, Grid, Typography } from '@mui/material'
import FloatingShadowBox from '../FloatingShadowBox'
import Image from 'next/legacy/image'


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
                xs: '200vh',
                sm: '600px',
                md: '600px',
                lg: '700px'
            }
        }}
            id={'about'}>
            <Grid container>
                <Grid p={5} item xs={12} sm={6} md={6} lg={6} textAlign='center'>
                    <FloatingShadowBox>
                        <Image
                            layout='responsive'
                            src={'/3.jpeg'}
                            alt={'Imagen About'}
                            width={700}
                            height={500}
                            priority

                        />
                    </FloatingShadowBox>
                    <Box sx={{
                        width: {
                            xs: '100%',
                            sm: '500px',
                            md: '100%',
                            lg: '100%',
                        },
                        paddingTop: '20px',
                        borderRadius: '0.55em',
                        cursor: 'pointer',
                        color: 'white',
                    }}
                    >
                        <Typography
                            paragraph={true}
                            variant="body2"
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

                </Grid>
                <Grid item xs={12} sm={6} md={6} textAlign="center" alignContent="center">
                    <Box sx={{
                        width: {
                            xs: '100%',
                            sm: '200px',
                            md: '100%',
                            lg: '100%',
                        },
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
                    <Box>
                        <FloatingShadowBox>
                            <Image
                                src={'/12.jpeg'}
                                layout='responsive'
                                alt={'Imagen About'}
                                width={700}
                                height={400}
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