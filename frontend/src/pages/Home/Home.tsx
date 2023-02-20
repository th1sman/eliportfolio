import { Grid, Paper } from '@mui/material'
import styles from './Home.module.css'
import Image from 'next/image'

const images = [
  { url: '/16.jpeg', title: 'Imagen 1', description: 'Descripción de la imagen 2' },
  { url: '/3.jpeg', title: 'Imagen 2', description: 'Descripción de la imagen 2' },
  { url: '/14.jpeg', title: 'Imagen 3', description: 'Descripción de la imagen 3' },
];

export interface HomeInterface { }

const Home: React.FC<HomeInterface> = () => {
  return (
    <Grid container spacing={1} sx={{ paddingTop: '5%', paddingBottom: '5%'}}>
      {images.map((image) => (
        <Grid 
          item xs={12} sm={6} md={4} key={image.title} >
          <Paper elevation={0} className={styles['image-container']}>
            <Image
              src={image.url} 
              alt={image.title} 
              fill
              style={{ objectFit: 'contain'}}
              />
          </Paper>
        </Grid>
      ))}
    </Grid>
  )
}

export default Home