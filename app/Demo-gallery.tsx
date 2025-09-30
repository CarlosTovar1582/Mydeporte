import React from 'react';
import { CircularGallery, GalleryItem } from '../components/ui/circular-gallery-perfect';

const galleryData: GalleryItem[] = [
	{
		common: 'Estadio',
		binomial: '-',
		photo: {
			url: 'https://i.postimg.cc/nh91kr2Q/dji-fly-20250907-110202-769-1757261307227-photo-optimized.webp',
			text: 'lion couple kissing on a brown rock',
			pos: '47% 35%',
			by: 'mydeporte'
		}
	},
	{
		common: 'Satisfaccion',
		binomial: '-',
		photo: {
			url: 'https://i.postimg.cc/MpfYDH5G/dji-fly-20250907-105840-762-1757261290030-photo-optimized.webp',
			text: 'herd of Sri Lankan elephants walking away from a river',
			pos: '75% 65%',
			by: 'mydeporte'
		}
	},
	{
		common: 'Grupo Red',
		binomial: '-',
		photo: {
			url: 'https://i.postimg.cc/s2p9kLbm/dji-fly-20250907-105708-755-1757260995836-photo-optimized.webp',
			text: 'close-up of a black cockatoo',
			pos: '53% 43%',
			by: 'mydeporte'
		}
	},
	{
		common: 'Sujeto AMB',
		binomial: '',
		photo: {
			url: 'https://i.postimg.cc/PfKKfBNC/dji-fly-20250907-103710-743-1757260716382-photo-optimized.webp',
			text: 'camel and her new born calf walking in the Sahara desert',
			pos: '65% 65%',
			by: 'mydeporte'
		}
	},
	{
		common: 'Fotito trepada',
		binomial: '-',
		photo: {
			url: 'https://i.postimg.cc/SxYGrRrB/dji-fly-20250907-103240-723-1757259454398-photo-optimized.webp',
			text: 'polar bear on the snow, by the water, raised on the hind legs, front paws together',
			pos: '50% 25%',
			by: 'mydeporte'
		}
	},
	{
		common: 'Fotito  trapada',
		binomial: '-',
		photo: {
			url: 'https://i.postimg.cc/Gp0xSRg9/dji-fly-20250907-103222-720-1757259408470-photo-optimized.webp',
			text: 'giant panda hanging from a tree branch',
			pos: '47%',
			by: 'mydeporte'
		}
	},
	{
		common: 'Ultima trepada',
		binomial: '-',
		photo: {
			url: 'https://i.postimg.cc/TYw0KCWg/dji-fly-20250907-102720-686-1757258886224-photo-optimized.webp',
			text: 'zebra standing on wheat field, looking back towards the camera',
			pos: '65% 35%',
			by: 'mydeporte'
		}
	},
	{
		common: 'Guerrero',
		binomial: '-',
		photo: {
			url: 'https://i.postimg.cc/bwZmB3zW/DJI-20250907095259-0058-D.webp',
			text: 'cheetah sitting in the grass under a blue sky',
			by: 'mydeporte'
		}
	},
	{
		common: 'Reunion',
		binomial: '-',
		photo: {
			url: 'https://i.postimg.cc/C5MNH4r0/DJI-20250907085754-0037-D.webp',
			text: 'king penguin with a fluffy brown chick on grey rocks',
			pos: '35%',
			by: 'mydeporte'
		}
	},
	{
		common: 'Fondito',
		binomial: '-',
		photo: {
			url: 'https://i.postimg.cc/PxQyw74Q/DJI-20250907070202-0005-D.webp',
			text: 'a red panda in a tree',
			by: 'mydeporte'
		}
	},
];

export const CircularGalleryDemo = () => {
  return (
    // This outer container provides the scrollable height
    <div className="w-full bg-background text-foreground" style={{ height: '500vh' }}>
      {/* This inner container sticks to the top while scrolling */}
      <div className="w-full h-screen sticky top-0 flex flex-col items-center justify-center overflow-hidden">
        <div className="text-center mb-8 absolute top-16 z-10">
       
        </div>
        <div className="w-full h-full">
          <CircularGallery items={galleryData} />
        </div>
      </div>
    </div>
  );
};

export default CircularGalleryDemo;
