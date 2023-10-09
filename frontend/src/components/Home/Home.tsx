import Image from 'next/image'
import styles from './Home.module.css'
import React, { useState } from 'react'

type ImageProps = {
  image: { url: string; title: string; desc: string; }
}


const ImageComponent: React.FC<ImageProps> = ({ image: { url, title, desc } }) => {
  const [showDesc, setShowDesc] = useState(false);
  return (
    <div>
      <Image
        src={url}
        alt={title}
        priority={true}
        width={450}
        height={600}
        sizes="(min-width: 500px) 450px, calc(85.56vw + 39px)"
        />
        {showDesc ? <p>{desc}</p> : null}
      </div>
  ); 
}


const images = [
  { url: "/4.jpeg", title: "Imagen 1", desc: "desc1" },
  { url: "/7.jpeg", title: "Imagen 2", desc: "desc2" },
  { url: "/16.jpeg", title: "Imagen 3", desc: "desc3" }
];

const ImageGrid: React.FC = () => {
  return (
    <section className={styles.imageContainer}>
       {images.map((image) =>(
         <ImageComponent key={image.title} image={image} />
       ))}     
    </section>
  )
}    

export default ImageGrid
