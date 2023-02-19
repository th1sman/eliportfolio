import { Grid, Paper } from '@mui/material'
import Image from 'next/image'


const images = [
    { url: '/../../public/2.jpeg', title: 'Imagen 1', description: 'Descripción de la imagen 1' },
    { url: '', title: 'Imagen 2', description: 'Descripción de la imagen 2' },
    { url: '', title: 'Imagen 3', description: 'Descripción de la imagen 3' },
  ];

export interface HomeInterface { }

const Home: React.FC<HomeInterface> = () => {
    return (
        <Grid container spacing={3} sx={{ paddingTop: '5%'}}>
        {images.map((image) => (
          <Grid item xs={12} sm={6} md={4} key={image.title}>
            <Paper>
              <Image src={image.url} alt={image.title} width={100} height={100}/>
              <h3>{image.title}</h3>
              <p>{image.description}</p>
            </Paper>
          </Grid>
        ))}
      </Grid>
    )
}

export default Home