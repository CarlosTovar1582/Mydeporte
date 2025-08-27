
import React from "react";

import { Default } from "../app/Demo"
import { InfiniteSliderBasic } from "../app/InfiniteSliderBasic"
import { DefaultDemo} from "../app/DefaultDemo";
import { StackedCircularFooterDemo } from "../app/StackedCircularFooterDemo";
import {CircularTestimonialsDemo} from "../app/CircularTestimonialsDemo ";
import { ExpandingCardsDemo} from "../app/DemoExpanding" 
import { Connect } from "../app/Demo-highlightrer" 
import { CircularGalleryDemo}  from "../app/Demo-gallery"
import { DemoOne } from "../app/DemoImagenCard"



export default function Home() {
  return (
    <>
   
      <div> <Default/></div> 
       
      <div className="mt-2 mx-6 rounded-3xl  "> <DefaultDemo words='Auspiciadores'/></div> 
      <div className="mt-2"> <InfiniteSliderBasic/></div>  
      <div className=" mx-2 rounded-3xl pb-10"> <DefaultDemo  words='Curiosidades'/></div>
      <div className="mt-5 pb-10"> <CircularTestimonialsDemo/></div>
      <div className=" mx-2 rounded-3xl pb-10 "> <DefaultDemo words='Eventos' /></div>    
      <div> <DemoOne/></div>   
      <div className=" mx-2 rounded-3xl pb-10 mt-72 "> <DefaultDemo words='Imagenes' /></div>    
      <div> <ExpandingCardsDemo/></div>        
      <div className="pb-2 mt-10"> <Connect/></div>    
      <div className=" mx-2 rounded-3xl  mt-2"> <DefaultDemo words='Imagenes Exclusivas' /></div>  
      <div> <CircularGalleryDemo/></div>
      <div className=" mx-2 rounded-3xl  "> <StackedCircularFooterDemo/></div>
        
      
      
   

    </>
  );
}
/* <div className={`text-center text-4xl font-bold ${dynaPuffFont.className}`}>AUSPICIADORES</div> */