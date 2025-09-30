"use client";
import React from "react";
import { CircularTestimonials } from '../components/ui/circular-Testimonials ';

const testimonials = [
  {
    quote:
      "A la distancia se puede observar a la comunidad ciclista que le da duro al pedal a lo largo de la carreterra central ",
    name: "Portada",
    designation: "Restaurant Critic",
    src:
      "https://i.postimg.cc/Y2mJCC7n/video-calla-02.webp",
  },
  {
    quote:
      "El caso del gran Carlitos es increible .. El esfuerzo que hizo para llegar a este evento fue descomunal .. Los productos que ofrece saco de apuros a muchos ciclistas durante la ruta..",
    name: "El gran Carlitos",
    designation: "Frequent Visitor",
    src:
      "https://i.postimg.cc/NjtYgp72/Whats-App-Image-2025-07-20-at-9-38-53-AM.webp",
  },
  {
    quote:
      "Digna representante del grupo de AMB .. Con un clima muy fuerte llego en un tiempo prudente ... y tan solo le tomo 1 dia",
    name: "Maestra Julia",
    designation: "Satisfied Customer",
    src:
      "https://i.postimg.cc/dVnMJvVg/Whats-App-Image-2025-07-20-at-8-06-53-AM.webp",
  },
  {
    quote:
      "El ciclista que aparece en la foto pensando la rica bajada que esta por vivir jaja. ",
    name: "Evento Callahuanca",
    designation: "Satisfied Customer",
    src:
      "https://i.postimg.cc/j2N9gZvs/video-calla-09.webp",
  },
  {
    quote:
      "2 Grandes leyendas del ciclismo viajero y Julia reunidos en un mismo evento. Gracias por su aporte al grupo AMB ",
    name: "Evento Canta",
    designation: "Satisfied Customer",
    src:
      "https://i.postimg.cc/1tCbwKqB/Whats-App-Image-2025-07-06-at-10-42-01-AM.webp",
  },

];



export  const CircularTestimonialsDemo = () => (
  <section>
    {/* Dark testimonials section */}
    <div className="bg-[#060507] p-1 mt-10  mx-1 rounded-lg min-h-[300px] flex flex-wrap  items-center justify-center relative">
      <div
        className="items-center justify-center  relative flex"
        style={{ maxWidth: "1024px" }}
      >
        <CircularTestimonials
          testimonials={testimonials}
          autoplay={true}
          colors={{
            name: "#7D605B",
            designation: "#e1e1e1",
            testimony: "#f1f1f7",
            arrowBackground: "#f3eeed",
            arrowForeground: "#141414",
            arrowHoverBackground: "#f7f7ff",
          }}
          fontSizes={{
            name: "35px",
            designation: "20px",
            quote: "20px",
          }}
        />
      </div>
    </div>
  </section>
);
