import Box from '@mui/material/Box'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { ItemData } from './Galleries';
import Image from 'next/image';
import { GalleryModal } from '../GalleryModal';


const Dinners: React.FC = () => {
  return (
    <Box sx={{
      width: {
        xs: '100%',
        sm: '500px',
        md: '340px',
        xl: '100%',
      },
      height: {
        xs: '120px',
        sm: '500px',
        md: '340px',
        xl: '100%',
      }
    }}>

      <ImageList variant='quilted' cols={4} >
        {ItemData.map((item) => (
          <ImageListItem key={item.img} />
        ))}
      </ImageList>
    </Box>
  );
};

export default Dinners