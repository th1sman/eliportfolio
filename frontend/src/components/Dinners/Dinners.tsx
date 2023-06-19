import Box from '@mui/material/Box'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { ItemData } from './Galleries';
import Image from 'next/image';
import style from './dinners.module.css'


const Dinners: React.FC = () => {
  return (
    <Box sx={{
      width: {
        xs: '100%',
        sm: '500px',
        md: '340px',
        lg: '100%',
      },
      height: {
        xs: '120px',
        sm: '500px',
        md: '340px',
        lg: '100%',
      },
    }}>

      <Image src='/4.jpeg' width={500} height={500} alt='imagen' className={style.image} />
    </Box>
  );
};

export default Dinners