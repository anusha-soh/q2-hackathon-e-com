import { interRegular } from '@/app/fonts/fonts';
import { interBold } from '@/app/fonts/fonts';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

function Hero() {
  return (
    <div>
    <section className={`${interRegular.className} text-[#272343] max-w-[1321px] mx-auto`}>
      
       {/* Banner  */}
       <div className='flex flex-col sm:flex-row space-y-14 my-7 px-7 justify-center space-x-28 items-center bg-[#F0F2F3 w-full h-[850px]'>
        <div className='flex flex-col space-y-9 w-[557px] h-[337px]'>
          <h3 className={`${interBold.className} font-extrabold text-[60px] leading-none`}>Best Furniture Collection For Your Interior.</h3>
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
    <section className='flex w-full h-[139px]'>
        <div><img 
        src="/images/example.png" 
        alt="Example Image" 
        className="object-cover overflow-hidden w-[] h-[] "
      /></div>

    </section>
   
      
    </div>
  )
}

export default Hero
