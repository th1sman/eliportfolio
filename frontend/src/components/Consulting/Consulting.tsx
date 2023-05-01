import { Box, Paper, Grid, Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import styles from './Consulting.module.css'
import { styled } from '@mui/material/styles';


export interface ConsultingInterface { }

const Item = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    fontSize: '1.2rem',
    padding: theme.spacing(1),
    textAlign: 'center',
    fontFamily: 'Dancing Script',
    color: '#1F273C',
}));


const Consulting: React.FC<ConsultingInterface> = () => {
  

    return (
        <Box className={styles.content} id={'consulting'}>
            <Typography variant='h4' fontFamily='Dancing Script' >
                Asesoria Gastronomica que va dirigida a hoteles, restaurantes, cafeterias, fast food y todo negocio de AA.BB. ( alimentos y bebidas).
            </Typography>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={6} md={4}>
                    <Item>
                        <CardMedia
                            component="img"
                            sx={{ height: '360px' }}
                            image="/11.jpeg"
                        />
                        <Typography variant='h6' fontFamily='Dancing Script' >
                            Gestión de proveedores
                        </Typography>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Item>
                        <CardMedia
                            component="img"
                            sx={{ height: '360px' }}
                            image="/8.jpeg"
                        />
                        <Typography variant='h6' fontFamily='Dancing Script' >
                            Cambios y Costeo  de carta segun estacionalidad y target.
                        </Typography>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Item>
                        <CardMedia
                            component="img"
                            sx={{ height: '360px', }}
                            image="/10.jpeg"
                        />
                        <Typography fontFamily='Dancing Script'>
                            Capacitaciones para el personal
                        </Typography>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Consulting