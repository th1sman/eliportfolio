import {
    AppBar,
    IconButton,
    Toolbar,
    Typography,
    Button,
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText
} from '@mui/material'
import Image from 'next/image'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'


interface Props {
    window?: () => Window
}


export interface NavbarInterface {

}

const Navbar: React.FC<NavbarInterface> = (props: Props) => {

    const { window } = props
    const [mobile, setMobile] = useState(false)

    const handleResponsive = () => {
        setMobile((prevState) => !prevState)
    }

    const sideBar = (
        <Box sx={{ textAlign: 'center' }}>
            <Typography variant='h6' sx={{ my: 2, color: '#d7d7c3' }}>
                <IconButton onClick={() => scroll.scrollToTop()}>
                    RubroHoreca
                </IconButton>
            </Typography>
            <List>
                <ListItem disablePadding sx={{ display: 'block' }}>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListItemText>
                            <ScrollLink
                                activeClass='active'
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={100}
                            >
                                Sobre mi
                            </ScrollLink>
                        </ListItemText>
                    </ListItemButton>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListItemText>
                            <ScrollLink
                                activeClass='active'
                                to="consulting"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={100}
                            >
                                Asesorias
                            </ScrollLink>
                        </ListItemText>
                    </ListItemButton>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListItemText>
                            <ScrollLink
                                to='Dinners'
                                activeClass='active'
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={100}
                                onClick={() => scroll.scrollToBottom()}>
                                Cenas
                            </ScrollLink>
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )

    const container = window !== undefined ? () => window().document.body : undefined

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar position='fixed' component='nav' sx={{ backgroundColor: '#1F273C' }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open mobile"
                        edge="start"
                        onClick={handleResponsive}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography
                        variant='h6'
                        component='div'
                        sx={{ flexGrow: 1, color: '#DCDBC7', display: { xs: 'none', sm: 'block' } }}
                    >
                        <ScrollLink
                            activeClass='active'
                            to="/"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <Button sx={{ fontFamily: 'Poppins', fontSize: '1.2em', color: '#d7d7c3' }} onClick={() => scroll.scrollToTop()}>
                                RubroHoreca
                            </Button>
                            <Image
                                src={'/logo.png'}
                                alt='logo'
                                width={45}
                                height={45}

                            />
                        </ScrollLink>
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <IconButton>
                            <ScrollLink
                                activeClass='active'
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                <Typography sx={{ color: '#DCDBC7' }}>Sobre mi</Typography>
                            </ScrollLink>
                        </IconButton>
                        <IconButton>
                            <ScrollLink
                                activeClass='active'
                                to="consulting"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                <Typography sx={{ color: '#DCDBC7' }}>Asesorias</Typography>
                            </ScrollLink>
                        </IconButton>
                        <IconButton>
                            <ScrollLink
                                activeClass='active'
                                to="Dinners"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                <Typography sx={{ color: '#DCDBC7' }}>Cenas</Typography>
                            </ScrollLink>
                        </IconButton>
                    </Box>

                </Toolbar>
            </AppBar>
            <Box component='nav'>
                <Drawer
                    container={container}
                    variant='temporary'
                    open={mobile}
                    onClose={handleResponsive}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none', maxWidth: '200' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '240px' }
                    }}
                >
                    {sideBar}
                </Drawer>
            </Box>
        </Box >
    )
}

export default Navbar   