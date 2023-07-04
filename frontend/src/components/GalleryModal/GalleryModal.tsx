import React from 'react'
import Image from 'next/image'
import Button from '@mui/material/Button'
import styled from './gallery.module.css'
import Box from '@mui/material/Box'



interface Gallery {
    name: string;
    coverImage: string;
    thumbnails: string[];
}

interface GalleryModalProps {
    gallery: Gallery;
    onClose: () => void;
}

const GalleryModal: React.FC<GalleryModalProps> = ({ gallery, onClose }) => {
    return (
        <Box className={styled.modal}>
            <Box className={styled.modalContent}>
                <Image
                    src={gallery.coverImage}
                    alt={gallery.name}
                    width={400}
                    height={500}
                    className={styled.modalImage}
                />
                {gallery.thumbnails.map((thumbnail, index) => (
                    <Image key={index} src={thumbnail} width={100} height={100} alt={`Thumbnail ${index + 1}`} />
                ))}
                <Button variant='contained' onClick={onClose}>Cerrar</Button>
            </Box>
        </Box>
    )
}

export default GalleryModal