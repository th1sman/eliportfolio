import { Box, Grid } from '@mui/material'
import FloatingShadowBox from '../FloatingShadowBox'
import Image from 'next/image'


export interface AboutInterface { }

const About: React.FC<AboutInterface> = () => {

    return (
        <Box component="div" id={'about'}>
            <Grid container >
                <Grid item xs={12} sm={6} md={6} textAlign="center">
                    <Box sx={{
                        width: 750,
                        paddingTop: 2,
                        paddingBottom: 4,
                        color: 'white'
                    }}
                    >
                        <FloatingShadowBox>
                            <Image
                                src={'/45.jpeg'}
                                alt={'Imagen About'}
                                width={800}
                                height={500}
                                priority
                            />
                        </FloatingShadowBox>
                    </Box>
                    <Box sx={{
                        width: 750,
                        paddingBottom: '40px',
                        borderRadius: '0.55em',
                        cursor: 'pointer',
                        color: 'white'
                    }}
                    >
                        Mi nombre es Eliezer Jara Castillo
                        Chef Profesional con experiencia en el rubro Horeca (Hoteles, Restaurantes, Cafeterias)
                        Actualmente me desempeño como Chef Consultor, asesorando a pequeños y medianos emprendedores a rentabilizar de mejor manera sus negocios de AA.BB.
                        Determinando planes de acción para lograr Objetivos claros desde la operación y administración de tu negocio, visualizando resultados positivos en menor tiempo

                    </Box>

                </Grid>
                <Grid item xs={12} sm={6} md={6} textAlign="center">
                    <Box sx={{
                        width: 750,
                        paddingBottom: 2,
                        borderRadius: '0.55em',
                        cursor: 'pointer',
                        fontFamily: 'Dancing Script',
                        color: 'white'
                    }}
                    >
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Cursus in hac habitasse platea dictumst quisque sagittis. Nisl vel pretium lectus quam id leo. Phasellus 
                        egestas tellus rutrum tellus. Porta non pulvinar neque laoreet suspendisse interdum. 
                        At quis risus sed vulputate odio ut enim blandit volutpat. Egestas tellus rutrum tellus pellentesque eu tincidunt. Posuere ac ut consequat semper viverra nam libero justo laoreet. Nunc sed velit dignissim sodales ut eu sem integer. Vivamus arcu felis bibendum ut tristique et egestas. Tristique sollicitudin nibh sit amet. Adipiscing elit duis tristique sollicitudin nibh. Pellentesque habitant morbi tristique senectus et. 
                        Faucibus purus in massa tempor nec. Tortor at risus viverra adipiscing at
                        . Vitae sapien pellentesque habitant morbi tristique senectus et netus. Consectetur adipiscing elit duis tristique sollicitudin.
                    </Box>
                    <Box sx={{
                        width: 750,
                    }}
                    >
                        <FloatingShadowBox>
                            <Image
                                src={'/12.jpeg'}
                                alt={'Imagen About'}
                                width={750}
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