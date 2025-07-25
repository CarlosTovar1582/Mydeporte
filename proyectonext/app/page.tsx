
import React from "react";

import { Default } from "../app/Demo"
//import {Testimonials } from "../app/Testimonials"
//import {  Testimonials } from "../app/Testimonials"
import { DemoOne } from "../app/DemoOne";
import {  InfiniteSliderBasic } from "../app/InfiniteSliderBasic"
import {DefaultDemo} from "../app/DefaultDemo";
import { StackedCircularFooterDemo } from "../app/StackedCircularFooterDemo";
import {CircularTestimonialsDemo} from "../app/CircularTestimonialsDemo ";
import { TestimonialCarouselDemo } from "../app/TestimonialCarouselDemo";

export default function Home() {
  return (
    <>
   
      <div> <Default/></div> 
       
      <div className="mt-10 mx-6 rounded-3xl  "> <DefaultDemo words='Auspiciadores'/></div> 
      <div className="mt-2"> <InfiniteSliderBasic/></div>  
      <div className=" mx-10 rounded-3xl "> <DefaultDemo  words='Curiosidades'/></div>
      <div className="mt-5 pb-10"> <CircularTestimonialsDemo/></div>
      <div className=" mx-10 rounded-3xl "> <DefaultDemo words='Rutas y Eventos' /></div>    
      <div> <DemoOne/></div> 
      <div className=" mx-10 rounded-3xl"> <DefaultDemo words='Testimonios'/></div>    
      <div className="mt-10"> <TestimonialCarouselDemo/></div>  
      <div> <StackedCircularFooterDemo/></div>  
    </>
  );
}
/* <div className={`text-center text-4xl font-bold ${dynaPuffFont.className}`}>AUSPICIADORES</div> */