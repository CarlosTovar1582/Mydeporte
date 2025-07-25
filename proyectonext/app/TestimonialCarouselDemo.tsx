import { TestimonialCarousel } from "../components/ui/testimonials"

const TESTIMONIAL_DATA = [
  {
    id: 1,
    name: "Karlitos",
    avatar: "https://i.postimg.cc/dtmPJCcf/FLYER-PRINCIPAL-AMB-CELULAR.png",
    description: "Yo creo que bikes es un lloron de primer nivel jajaa."
  },
  {
    id: 2,
    name: "Francesca",
    avatar: "https://i.postimg.cc/15YTmrYJ/Whats-App-Image-2025-05-30-at-8-19-30-PM.jpg",
    description: "Yo creo que vi a salvador volar por los cielos de comas jajaa."
  },
  {
    id: 3,
    name: "Pesado",
    avatar: "https://i.postimg.cc/Bbzg0MQF/otao.jpg",
    description: "Talleres bikes siempre mas calidad antes que garantia jaja."
  }
]

export function TestimonialCarouselDemo() {
  return (
    <TestimonialCarousel 
      testimonials={TESTIMONIAL_DATA}
      className="max-w-2xl mx-auto"
    />
  )
}