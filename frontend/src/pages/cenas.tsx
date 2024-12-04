import React from "react";
import { Grid, Box } from "@mui/material";

export default function Cenas() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} md={4}>
        <Box
          component="img"
          src="./9.webp"
          alt="imagentest"
          sx={{
            maxWidth: "100%",
            height: "100%",
            transition: "transform .5s ease-in-out",
            "&:hover": {
              transform: "scale(1.01)",
            },
          }}
        />
      </Grid>
      <Grid item xs={6} md={4}>
        <Box
          component="img"
          src="./549.webp"
          alt="imagentest"
          sx={{
            maxWidth: "100%",
            height: "100%",
            transition: "transform .5s ease-in-out",
            "&:hover": {
              transform: "scale(1.01)",
            },
          }}
        />
      </Grid>
      <Grid item xs={6} md={4}>
        <Box
          component="img"
          src="./10.webp"
          alt="imagentest"
          sx={{
            maxWidth: "100%",
            height: "100%",
            transition: "transform .5s ease-in-out",
            "&:hover": {
              transform: "scale(1.01)",
            },
          }}
        />
      </Grid>
      <Grid item xs={6} md={4}>
        <Box
          component="img"
          src="./45.webp"
          alt="imagentest"
          sx={{
            maxWidth: "100%",
            height: "100%",
            transition: "transform .5s ease-in-out",
            "&:hover": {
              transform: "scale(1.01)",
            },
          }}
        />
      </Grid>
      <Grid xs={6} item md={4}>
        <Box
          component="img"
          src="./37.webp"
          alt="imagentest"
          sx={{
            maxWidth: "100%",
            maxHeight: "100%",
            transition: "transform .5s ease-in-out",
            "&:hover": {
              transform: "scale(1.01)",
            },
          }}
        />
      </Grid>
      <Grid item xs={6} md={4}>
        <Box
          component="img"
          src="./100.webp"
          alt="imagentest"
          sx={{
            maxWidth: "100%",
            height: "100%",
            transition: "transform .5s ease-in-out",
            "&:hover": {
              transform: "scale(1.01)",
            },
          }}
        />
      </Grid>
    </Grid>
  );
}
