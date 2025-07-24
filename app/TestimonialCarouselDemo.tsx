import { TestimonialCarousel } from "../components/ui/testimonials"

const TESTIMONIAL_DATA = [
  {
    id: 1,
    name: "Karlitos",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    description: "Yo creo que bikes es un lloron de primer nivel jajaa."
  },
  {
    id: 2,
    name: "Francesca",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    description: "Yo creo que vi a salvador volar por los cielos de comas jajaa."
  },
  {
    id: 3,
    name: "Pesado",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
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