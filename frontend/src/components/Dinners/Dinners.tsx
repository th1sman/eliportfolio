import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import styles from './dinners.module.css'
import Box from '@mui/material/Box'
import GalleryModal from '@/components/Gallery/Gallery';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
  transition: 'box-shadow 0.3s ease-in-out',
  '&:hover': {
    boxShadow: theme.shadows[5],
  }
}));

// colocar imagenes de las demas galerias
const images = [
  {
    original: '/15.jpeg',
    thumbnail: '/thumbnail15.jpeg',
  },
  {
    original: '/13.jpeg',
    thumbnail: '/thumbnail13.jpeg',
  },
  {
    original: '/9.jpeg',
    thumbnail: '/thumbnail9.jpeg',
  },
];

const gallery2 = [
  {
    original: '/11.jpeg',
    thumbnail: '/thumbnail15.jpeg',
  },
  {
    original: '/9.jpeg',
    thumbnail: '/thumbnail13.jpeg',
  },
  {
    original: '/19.jpeg',
    thumbnail: '/thumbnail9.jpeg',
  },
]

const gallery3 = [
  {
    original: '/2.jpeg',
    thumbnail: '/thumbnail15.jpeg',
  },
  {
    original: '/7.jpeg',
    thumbnail: '/thumbnail13.jpeg',
  },
  {
    original: '/14.jpeg',
    thumbnail: '/thumbnail9.jpeg',
  },
]

interface DinnerInterface {

}

const Dinners: React.FC<DinnerInterface> = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Item>
            <GalleryModal images={images} />
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Item>
            <GalleryModal images={gallery2} />
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Item>
            <GalleryModal images={gallery3} />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dinners