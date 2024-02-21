import { Box, Grid, Typography } from "@mui/material";
import Layout from "@/components/Layout";

const About = () => {
  return (
    <div>
      <Layout>
        <Box
          sx={{
            borderRadius: "15px",
            padding: { xs: "20px", sm: "40px" },
            cursor: "pointer",
            position: "relative",
            transition: "all 0.3s",
            backgroundColor: "#110603",
            color: "#9d8156",
            height: "auto",
            "&:hover": {
              transform: "scale(0.98)",
            },
          }}
        >
          <Typography
            variant="body1"
            color="textPrimary"
            sx={{ marginBottom: "20px" }}
          >
            Acompañamos tu proceso de apertura o renovación de negocio
            gastronómico...
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <img
                src="/9.webp"
                alt="fotito1"
                style={{ width: "100%", height: "auto" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <img
                src="/12.webp"
                alt="fotito2"
                style={{ width: "100%", height: "auto" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <img
                src="/8.webp"
                alt="fotito3"
                style={{ width: "100%", maxHeight: "75svh" }}
              />
            </Grid>
          </Grid>
        </Box>
      </Layout>
    </div>
  );
};

export default About;
