import Link from 'next/link'
import { Typography } from '@mui/material'
import { Container } from '@/styles/styles'
import { Wrapper, HomeText, ImgHome } from './styles'


export interface HomeInterface {}


const Home: React.FC<HomeInterface> = () => {
    return (
        <Container>
        <Wrapper>
            <HomeText>Speed</HomeText>
        </Wrapper>
        </Container>
        
    )
}

export default Home