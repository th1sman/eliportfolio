import React, { useState } from "react";
import { Modal, Box, Button, Typography, Paper } from "@mui/material";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Card from '@mui/material/Card';
import { styled } from "@mui/material/styles"
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardActions } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: 500,
  boxShadow: 24,
  backgroundColor: '#181a1b',
}

export interface GalleryModalProps {
  images: ReactImageGalleryItem[];
}

const GalleryModal: React.FC<GalleryModalProps> = ({ images }) => {
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }
  return (
    <>
      <Item onClick={handleOpen}>
        <Typography>Cena Maridaje</Typography>
      </Item>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <ImageGallery items={images} />
        </Box>
      </Modal>
    </>
  )
}

export default GalleryModal
