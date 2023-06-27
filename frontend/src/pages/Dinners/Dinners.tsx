import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import styled from './dinners.module.css'
import Modal from '@/components/Modal/Modal';


const Dinners: React.FC = () => {
  return (
    <Box sx={{
      width: {
        xs: '900px',
        sm: '500px',
        md: '340px',
        lg: '100%',
      },
      height: {
        xs: '250vh',
        sm: '500px',
        md: '500px',
        lg: '100vh',
      },
      backgroundColor: '#EEE5E9'
    }}
      id={'Dinners'}>
      <Grid container spacing={2} className={styled.galleryContainer}>
        <Grid item xs={5} sm={6} md={4}>
          <Card sx={{
            width: {
              xs: '880px',
              sm: '300px',
              md: '200px',
              lg: 'auto',
            }, height: {
              xs: '80vh',
              sm: '70vh',
              md: '70vh',
              lg: '85vh'
            }
          }} >
            <CardActionArea>
              <CardMedia
                component="img"
                className={styled.cardImage}
                image="/12.jpeg"
                alt="Contemplative Reptie"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Galeria 1
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Descripcion Galeria 1
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Modal />
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{
            width: {
              xs: '880px',
              sm: '300px',
              md: '200px',
              lg: 'auto',
            }, height: {
              xs: '80vh',
              sm: '70vh',
              md: '70vh',
              lg: '85vh'
            },
          }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image="/15.jpeg"
                className={styled.cardImage}
                alt="Contemplative Reptie"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Galeria 2
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Galeria 2 Descripción
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <CardActions>
                <Button size="small" variant='contained' color="primary">
                  Ver Galeria
                </Button>
              </CardActions>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{
            width: {
              xs: '880px',
              sm: '300px',
              md: '200px',
              lg: 'auto',
            }, height: {
              xs: '80vh',
              sm: '70vh',
              md: '70vh',
              lg: '85vh'
            }
          }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image="/22.jpeg"
                className={styled.cardImage}
                alt="Contemplative Reptie"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Galeria 3
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Galeria 3 Descripción
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" variant='contained' color="primary">
                Ver Galeria
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dinners