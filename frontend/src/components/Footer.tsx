import {
  Box,
  Button,
  Divider,
  IconButton,
  Link,
  Container,
  Stack,
  Typography,
} from "@mui/material";

function Copyright() {
  return (
    <Typography>
      {"Copyright © "}
      <Link
        color="inherit"
        sx={{ textDecoration: "none" }}
        href="https://www.rubrohoreca.cl"
      >
        Rubro Horeca
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box component="footer" sx={{ minHeight: "15vh", py: 3 }}>
      <Divider />
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "flex-start",
          gap: { xs: 4, sm: 2 },
          py: { xs: 7, sm: 6 },
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        <Stack spacing={2} sx={{ flexGrow: 1 }}>
          <Typography>Sobre Nosotros </Typography>
          <Link href="#" color="inherit">
            Instagram
          </Link>
        </Stack>
        <Stack>
          <Typography>Servicios</Typography>
        </Stack>
      </Container>
      <Copyright />
    </Box>
  );
}
