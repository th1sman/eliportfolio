import React from 'react'
import styled from './video.module.css'

interface VideoBackgroundProps {
    src: string;
}

const VideoPlayer: React.FC<VideoBackgroundProps> = ({ src }) => {
    return (
        <div className={styled.videoContainer}>
            <video autoPlay
                loop
                muted
                className={styled.video}>
                <source src={src} type='video/mp4' />
                Tu navegador no soporta el elemento de video.
            </video>
        </div>

    )
}

export default VideoPlayer