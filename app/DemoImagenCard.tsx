import { Component } from "../components/ui/circular-gallery";

const demoItems = [
  {
    image: `https://i.postimg.cc/XvjK5Y0w/Whats-App-Image-2025-07-08-at-7-27-51-PM.jpg`,
    text: "",
  },
  {
    image: `https://i.postimg.cc/QxH515dr/apu.jpg`,
    text: "",
  },

];

const DemoOne = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div 
        className="w-full max-w-screen-xl mx-auto h-[118vh] overflow-hidden relative rounded-2xl "
      >
        <Component 
          items={demoItems} 
          bend={3} 
          textColor="#ffffff" 
          borderRadius={0.05} 
        />
      </div>
    </div>
  );
};

export { DemoOne };