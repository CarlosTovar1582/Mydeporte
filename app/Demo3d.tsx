'use client'

import { CardStack3D } from "@/components/ui/3d-flip-card"

export function CardStackDemo() {
  const images = [
    { 
      src: "https://images.pexels.com/photos/321552/pexels-photo-321552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
      alt: "Monkey" 
    },
    { 
      src: "https://images.pexels.com/photos/208821/pexels-photo-208821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
      alt: "Donkey" 
    },
    { 
      src: "https://images.pexels.com/photos/33550/cows-curious-cattle-agriculture.jpg?auto=compress&cs=tinysrgb&w=600", 
      alt: "Cow" 
    },
    { 
      src: "https://images.pexels.com/photos/70568/spotted-baumwaran-monitor-tree-monitor-lizard-70568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
      alt: "Chameleon" 
    },
  ]

  return (
    <div className="min-h-screen flex items-center justify-center">
      <CardStack3D 
        images={images}
        cardWidth={320}
        cardHeight={192}
        spacing={{ x: 50, y: 50 }}
      />
    </div>
  )
}