import { Grid, Box } from '@mui/material'
import Image from 'next/image'

type ImageProps = {
  image: { url: string; title: string; description: string }
}

const ImageComponent: React.FC<ImageProps> = ({ image }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Image
        loading='lazy'
        src={image.url}
        alt={image.title}
        width={500}
        height={650}
        style={{
          objectFit: 'contain',
        }}

      />
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
    <Box sx={{
      width: {
        xs: '100%',
        sm: '100%',
        md: '100%',
      },
      border: {
        xs: '2px solid green',
        sm: '2px solid yellow',
        md: '2px solid blue',
        lg: '2px solid red',
        xl: '2px solid orange'
      }
    }}>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 1, lg: 2 }}
      >
        {images.map((image) => (
          <ImageComponent key={image.title} image={image} />
        ))}

      </Grid>
    </Box>
  )
}

export default ImageGrid