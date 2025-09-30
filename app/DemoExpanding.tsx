// demo.tsx
import {
    Pyramid,
    Castle,
    Mountain,
    TowerControl,
    Building,
    Landmark,
  } from "lucide-react";
  import { ExpandingCards, CardItem } from "../components/ui/expanding-cards";
  
  const architecturalWonders: CardItem[] = [
    {
      id: "callahuanca-01",
      title: "Letrero de Callahuanca",
      description:
        "Ciclistas tomandose su respectiva foto..",
      imgSrc:
        "https://i.postimg.cc/65NF7fbZ/DJI-20250907122825-0075-D.webp",
      icon: <Pyramid size={24} />,
      linkHref: "#",
    },
    {
      id: "callahuanca-02",
      title: "Fondito carretera central",
      description:
        "Un tramo que se esta recorriendo a lo largo de la carretera central.",
      imgSrc:
        "https://i.postimg.cc/1RNL33SJ/video-calla-01.webp",
      icon: <Castle size={24} />,
      linkHref: "#",
    },
    {
      id: "callahuanca-03",
      title: "Reunion ciclista",
      description:
        "Terminando la subida de callahuanca y la gran mayoria se reunio para un respectivo descanso antes de la masacre de las z.",
      imgSrc:
        "https://i.postimg.cc/VvMTGD4r/video-calla-05.webp",
      icon: <Mountain size={24} />,
      linkHref: "#",
    },
    {
      id: "callahuanca-04",
      title: "A punto chosica",
      description:
        "Los mas rapidos empezaron a meterle duro al pedal .",
      imgSrc:
        "https://i.postimg.cc/NGrWjjtP/video-calla-03.webp",
      icon: <TowerControl size={24} />,
      linkHref: "#",
    },
    {
      id: "callahuanca-05",
      title: "Fotos Respectivas",
      description:
        "Ya apunto de hacer la bajada de trocha , pero antes sus respecticas foticos.",
      imgSrc:
        "https://i.postimg.cc/Y0gVnb81/video-calla-06.webp",
      icon: <Building size={24} />,
      linkHref: "#",
    },
    {
      id: "callahuanca-06",
      title: "Penultima z",
      description:
        "Ya casi por llegar al pueblo de callahuanca tenemos una vista privilegiada de callahuanca.",
      imgSrc:
        "https://i.postimg.cc/vT9jq3XR/video-calla-07.webp",
      icon: <Landmark size={24} />,
      linkHref: "#",
    },
    {
      id: "callahuanca-07",
      title: "Ultima z",
      description:
        "Con este fondo de la ultima z use se relaja viendo el paisaje hermoso.",
      imgSrc:
        "https://i.postimg.cc/GtYN7qzr/video-calla-08.webp",
      icon: <Landmark size={24} />,
      linkHref: "#",
    },
  ];
  
  export  function ExpandingCardsDemo() {
    return (
      <div className="flex w-full flex-col items-center justify-center space-y-8 bg-background p-4 md:p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight  sm:text-4xl text-blue-800">
            Evento Callahuanca
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Estas son unas cuantas imagenes que nos regalo callahuanca 2026 .
          </p>
        </div>
        <ExpandingCards items={architecturalWonders} defaultActiveIndex={0} />
      </div>
    );
  }
  
