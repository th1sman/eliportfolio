import Layout from "./Layout";
import Card from "./Card";

interface Image {
  url: string;
  title: string;
  description: string;
  sizes?: string;
}

export default function Gallery() {
  const images: Image[] = [
    {
      url: "/8.webp",
      title: "Piña con frutas",
      description: "La media vola compañero",
      sizes:
        "(min-width: 800px) 13.05vw, (min-width: 760px) calc(-1470vw + 11568px), (min-width: 580px) 83.75vw, calc(96.54vw - 22px)",
    },
    {
      url: "/9.webp",
      title: "Image9",
      description: "Imagen9",
      sizes:
        "(min-width: 800px) 9.82vw, (min-width: 760px) calc(-1110vw + 8734px), (min-width: 580px) 63.13vw, (min-width: 480px) 70vw, 93.75vw",
    },
    {
      url: "/10.webp",
      title: "Image10",
      description: "Imagen10",
      sizes:
        "(min-width: 800px) 9.82vw, (min-width: 760px) calc(-1110vw + 8734px), (min-width: 580px) 63.13vw, (min-width: 480px) 70vw, 93.75vw",
    },
    {
      url: "/12.webp",
      title: "Image11",
      description: "Imagen11",
      sizes:
        "(min-width: 800px) 7.05vw, (min-width: 760px) calc(-795vw + 6256px), (min-width: 580px) 45vw, (min-width: 480px) 50vw, (min-width: 400px) 65vw, 72.5vw",
    },
    {
      url: "/13.webp",
      title: "Image12",
      description: "Imagen12",
      sizes:
        "(min-width: 800px) 9.82vw, (min-width: 760px) calc(-1110vw + 8734px), (min-width: 580px) 63.13vw, (min-width: 480px) 70vw, 93.75vw",
    },
    {
      url: "/15.webp",
      title: "Image13",
      description: "Imagen12",
      sizes:
        "(min-width: 800px) 9.82vw, (min-width: 760px) calc(-1110vw + 8734px), (min-width: 580px) 63.13vw, (min-width: 480px) 70vw, 93.75vw",
    },
    {
      url: "/45.webp",
      title: "Image14",
      description: "Imagen12",
      sizes:
        "(min-width: 800px) 9.82vw, (min-width: 760px) calc(-1110vw + 8734px), (min-width: 580px) 63.13vw, (min-width: 480px) 70vw, 93.75vw",
    },
  ];

  return (
    <Layout>
      {images.map((img, i) => {
        return (
          <Card
            key={i}
            title={img.title}
            excerpt={img.description}
            imageUri={img.url}
            sizes={img.sizes}
          ></Card>
        );
      })}
    </Layout>
  );
}

