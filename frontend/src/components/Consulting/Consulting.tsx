import { Box, Paper, Grid, Button, Card, CardContent, CardMedia, Typography } from '@mui/material'

export interface ConsultingInterface { }

const Consulting: React.FC<ConsultingInterface> = () => {
    return (
        <Box
            sx={{
                marginTop: 5,
                height: 950,
             
            }}
            id={'consulting'}
        >
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4} textAlign="center">
                    <CardMedia
                        component="img"
                        sx={{
                            borderBottom: "1px solid grey",
                            height: "80%",
                            
                        }}
                        image="/11.jpeg"
                    />
                    <Typography variant='h6' fontFamily='Dancing Script' >
                        Gestión de proveedores
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4} textAlign="center">
                    <CardMedia
                        component="img"
                        sx={{ height: "80%" }}
                        image="/8.jpeg"
                    />
                    <Typography variant='h6' fontFamily='Dancing Script' >
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
                        sx={{
                            letterSpacing: 1,
                            lineHeight: 1.5,
                            fontSize: '1.5em',
                        }}
                        fontFamily='Dancing Script'>
                        Capacitaciones para el personal
                    </Typography>
                </Grid>
            </Grid>
        </Box >
    )
}

export default Consulting