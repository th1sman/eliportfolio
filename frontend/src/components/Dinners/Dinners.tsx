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
}));

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

interface DinnerInterface {

}

const Dinners: React.FC<DinnerInterface> = () => {
  return (
    <div id={'dinners'}>
    <Box className={styles.dinnerContainer} sx={{ flexGrow: 1 }}>
      <Grid className={styles.dinners} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 6, md: 12 }} >
          <Grid item xs={2} sm={4} md={4}>
            <Item>
              <GalleryModal images={images} />
            </Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item>Cena</Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item>Cena</Item>
          </Grid>
      </Grid>
    </Box>
    </div>
  );
}

export default Dinners