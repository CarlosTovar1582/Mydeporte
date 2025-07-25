import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  /* config options here */
  images: {   
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'motion-primitives.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        pathname: '**',
      },
      
    ],
  },

}

export default nextConfig;
