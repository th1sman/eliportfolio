import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Link from "next/link";
import { styled } from "@mui/system";

const Navigation = () => {
  const ListItemButtonNoWrap = styled(ListItemButton)({
    "& .MuiListItemText-root": {
      whiteSpace: "nowrap",
    },
  });

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const links = [
    { label: "Home", route: "/" },
    { label: "Quienes somos", route: "/quienes-somos" },
    { label: "Asesorias", route: "/asesorias" },
    { label: "Cenas", route: "/cenas" },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {links.map(({ label, route }) => (
          <ListItem key={route} disablePadding>
            <Link href={route} passHref>
              <ListItemButton component="div">
                <ListItemButtonNoWrap>
                  <ListItemText primary={label} />
                </ListItemButtonNoWrap>
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="static"
        sx={{
          height: { xs: "56px", sm: "64px", md: "70px", lg: "75px" }, // Ejemplo de alturas
        }}
      >
        <Toolbar
          sx={{
            // Ajustas la altura mínima del Toolbar para que coincida con el AppBar
            minHeight: "inherit", // Esto asegura que el Toolbar coincida con la altura del AppBar
            alignItems: "center", // Centra los elementos verticalmente
            padding: "0 20px", // Ajusta el padding horizontal como prefieras
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <List sx={{ display: "flex" }}>
              {links.map(({ label, route }) => (
                <ListItem key={route} disablePadding>
                  <Link href={route} passHref>
                    <ListItemButton component="div">
                      <ListItemText primary={label} />
                    </ListItemButton>
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { width: 250 },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Navigation;
