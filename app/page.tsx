
import React from "react";

import { Default } from "../app/Demo"

import {  InfiniteSliderBasic } from "../app/InfiniteSliderBasic"
import {DefaultDemo} from "../app/DefaultDemo";
import { StackedCircularFooterDemo } from "../app/StackedCircularFooterDemo";
import {CircularTestimonialsDemo} from "../app/CircularTestimonialsDemo ";
import { DemoSlider } from "../app/AutoSlider"
import { LayoutGridDemo } from "../app/DemoFotos"
import { TimelineDemo } from "./TimelineDemo";
import { PricingInteractionDemo } from "../app/DemoPricing"
//import { CardStackDemo } from "..//app/Demo3d"
//import { BentoGridGalleryDemo } from "../app/BentoGridGalleryDemo"
import { DemoOne } from "../app/DemoImagenCard"


export default function Home() {
  return (
    <>
   
      <div> <Default/></div> 
       
      <div className="mt-10 mx-6 rounded-3xl  "> <DefaultDemo words='Auspiciadores'/></div> 
      <div className="mt-2"> <InfiniteSliderBasic/></div>  
      <div className=" mx-10 rounded-3xl pb-10"> <DefaultDemo  words='Curiosidades Penitencia'/></div>
      <div className="mt-5 pb-10"> <CircularTestimonialsDemo/></div>
      <div className=" mx-10 rounded-3xl pb-10 "> <DefaultDemo words='Rutas y Eventos' /></div>    
      <div> <DemoOne/></div>       
      <div className=" mx-10 rounded-3xl  mt-72"> <DefaultDemo words='Anuncios' /></div>    
      <div> <LayoutGridDemo/></div>  
      <div className=" mx-10 rounded-3xl pb-10 mt-10"> <DefaultDemo words='Noticias' /></div>    
      <div> <TimelineDemo/></div> 
      <div className=" mx-10 rounded-3xl pb-10 mt-10"> <DefaultDemo words='Suscribirse' /></div> 
      <div> <PricingInteractionDemo/></div>       
      <div> <StackedCircularFooterDemo/></div>  

    </>
  );
}
/* <div className={`text-center text-4xl font-bold ${dynaPuffFont.className}`}>AUSPICIADORES</div> */