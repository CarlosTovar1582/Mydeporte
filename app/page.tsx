
import React from "react";

import { Default } from "../app/Demo"

import {  InfiniteSliderBasic } from "../app/InfiniteSliderBasic"
import {DefaultDemo} from "../app/DefaultDemo";
import { StackedCircularFooterDemo } from "../app/StackedCircularFooterDemo";
import {CircularTestimonialsDemo} from "../app/CircularTestimonialsDemo ";
import { DemoSlider } from "../app/AutoSlider"
import { ExpandingCardsDemo} from "../app/DemoExpanding" 
import { Connect } from "../app/Demo-highlightrer" 
import { DemoImage } from "../app/DemoImage";

//anuncios
//import { LayoutGridDemo } from "../app/DemoFotos"
//noticias
//import { TimelineDemo } from "./TimelineDemo";
//suscrbirise
//import { PricingInteractionDemo } from "../app/DemoPricing"
//import { CardStackDemo } from "..//app/Demo3d"
//import { BentoGridGalleryDemo } from "../app/BentoGridGalleryDemo"
import { DemoOne } from "../app/DemoImagenCard"



export default function Home() {
  return (
    <>
   
      <div> <Default/></div> 
       
      <div className="mt-10 mx-6 rounded-3xl  "> <DefaultDemo words='Auspiciadores'/></div> 
      <div className="mt-2"> <InfiniteSliderBasic/></div>  
      <div className=" mx-10 rounded-3xl pb-10"> <DefaultDemo  words='Curiosidades'/></div>
      <div className="mt-5 pb-10"> <CircularTestimonialsDemo/></div>
      <div className=" mx-10 rounded-3xl pb-10 "> <DefaultDemo words='Eventos' /></div>    
      <div> <DemoOne/></div>   
      <div className=" mx-10 rounded-3xl pb-10 mt-72 "> <DefaultDemo words='Imagenes' /></div>    
      <div> <ExpandingCardsDemo/></div>        
      <div className="pb-10 mt-10"> <Connect/></div>    
      <div className=" mx-10 rounded-3xl pb-10 mt-10"> <DefaultDemo words='Imagenes Exclusivas' /></div>    
      <div className="pb-10 mt-10 md:pb-40 md:mt-40"> <DemoImage/></div>   
      <div className=" mx-10 rounded-3xl pb-10 mt-10 "> <StackedCircularFooterDemo/></div> 
   

    </>
  );
}
/* <div className={`text-center text-4xl font-bold ${dynaPuffFont.className}`}>AUSPICIADORES</div> */