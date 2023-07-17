import { Grid, Box } from '@mui/material'
import Image from 'next/image'
import styles from './Home.module.css'
import FloatingShadowBox from '../FloatingShadowBox'


type ImageProps = {
  image: { url: string; title: string; }
}


const ImageComponent: React.FC<ImageProps> = ({ image: { url, title } }) => {
  return (
    <Grid item xs={12} sm={6} md={4} >
      <Image
        src={url}
        alt={title}
        width={420}
        height={630}
        priority={true}
        className={styles.image}
      />
      <Image
        src={url}
        alt={title}
        width={420}
        height={630}
        priority={true}
        className={styles.secondImage}
      />
    </Grid>
  );
}

export interface ImageGridProps { }

const images = [
  { url: "/4.jpeg", title: "Imagen 1" },
  { url: "/7.jpeg", title: "Imagen 2" },
  { url: "/16.jpeg", title: "Imagen 3" }
];

const ImageGrid: React.FC<ImageGridProps> = () => {

  return (
    <Box
      sx={{
        width: {
          xs: '230vw',
          sm: '100%',
          md: '100%',
          lg: '100%',
        },
        height: {
          xs: '485vh',
          sm: '100%',
          md: '150vh',
          lg: '110vh',
        }
      }}>
      <FloatingShadowBox>
        <Grid
          container
        >
          {images.map((image) => (
            <ImageComponent key={image.title} image={image} />
          ))}

        </Grid>
      </FloatingShadowBox>
    </Box>

  )
}

export default ImageGrid