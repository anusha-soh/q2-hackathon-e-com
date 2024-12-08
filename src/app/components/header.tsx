import { toplinks } from '@/constants'
import { navlinks } from '@/constants'
import { interRegular } from '@/app/fonts/fonts';
import { interBold } from '@/app/fonts/fonts';
import Sidebar from '@/app/components/sidebar';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <>
    <header className={`${interRegular.className} max-w-[1321px] mx-auto`}>
    <div className='max-w-[]'>    
    {/* Top div */}
    <div className='flex justify-between items-center text-[13px] px-5 bg-[#272343] text-[#F0F2F3] w-full  h-[45px]'>
        <p>Free shipping on all orders over $50</p>

        {/* links */}
        <div className='hidden sm:block'>
        <ul className='flex space-x-3'>

            {
                toplinks.map( (li) => <li key={li.id}><Link href={li.link}>{li.title}</Link></li> )
            }
        </ul>
        </div>

    </div>
    {/* Middle */}
    <div className='flex justify-between items-center px-3 md:px-4 h-[84px] bg-[#F0F2F3]' >
        {/* logo */}
        <div className='flex items-center space-x-2  '>
        <Image 
        src="/imgs/logo.png" 
        alt="Example Image"
        width={40}
        height={40}
      />
       <span className={`${interBold.className} font-normal text-[26px]`}>Comforty</span>
        </div>

        {/* Cart section */}
        <div className='flex items-center space-x-2'>
            <Image 
            src="/imgs/cart.png" 
            alt="Example Image"
            width={22}
            height={22}
            className='filter invert'
            ></Image>


            <span className='text-[12px] hidden sm:block '>Cart</span>


            <div className='flex justify-center items-center rounded-full bg-[#007580] w-[20px] h-[20px] text-[#F0F2F3] text-[12px] '>1</div>


            <div className='flex sm:hidden'>
            <Sidebar></Sidebar>
            </div>
        </div>
    </div>

    </div>

    {/*bottom Links */}
    <nav className='md:flex hidden justify-between items-center px-2 h-[74px] text-[14px] text-[#272343] ' >
        <ul className='flex justify-between items-center px-2 space-x-4'>
            {
                navlinks.map( (li) => <li key={li.id}><Link href={li.link}>{li.title}</Link></li> )
            
            }
        </ul>
        <div className='flex justify-between items-center px-2'>
            <p>Contact: </p>
            <span className={`${interBold.className}`}>{`(808) 555-0111`}</span>
        </div>
        
    </nav>
    </header>
    </>
  )
}

export default Header
