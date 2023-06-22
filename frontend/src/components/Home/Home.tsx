import { Grid, Box } from '@mui/material'
import Image from 'next/image'
import styles from './Home.module.css'


type ImageProps = {
  image: { url: string; title: string; }
}


const ImageComponent: React.FC<ImageProps> = ({ image }) => {
  return (
    <Grid item xs={12} sm={6} md={4} >
      <Image
        src={image.url}
        alt={image.title}
        width={420}
        height={630}
        className={styles.image}
        style={{
          objectFit: 'cover',
          objectPosition: '50% 50%',
        }}
      />
    </Grid>
  );
}

export interface ImageGridProps { }

const ImageGrid: React.FC<ImageGridProps> = () => {
  const images = [
    { url: "/4.jpeg", title: "Imagen 1" },
    { url: "/7.jpeg", title: "Imagen 2" },
    { url: "/16.jpeg", title: "Imagen 3" }
  ];
  return (
    <Box sx={{
      width: {
        xs: '100%',
        sm: '100%',
        md: '100%',
      },
      height: {
        xs: '100%',
        sm: '100%',
        md: '100vh',
        lg: '100vh',
      },
    }}>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 2, sm: 2, md: 1, lg: 2 }}
      >
        {images.map((image) => (
          <ImageComponent key={image.title} image={image} />
        ))}

      </Grid>
    </Box>
  )
}

export default ImageGrid