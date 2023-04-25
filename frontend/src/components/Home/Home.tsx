import { Grid, Paper, Typography } from '@mui/material'
import styles from './Home.module.css'
import Image from 'next/image'

type ImageProps = {
  image: { url: string; title: string; description: string }
}

const ImageComponent: React.FC<ImageProps> = ({ image }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper className={styles.imageContainer}>
        <div className={styles.center}>
          <Image
            loading='lazy'
            className={styles.blur}
            src={image.url}
            alt={image.title}
            fill
          />
          <Typography variant="h4">{image.title}</Typography>
          <Typography variant="subtitle1">{image.description}</Typography>
        </div>
      </Paper>
    </Grid>
  )
}

export interface ImageGridProps { }

const ImageGrid: React.FC<ImageGridProps> = () => {
  const images = [
    { url: "/4.jpeg", title: "Imagen 1", description: "Verduras" },
    { url: "/7.jpeg", title: "Imagen 2", description: "Vino" },
    { url: "/14.jpeg", title: "Imagen 3", description: "Postre" },
  ];
  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 1 }}
      className={styles.sectionContainer}
    >
      {images.map((image) => (
        <ImageComponent key={image.title} image={image} />
      ))}

    </Grid>
  )
}

export default ImageGrid