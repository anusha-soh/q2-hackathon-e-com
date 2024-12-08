import { interRegular } from '@/app/fonts/fonts';
import { interBold } from '@/app/fonts/fonts';
import { interBolder } from '@/app/fonts/fonts';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Card from './card';

function Hero() {
  return (
    <div>
    <section className={`${interRegular.className} text-[#272343] max-w-[1321px] mx-auto`}>
      
       {/* Banner  */}
       <div className='flex flex-col sm:flex-row space-y-14 my-7 px-7 justify-center space-x-28 items-center bg-[#F0F2F3 w-full h-[850px]'>
        <div className='flex flex-col space-y-9 w-[557px] h-[337px]'>
          <h3 className={`${interBolder.className} font-bold text-[60px] leading-none`}>Best Furniture Collection For Your Interior.</h3>
          <Button className='w-[171px] border-none h-[52px] bg-[#029FAE] text-white hover:bg-[#007580] '>Shop Now <ArrowRight size={24}></ArrowRight></Button>
        </div>

        {/* BANNER IMG */}
        <div>
        <Image 
        src="/imgs/main.png" 
        alt="Example Image"
        width={434}
        height={584}
      />
        </div>
       </div>

    </section>

    {/* companies */}
    <section className='flex items-center justify-evenly flex-wrap w-full h-[139px]'>
      <div className='w-[85px] h-[85px] '>
        <img 
        src="/imgs/brands/logo0.png" 
        alt="Brand name" 
        className="object-cover overflow-hidden"
        />
      </div>

      <div className='w-[85px] h-[85px] '>
        <img 
        src="/imgs/brands/logo1.png" 
        alt="Brand name" 
        className="object-cover overflow-hidden"
        />
      </div>

      <div className='w-[85px] h-[85px] '>
        <img 
        src="/imgs/brands/logo2.png" 
        alt="Brand name" 
        className="object-cover overflow-hidden"
        />
      </div>

      <div className='w-[85px] h-[85px] '>
        <img 
        src="/imgs/brands/logo3.png" 
        alt="Brand name" 
        className="object-cover overflow-hidden"
        />
      </div>

      <div className='w-[85px] h-[85px] '>
        <img 
        src="/imgs/brands/logo4.png" 
        alt="Brand name" 
        className="object-cover overflow-hidden"
        />
      </div>

      <div className='w-[85px] h-[85px] '>
        <img 
        src="/imgs/brands/logo5.png" 
        alt="Brand name" 
        className="object-cover overflow-hidden"
        />
      </div>
    </section>

       {/* Related PRODUCT */}
    <div>
    <h3 className={`${interBold.className} text-[32px] p-7`}>Featured Products</h3>
    <section className='flex items-center space-y-6 justify-evenly flex-wrap w-full h-[139px]'>
    <Card imageUrl="/imgs/image.png" title='Library Stool Chair' price='20' ></Card>
    <Card imageUrl="/imgs/image1.png" title='Library Stool Chair' price='20' ></Card>
    <Card imageUrl="/imgs/image4.png" title='Library Stool Chair' price='20' ></Card>
    </section>
    </div>


      
    </div>
  )
}

export default Hero
