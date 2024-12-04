import { images } from "./images";
import { styled, useTheme } from "@mui/system";
import { useMediaQuery } from "@mui/material";

const WrapperImage = styled("div")(({ theme }) => ({
  aspectRatio: "10 / 16",
  width: "100%",
  position: "relative",
  display: "flex",
  overflow: "scroll",
  scrollSnapType: "x mandatory",
}));

const SliderImage = styled("img")(({ theme }) => ({
  width: "100%",
  left: 0,
  position: "sticky",
  objectFit: "cover",
  borderRadius: "5px",
  scrollSnapAlign: "center",
}));

export default function Slider() {
  const theme = useTheme();
  const isBigScreen = useMediaQuery(theme.breakpoints.down("sm"));

  if (!isBigScreen) {
    return null;
  }

  return (
    <WrapperImage>
      {images.map((image, index) => (
        <SliderImage
          key={index}
          src={image.url}
          alt={image.title}
          title={image.description}
          sizes={image.sizes}
        />
      ))}
    </WrapperImage>
  );
}
