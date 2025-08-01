
import React from "react";

import { Default } from "../app/Demo"

import {  InfiniteSliderBasic } from "../app/InfiniteSliderBasic"
import {DefaultDemo} from "../app/DefaultDemo";
import { StackedCircularFooterDemo } from "../app/StackedCircularFooterDemo";
import {CircularTestimonialsDemo} from "../app/CircularTestimonialsDemo ";
import { DemoSlider } from "../app/AutoSlider"
import { BentoGridGalleryDemo } from "../app/BentoGridGalleryDemo"
import { DemoOne } from "../app/DemoImagenCard"


export default function Home() {
  return (
    <>
   
      <div> <Default/></div> 
       
      <div className="mt-10 mx-6 rounded-3xl  "> <DefaultDemo words='Auspiciadores'/></div> 
      <div className="mt-2"> <InfiniteSliderBasic/></div>  
      <div className=" mx-10 rounded-3xl pb-10"> <DefaultDemo  words='Curiosidades'/></div>
      <div className="mt-5 pb-10"> <CircularTestimonialsDemo/></div>
      <div className=" mx-10 rounded-3xl pb-10 "> <DefaultDemo words='Rutas y Eventos' /></div>    
      <div> <DemoOne/></div> 
      <div className=" mx-10 rounded-3xl pb-10 mt-20"> <DefaultDemo words='Grupos' /></div>    
      <div> <DemoSlider/></div> 
      <div className=" mx-10 rounded-3xl  mt-10"> <DefaultDemo words='Fotos Random' /></div>    
      <div> <BentoGridGalleryDemo/></div> 
      <div> <StackedCircularFooterDemo/></div>  

    </>
  );
}
/* <div className={`text-center text-4xl font-bold ${dynaPuffFont.className}`}>AUSPICIADORES</div> */