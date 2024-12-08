import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react';
import { Phone } from 'lucide-react';
import { interBold } from '@/app/fonts/fonts';
import Link from "next/link";
import { navlinks } from '@/constants'


import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
const Sidebar = () => {
  return (
    <div>
        <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline"><Menu /></Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div>
           <ul  className="flex flex-col space-y-3 gap-4 py-4 items-center"  >
                    {
                        navlinks.map((item)=> <li className="" key={item.id}><SheetClose asChild><Link href={item.link}> {item.title}</Link></SheetClose></li>)
                    }
                     <div className='flex space-x-1 justify-between items-center px-2'>
            <p><Phone></Phone> </p>
            <span className={`${interBold.className}`}>{`(808) 555-0111`}</span>
        </div>   
                    {/* <SheetClose asChild><Button variant="outline" className="bg-slate-900 w-[96px] h-[40px] text-white ">Hire Me</Button></SheetClose> */}

                </ul>                

        </div>
        <SheetFooter>
          <SheetClose asChild>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
      
    </div>
  )
}

export default Sidebar
