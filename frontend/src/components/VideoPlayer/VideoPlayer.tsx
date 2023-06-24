import React from 'react'

interface VideoPlayerProps {
    src: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
    return(
        <video controls>
            <source src={src} type='video/mp4' />
            Tu navegador no soporta el elemento de video.
        </video>
    )
}

export default VideoPlayer