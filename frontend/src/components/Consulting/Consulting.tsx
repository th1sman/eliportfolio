import { Box, Grid, Button, Typography } from '@mui/material'
import Image from 'next/legacy/image'


export interface ConsultingInterface { }

const Consulting: React.FC<ConsultingInterface> = () => {
    return (
        <Box sx={{
            width: {
                xs: '850px',
                sm: '100vw',
                md: '100%'
            },
            height: {
                xs: '700vh',
                sm: '900px',
                md: '900px'
            },
        }}
            id={'consulting'}
        >
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4} textAlign="center">
                    <Image
                        layout='responsive'
                        src={'/16.jpeg'}
                        alt={'Consulting1'}
                        width={800}
                        height={900}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} textAlign="center">
                    <Image
                        layout='responsive'
                        src={'/10.jpeg'}
                        alt={'Consulting2'}
                        width={800}
                        height={900}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} textAlign="center">
                    <Image
                        layout='responsive'
                        src={'/43.jpeg'}
                        alt={'Consulting3'}
                        width={800}
                        height={900}
                    />
                </Grid>
            </Grid>
        </Box >
    )
}

export default Consulting