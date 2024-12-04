import React, { useState } from "react";
import styles from "@/styles/asesorias.module.css";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

const Title = styled(Typography)(({ theme }) => ({
  color: "#9d8156",
  fontSize: "1.5vw",
  lineHeight: "1.5",
  textAlign: "center",
}));

const Section = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const LittleBox = styled("div")(({ theme, isHovered }) => ({
  padding: "10px",
  position: "relative",
  margin: "2%",
  width: "30vw",
  height: "40vh",
  border: "2px solid rgba(0, 0, 0, 0.25)",
  borderRadius: "3px",
  transition: "transform 0.2s ease",
  overflow: "hidden",
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: isHovered ? "opacity 0.2s ease" : "none",
    opacity: isHovered ? 0.3 : 1,
  },
}));

const paragraphs = [
  "Asesoramos a pequeños, medianos y grandes negocios relacionados con el rubro de turismo y gastronomía.",
  "Ofrecemos apoyo a personas que quieran iniciar en el mundo gastronómico y que busquen invertir de forma más segura.",
  "Ayudamos a los negocios que deseen potenciar sus propuestas y rentabilizar de mejor manera su empresa.",
];

export default function Asesorias() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Box>
      <h2 className={styles.title}>Podemos asesorarte</h2>
      <Section>
        {paragraphs.map((_, index) => (
          <LittleBox
            key={index}
            isHovered={hoveredIndex === index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Image
              src="/12.webp"
              alt={`Descripción de la imagen ${index + 1}`}
              fill
              sizes="(max-width: 600px) 100vw, (min-width: 601px) 30vw"
            />
            {hoveredIndex === index && (
              <Title sx={{ fontSize: "1em", textAlign: "center", position: "absolute", textShadow: "1px 1px 2px black" }}>
                {paragraphs[hoveredIndex]}
              </Title>
            )}
          </LittleBox>
        ))}
      </Section>
    </Box>
  );
}