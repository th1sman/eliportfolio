import { Grid, Paper, Typography } from '@mui/material'
import Image from 'next/image'

type ImageProps = {
  image: { url: string; title: string; description: string }
}

const ImageComponent: React.FC<ImageProps> = ({ image }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper>       
          <Image
            loading='lazy'
            src={image.url}
            alt={image.title}
            width={610}
            height={850}
            style={{        
              objectFit: 'fill',
              aspectRatio: '1 / 1'
            }}
           
          />
          <Typography variant="h4">{image.title}</Typography>
          <Typography variant="subtitle1">{image.description}</Typography>
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
    >
      {images.map((image) => (
        <ImageComponent key={image.title} image={image} />
      ))}

    </Grid>
  )
}

export default ImageGrid