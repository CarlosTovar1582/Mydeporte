import { ScrollXCarousel,
    ScrollXCarouselContainer,
    ScrollXCarouselProgress,
    ScrollXCarouselWrap } from "../components/ui/scroll-x-carousel";
  import {CardHoverReveal,
    CardHoverRevealContent,
    CardHoverRevealMain,} from '../components/ui/reveal-on-hover'
  import { Badge } from '../components/ui/badge'
  import Image from "next/image"
  const SLIDES = [
    {
      id: 'slide-6',
      title: 'Nota',
      description:
        'Para este tipo de ruta es complicada ya que tiene mucho desnivel',
      caracteristicas: ['nivel : Intermedio- Avanzado'],
      type: 'Entrenamiento',
      imageUrl:
        'https://i.postimg.cc/XvjK5Y0w/Whats-App-Image-2025-07-08-at-7-27-51-PM.jpg',
    },
    {
      id: 'slide-2',
      title: 'Nota',
      description:
        'Para este tipo de ruta es complicada ya que tiene mucho desnivel',
        caracteristicas: ['nivel : Elite'],
      type: 'Entrenamiento',
      imageUrl:
        'https://i.postimg.cc/d1XGgRZB/Whats-App-Image-2025-07-21-at-8-06-48-PM.jpg',
    },


  ];
  
  export default function DemoOne() {
    return (
      <ScrollXCarousel className="h-[150vh]">
        <ScrollXCarouselContainer className="h-dvh  flex flex-col gap-20 py-20">
                  <div className=" pointer-events-none w-[12vw] h-[103%] absolute inset-[0_auto_0_0] z-10 " />
            <div className="pointer-events-none  w-[15vw] h-[103%] absolute inset-[0_0_0_auto] z-10" />
  
          <ScrollXCarouselWrap className="flex-2 flex space-x-6 [&>*:first-child]:ml-8">
            {SLIDES.map((slide) => (
              <CardHoverReveal
                key={slide.id}
                className="min-w-[85vw] md:min-w-[38vw] shadow-xl border xl:min-w-[30vw] rounded-2xl"
              >
                <CardHoverRevealMain>
                  <Image
                  
                    width={500}
                    height={500}
                    alt={slide.title}
                    src={slide.imageUrl}
                    className="size-full aspect-square "
                  /> 
                
                </CardHoverRevealMain>
                <CardHoverRevealContent className="space-y-4 rounded-2xl bg-black backdrop-blur-3xl p-4">
                  <div className="space-y-2">
                    <h3 className="text-sm text-white/80">Tipo</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="capitalize rounded-full bg-indigo-500">
                        {slide.type}
                      </Badge>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-sm text-white/80">Caracteristicas</h3>
                    <div className="flex flex-wrap gap-2">
                      {slide.caracteristicas.map((service) => (
                        <Badge
                          key={service}
                          className="capitalize rounded-full"
                          variant={'secondary'}
                        >
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
  
                  <div className="space-y-2 mt-2">
                    <h3 className="text-white capitalize font-bold">
                      {slide.title}
                    </h3>
                    <p className="text-white/80 text-sm">{slide.description}</p>
                  </div>
                </CardHoverRevealContent>
              </CardHoverReveal>
            ))}
          </ScrollXCarouselWrap>
          <ScrollXCarouselProgress
            className="bg-secondary mx-8 h-1 rounded-full overflow-hidden"
            progressStyle="size-full bg-indigo-500/70 rounded-full"
          />
        </ScrollXCarouselContainer>
      </ScrollXCarousel>
    )
  }

  export { DemoOne}
  