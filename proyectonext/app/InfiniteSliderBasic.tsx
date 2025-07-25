import { InfiniteSlider } from "../components/ui/infinite-slider";
import Image from "next/image"
export default function InfiniteSliderBasic() {
  return (
    <InfiniteSlider gap={24} reverse className="w-full h-full bg-white">
      <Image 
      width={100}
      height={100}
        src="https://motion-primitives.com/apple_music_logo.svg"
        alt="Apple Music logo"
        className="h-[120px] w-auto"
      />
      <Image
      width={100}
      height={100}
        src="https://motion-primitives.com/chrome_logo.svg"
        alt="Chrome logo"
        className="h-[120px] w-auto"
      />
      <Image
      width={100}
      height={100}
        src="https://motion-primitives.com/strava_logo.svg"
        alt="Strava logo"
        className="h-[120px] w-auto"
      />
      <Image
      width={100}
      height={100}
        src="https://motion-primitives.com/nintendo_logo.svg"
        alt="Nintendo logo"
        className="h-[120px] w-auto"
      />  
  
    </InfiniteSlider>
  );
}

export  {
  InfiniteSliderBasic
};
