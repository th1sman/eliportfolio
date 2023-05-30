import { Grid, Box } from '@mui/material'
import Image from 'next/legacy/image'

type ImageProps = {
  image: { url: string; title: string; description: string }
}

const ImageComponent: React.FC<ImageProps> = ({ image }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Image
        loading='lazy'
        layout='responsive'
        src={image.url}
        alt={image.title}
        width={800}
        height={1100}
        style={{
          objectFit: 'contain',
        }}

      />
    </Grid>
  );
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
        xs: '850px',
        sm: '100%',
        md: '100%',
      },
      height: {
        xs: '100%',
        sm: '100%',
        md: '100vh',

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