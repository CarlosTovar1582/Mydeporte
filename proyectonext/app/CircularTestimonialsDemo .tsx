"use client";
import React from "react";
import { CircularTestimonials } from '../components/ui/circular-Testimonials ';

const testimonials = [
  {
    quote:
      "Esta foto muestra la belleza natural de Ticlio .. Con un fondo expectacular y una nevada que invita a la imaginacion de los ciclistas. ",
    name: "Foto de Portada",
    designation: "Restaurant Critic",
    src:
      "https://i.postimg.cc/pXdj4Qrf/Whats-App-Image-2025-07-20-at-8-06-53-AM.jpg",
  },
  {
    quote:
      "El caso del gran Carlitos es increible .. El esfuerzo que hizo para llegar a este evento fue descomunal .. Los productos que ofrece saco de apuros a muchos ciclistas durante la ruta..",
    name: "El gran Carlitos",
    designation: "Frequent Visitor",
    src:
      "https://i.postimg.cc/cLnvGFSn/Whats-App-Image-2025-07-20-at-9-20-46-AM.jpg",
  },
  {
    quote:
      "Digna representante del grupo de AMB .. Con un clima muy fuerte llego en un tiempo prudente ... y tan solo le tomo 1 dia",
    name: "Maestra Julia",
    designation: "Satisfied Customer",
    src:
      "https://i.postimg.cc/1z1fmDmY/Whats-App-Image-2025-07-20-at-11-43-32-AM.jpg",
  },
  {
    quote:
      "Sabado 19 y 20 de julio se celebro el evento de Ticlio... El cual es considerado como ruta Madre .. Este evento se evidencio el esfuerzo fisico de todos los ciclistas . ",
    name: "Evento Ticlio",
    designation: "Satisfied Customer",
    src:
      "https://i.postimg.cc/C1m1stjW/Whats-App-Image-2025-07-20-at-9-46-03-AM.jpg",
  },
  {
    quote:
      "2 Grandes leyendas del ciclismo viajero y Julia reunidos en un mismo evento. Gracias por su aporte al grupo AMB ",
    name: "Evento Canta",
    designation: "Satisfied Customer",
    src:
      "https://i.postimg.cc/43jdgWwm/Whats-App-Image-2025-07-06-at-10-42-01-AM.jpg",
  },
  {
    quote:
      "El gran shimanito estrenando nuevas tabas para el evento de ticlio. Glorioso proposito ",
    name: "Evento Ticlio",
    designation: "Satisfied Customer",
    src:
      "https://i.postimg.cc/tCr9br4p/Whats-App-Image-2025-07-16-at-5-47-16-PM.jpg",
  },
];



export  const CircularTestimonialsDemo = () => (
  <section>
    {/* Dark testimonials section */}
    <div className="bg-[#060507] p-8  mx-1 rounded-lg min-h-[300px] flex flex-wrap  items-center justify-center relative">
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
            name: "50px",
            designation: "20px",
            quote: "20px",
          }}
        />
      </div>
    </div>
  </section>
);
