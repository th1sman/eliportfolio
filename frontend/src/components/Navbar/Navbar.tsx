import {
    AppBar,
    IconButton,
    Toolbar,
    Typography,
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Link from 'next/link'
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
        <Box onClick={handleResponsive} sx={{ textAlign: 'center' }}>
            <Typography variant='h6' sx={{ my: 2 }}>
                RubroHoreca
            </Typography>
            <List>
                <ListItem disablePadding sx={{ display: 'block'}}>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListItemText>
                            <Link href={'#about'}>
                            Sobre mi                            
                            </Link>
                        </ListItemText>                     
                    </ListItemButton>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListItemText>
                            <Link href={'#advice'}>
                            Asesorias                            
                            </Link>
                        </ListItemText>                     
                    </ListItemButton>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListItemText>
                            <Link href={'#dinners'}>
                            Cenas                            
                            </Link>
                        </ListItemText>                     
                    </ListItemButton>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListItemText>
                            <Link href={'#contact'}>
                            Contacto                            
                            </Link>
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
                        RubroHoreca
                    </Typography>
                    <Box sx={{ display:  { xs: 'none', sm: 'block'}}}>
                        <IconButton>
                            <Link href={'#about'}>
                                <Typography sx={{ color: '#DCDBC7' }}>Sobre mi</Typography>
                            </Link>
                        </IconButton>
                        <IconButton>
                            <Link href={'#advice'}>
                                <Typography sx={{ color: '#DCDBC7' }}>Asesorias</Typography>
                            </Link>
                        </IconButton>
                        <IconButton>
                            <Link href={'#dinners'}>
                                <Typography sx={{ color: '#DCDBC7' }}>Cenas</Typography>
                            </Link>
                        </IconButton>
                        <IconButton>
                            <Link href={'#contact'}>
                                <Typography sx={{ color: '#DCDBC7' }}>Contacto</Typography>
                            </Link>
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
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '240px' }
                    }}
                >
                    {sideBar}
                </Drawer>
            </Box>
        </Box>
    )
}

export default Navbar