import React, { useState } from 'react'
import GalleryModal from '../GalleryModal/GalleryModal'
import Button from '@mui/material/Button'

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleModal = () => {
        setIsOpen(!isOpen)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    return (
        <>
            <Button variant='contained' onClick={toggleModal}>Ver Galeria</Button>
            {isOpen && (
                <GalleryModal
                    gallery={{
                        name: 'Galería 1',
                        coverImage: '/12.jpeg',
                        thumbnails: ['/thumbnail2.jpeg',
                            '/thumbnail3.jpeg']
                    }}
                    onClose={closeModal}
                />
            )}
        </>
    );
}

export default Modal 