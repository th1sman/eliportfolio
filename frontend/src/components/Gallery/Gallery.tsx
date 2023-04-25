import { useState } from "react";
import { Box, Typography, Paper } from "@mui/material";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import AppModal from "./AppModal";


export interface GalleryModalProps {
  images: ReactImageGalleryItem[];
}

const style = {
  width: 500,
  height: '100%',
};

const GalleryModal: React.FC<GalleryModalProps> = ({ images }) => {

  const [open, setOpen] = useState(false)

  const Item = ({ children }: { children: React.ReactNode }) => (
    <Paper
      sx={{
        backgroundColor: "transparent",
        typography: "body2",
        padding: 1,
        textAlign: "center",
        color: "text.secondary",
      }}
      onClick={() => setOpen(true)}
    >
      {children}
    </Paper>
  );

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Item>
        <Typography>Cena Maridaje</Typography>
      </Item>
      <AppModal open={open} onClose={handleClose}>
        <Box sx={style}>
          <ImageGallery items={images} />
        </Box>
      </AppModal>
    </>
  )
}

export default GalleryModal
