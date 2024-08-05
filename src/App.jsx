// Docs {@link https://tailwindcss.com/docs/text-color}
import React from 'react';

export function App() {
  return (
    <div className='container mx-auto'>
      <div className='p-3 rounded-md bg-gray-400'>
        <div className='grid grid-cols-2 gap-2 md:grid-cols-3'>
          <div className= 'w-full h-60 bg-cover bg-center col-span-2 md:col-span-2 md:row-span-2 md:h-full bg-[url(https://images.adsttc.com/media/images/669e/96fe/c8b7/c809/c2d7/5694/slideshow/home-in-duke-forest-szostak-design_6.jpg)]'></div>
          <div className= 'w-full h-32 bg-cover bg-center md:h-60 bg-[url(https://images.adsttc.com/media/images/669e/96fc/c8b7/c809/c2d7/5691/slideshow/home-in-duke-forest-szostak-design_1.jpg)]'></div>
          <div className= 'w-full h-32 bg-cover bg-center md:h-60 bg-[url(https://images.adsttc.com/media/images/669e/96fc/df91/fa4a/9828/8956/slideshow/home-in-duke-forest-szostak-design_16.jpg)]'></div>
        </div>
        <div className= 'text-2xl font-bold mt-3'>Home in Duke Forest</div>
        <div className='flex gap-2 mt-3'>
          <div className= 'rounded-full px-3 py-1 text-sm bg-green-600 text-white'>Nature</div>
          <div className= 'rounded-full px-3 py-1 text-sm bg-green-600 text-white'>Modern</div>
          <div className= 'rounded-full px-3 py-1 text-sm bg-green-600 text-white'>Swimming pool</div>
        </div>
       
      </div>
    </div>
  );
}

window.tailwind.config = {
  theme: {
    extend: {
      colors: {
        'my-indigo': '#4f45e5',
      },
    },
  },
};
