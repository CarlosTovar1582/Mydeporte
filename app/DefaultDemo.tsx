import { AnimatedText } from "@/components/ui/animated-shiny-text"
import { Knewave } from 'next/font/google';
const knewaveFont = Knewave({ 
  subsets :['latin'],
  weight:"400",  
  

  //Knewave
});

export default function DefaultDemo({words}: {words: string; }) {
  return (
    <AnimatedText       
      text={words}
      className="border-2 border-slate-500 rounded-2xl"
      textClassName={`text-[4rem] md:text-[6rem]  text-center text-4xl   ${knewaveFont.className}`}
    
    />
  )
}



export { DefaultDemo}