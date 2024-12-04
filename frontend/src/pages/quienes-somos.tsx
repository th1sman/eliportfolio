import { Box, Grid, Typography } from "@mui/material";
import { useState } from "react";

const About = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const aboutImages = [
    {
      src: "/9.webp",
      text: "Medallón de reineta sellado al vacio y cocinado con una compa de vino blanco ",
      alt: "descripción1",
    },
    { src: "/12.webp", alt: "pic1", text: "descripción1" },
    { src: "/13.webp", alt: "pic1", text: "descripción1" },
  ];

  return (
    <div>
      <Box
        sx={{
          borderRadius: "15px",
          padding: { xs: "20px", sm: "60px" },
          cursor: "pointer",
          height: "auto",
        }}
      >
        <Typography
          variant="h2"
          color="#9d8156"
          sx={{ marginBottom: "20px", fontSize: "1em" }}
        >
          Acompañamos tu proceso de apertura o renovación de negocio
          gastronómico...
        </Typography>
        <Grid container spacing={2}>
          {aboutImages.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                position="relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{
                    width: "100%",
                    height: "auto",
                    transition: "opacity 0.5s",
                    opacity: hoveredIndex === index ? 0.5 : 1,
                  }}
                />
                {hoveredIndex === index && (
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      color: "white",
                      backgroundColor: "rgba(0, 0, 0, 0.7)",
                      padding: "10px",
                      borderRadius: "5px",
                      textAlign: "center",
                      border: "2px solid green",
                    }}
                  >
                    {image.text}
                  </Typography>
                )}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default About;
