import React from 'react'
import { ImageList, ImageListItem } from '@mui/material'
import Image from 'next/image';

interface ImageListProps {
    cols: number;
    rows: number;
    img: string;
    title: string;
}

const ImageListComponent: React.FC<ImageListProps> = ({
    cols,
    rows,
    img,
    title,
}) => {
    return (
        <ImageList sx={{ width: 500, height: 500 }}>
            <ImageListItem
                key={img}
                cols={cols || 1}
                rows={rows || 1}
            >
                <Image
                    src={img}
                    alt={title}
                    style={{
                        objectFit: 'cover'
                    }}
                />
            </ImageListItem>
        </ImageList>
    )
}

export default ImageListComponent