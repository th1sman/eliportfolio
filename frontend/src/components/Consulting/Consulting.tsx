import { Box, Paper, Grid, Button, Card, CardContent, CardMedia, Typography } from '@mui/material'

export interface ConsultingInterface { }

const Consulting: React.FC<ConsultingInterface> = () => {
    return (
        <Box
            sx={{
                marginTop: 5,
                maxHeight: '85%',
            }}
            id={'consulting'}
        >
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4} textAlign="center">
                    <CardMedia
                        component="img"
                        sx={{
                            height: "80%",

                        }}
                        image="/11.jpeg"
                    />
                    <Typography variant='subtitle1' sx={{
                        fontStyle: 'italic',
                        fontFamily: 'Poppins',
                        fontSize: '1.1em'
                    }}>
                        Gestión de proveedores
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4} textAlign="center">
                    <CardMedia
                        component="img"
                        sx={{ height: "80%" }}
                        image="/8.jpeg"
                    />
                    <Typography variant='subtitle1' sx={{
                        fontStyle: 'italic',
                        fontFamily: 'Poppins',
                        fontSize: '1.1em'
                    }}>
                        Cambios y Costeo  de carta segun estacionalidad y target.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4} textAlign="center">
                    <CardMedia
                        component="img"
                        sx={{ height: "80%" }}
                        image="/10.jpeg"
                    />
                    <Typography
                        variant='subtitle1' sx={{
                            fontStyle: 'italic',
                            fontFamily: 'Poppins',
                            fontSize: '1.1em'
                        }}>
                        Capacitaciones para el personal
                    </Typography>
                </Grid>
            </Grid>
        </Box >
    )
}

export default Consulting