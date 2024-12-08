import { interBold } from '@/app/fonts/fonts';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

interface Card {
    title: string;
    price: string;
    imageUrl: string;
    link?: string;
  };
  
  
  
  const Card = (prop:Card) => {
    return (
      <div className='w-[317px] h-[377px]'>
        <div className=" border-white border-[2px]">
            <img
                src={prop.imageUrl}  alt="Remote Image"
                className='object-cover'
            />
        </div>
        <div className='flex justify-between py-4'>
        <div className='space-y-3'>
            <h4 className=''>{prop.title}</h4>
            <span className={`${interBold.className}`}>{`$${prop.price}`}</span>
        </div>
        <Button className='w-[44px] border-none h-[44px] bg-[#029FAE] text-white hover:bg-[#007580] '>
            <ShoppingCart></ShoppingCart>
        </Button>
        </div>
        
        
      </div>
    )
  }
  
  export default Card
  