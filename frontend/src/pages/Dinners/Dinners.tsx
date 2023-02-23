import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import styles from './dinners.module.css'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

interface DinnerInterface {
  name: string
  description: string;
  images: string[]
}

const Dinners: React.FC<DinnerInterface> = () => {
  return (
    <Box className={styles['dinner-container']} sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={2} sm={4} md={4}>
            <Item>Cena</Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item>Cena</Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item>Cena</Item>
          </Grid>
      </Grid>
    </Box>
  );
}

export default Dinners