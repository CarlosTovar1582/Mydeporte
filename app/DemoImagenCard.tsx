import { Component } from "../components/ui/circular-gallery";

const demoItems = [
  {
    image: `https://i.postimg.cc/pT1H2CGz/apu.webp`,
    text: "",
  },
  {
    image: `https://i.postimg.cc/1tdkxtXK/penitencia.webp`,
    text: "",
  },
  {
    image: `https://i.postimg.cc/cHqkrNbN/callahuanca.webp`,
    text: "",
  },
  {
    image: `https://i.postimg.cc/Y0zs5y8B/huacho.webp`,
    text: "",
  },
  {
    image: `https://i.postimg.cc/y8dbGjZ2/pisco.webp`,
    text: "",
  },

];

const DemoOne = () => {
  return (
    <div className="flex w-full h-96 justify-center items-center mt-40 ">
      <div 
        className="w-full max-w-screen-xl mx-auto h-[100vh] overflow-hidden relative rounded-2xl "
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