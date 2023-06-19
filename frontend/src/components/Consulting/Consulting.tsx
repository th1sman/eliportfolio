import { Box, Grid, Button, Typography } from '@mui/material'
import Image from 'next/image'
import style from './Consulting.module.css'


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
                xs: '250vh',
                sm: '900px',
                md: '900px',
                lg: '850px'
            }
        }}
            id={'consulting'}
        >
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4} textAlign="center">
                    <Image
                        src={'/89.jpeg'}
                        alt={'Consulting1'}
                        width={420}
                        className={style.image}
                        height={500}
                        style={{
                            objectFit: 'scale-down',
                            objectPosition: '50% 50%'
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} textAlign="center">
                    <Image
                        src={'/10.jpeg'}
                        alt={'Consulting2'}
                        width={420}
                        height={500}
                        className={style.image}
                        style={{
                            objectFit: 'scale-down',
                            objectPosition: '50% 50%',
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4} textAlign="center">
                    <Image
                        src={'/69.jpeg'}
                        alt={'Consulting3'}
                        width={420}
                        height={600}
                        className={style.image}
                        style={{
                            objectFit: 'scale-down',
                            objectPosition: '50% 50%',
                        }}
                    />
                </Grid>
            </Grid>
        </Box >
    )
}

export default Consulting