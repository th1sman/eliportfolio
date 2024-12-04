import React from "react";
import { styled, useTheme } from "@mui/system";
import { images } from "./images";
import { useMediaQuery } from "@mui/material";

const StyledSection = styled("section")(({ theme }) => ({
  display: "flex",
  width: "100%",
  height: "650px",
  [theme.breakpoints.down("sm")]: {
    height: "500px",
  },
}));

const SectionImage = styled("img")(({ theme }) => ({
  width: "30px",
  maxWidth: "350px",
  height: "70vh",
  flexGrow: 1,
  maskImage: "linear-gradient(black 80%, transparent)",
  objectFit: "cover",
  opacity: 0.8,
  filter: "grayscale(15%)",
  transform: "scale(1)",
  transition: "all 1.2s cubic-bezier(0.25, 0.1, 0.25, 1)",
  [theme.breakpoints.up("sm")]: {
    "&:hover": {
      cursor: "zoom-in",
      width: "100%",
      filter: "grayscale(%)",
      opacity: 1,
      zIndex: 2,
    },
    "&:active": {
      cursor: "zoom-out",
      transform: "scale(1.1)",
    },
  },
  [theme.breakpoints.down("sm")]: {
    objectFit: "cover",
  },
}));

export default function Gallery() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

  if (!isLargeScreen) {
    return null;
  }

  return (
    <StyledSection>
      {images.map((image, index) => (
        <SectionImage
          key={index}
          src={image.url}
          alt={image.title}
          title={image.description}
          sizes={image.sizes}
        />
      ))}
    </StyledSection>
  );
}
