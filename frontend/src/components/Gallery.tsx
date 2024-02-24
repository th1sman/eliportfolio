import React from "react";
import { styled } from "@mui/system";
import { images } from "./images";

const StyledSection = styled("section")({
  display: "flex",
  width: "100%",
  height: "500px",
});

const SectionImage = styled("img")({
  width: "0px",
  flexGrow: 1,
  objectFit: "cover",
  opacity: 0.8,
  transition: ".9 ease",
  "&:hover": {
    cursor: "crosshair",
    width: "350px",
    opacity: 1,
  },
});

export default function Gallery() {
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
