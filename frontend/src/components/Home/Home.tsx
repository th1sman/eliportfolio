import { Grid, Paper } from '@mui/material'
import styles from './Home.module.css'
import Image from 'next/image'

const images = [
  { url: '/16.jpeg', title: 'Imagen 1' },
  { url: '/3.jpeg', title: 'Imagen 2' },
  { url: '/14.jpeg', title: 'Imagen 3'},
];

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }} className={styles.sectionContainer}>
      {images.map((image) => (
        <Grid 
          item xs={12} sm={6} md={4} key={image.title} >
          <Paper elevation={0} className={styles.imageContainer}>
            <Image
              loading='lazy'
              className={styles['blur']}
              src={image.url} 
              alt={image.title} 
              fill
              />
          </Paper>
        </Grid>
      ))}
    </Grid>
  )
}

export default Home