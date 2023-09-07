'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Asset2 from '@/public/images/assets/asset2';
import { useRouter } from 'next/navigation';

const Sidebar = () => {

  const router = useRouter()
  const [activetab, setactivetab] = useState('')

  useEffect( () => {
    
    const url = window.location.href;
    const dirs = ['dashboard', 'inventory','records','debtors']
    
    for(let i = 0; i < dirs.length; i++ ){
      if(url.includes(dirs[i])){
        setactivetab(dirs[i])
      }
    }

  },[])

  return (
    <div className='w-full max-w-[430px] min-h-screen pb-10  bg-[#ffffff] border-[1px] border-[#E4EBFA] '>
      <div className=" pl-8 pr-5 mb-10 h-[100px] border-b-[1px] border-b-[#E4EBFA] flex gap-5 items-center ">
        <div className='flex gap-1' >
          <div className="h-7 w-2 rounded-sm bg-[#635FC7] "></div>
          <div className="h-7 w-2 rounded-sm bg-[#8471f2] "></div>
          <div className="h-7 w-2 rounded-sm bg-blue-100 "></div>
        </div>
        <h1 className='text-4xl font-bold text-[#27374D]'>Kelnon</h1>
      </div>

      <ul className='flex flex-col gap-1 text-lg pr-5 '>
        
        <li className={`flex items-center gap-3 font-medium  pl-8 py-3 rounded-r-full 
          ${activetab == 'dashboard' ? ' bg-[#635fc7] text-white ' : 'text-[#5D6679] hover:text-white hover:bg-[#9996e6]  ' }  
          cursor-pointer`}
          onClick = {() => {
            setactivetab('dashboard')
          }}
          >
          <Image src={activetab == 'dashboard' ? '/images/assets/asset 6.svg' : '/images/assets/asset 2.svg'} 
            alt='Dashboard icon' width={25} height= {0} className = "h-5 w-5 " 
          />            
          <span className='text-xl' >Dashboard</span>
        </li>

        <li className={`flex items-center gap-3 font-medium  pl-8 py-3 rounded-r-full 
          ${activetab == 'inventory' ? ' bg-[#635fc7] text-white ' : 'text-[#5D6679] hover:text-white hover:bg-[#9996e6]  ' }  
          cursor-pointer`}
          onClick = {() => {
            setactivetab('inventory')
            router.push('/pages/inventory')
          }}
          >
          <Image src={activetab == 'inventory' ? '/images/assets/asset 6.svg' : '/images/assets/asset 2.svg'} 
            alt='Dashboard icon' width={25} height= {0} className = "h-5 w-5 " 
          />
          <span className='text-xl' >Inventory</span>
        </li>

        <li className={`flex items-center gap-3 font-medium  pl-8 py-3 rounded-r-full 
          ${activetab == 'records' ? ' bg-[#635fc7] text-white ' : 'text-[#5D6679] hover:text-white hover:bg-[#9996e6]  ' }  
          cursor-pointer`}
          onClick = {() => {
            setactivetab('records')
            router.push('/pages/records')
          }}
          >
          <Image src={activetab == 'records' ? '/images/assets/asset 6.svg' : '/images/assets/asset 2.svg'} 
            alt='Dashboard icon' width={25} height= {0} className = "h-5 w-5 " 
          />            
          <span className='text-xl' >Records</span>
        </li>
                
        <li className={`flex items-center gap-3 font-medium  pl-8 py-3 rounded-r-full 
          ${activetab == 'debtors' ? ' bg-[#635fc7] text-white ' : 'text-[#5D6679] hover:text-white hover:bg-[#9996e6]  ' }  
          cursor-pointer`}
          onClick = {() => {
            router.push('/pages/debtors')
            setactivetab('debtors')            
          }}
          >
          <Image src={activetab == 'debtors' ? '/images/assets/asset 6.svg' : '/images/assets/asset 2.svg'} 
            alt='Dashboard icon' width={25} height= {0} className = "h-5 w-5 " 
          />            
          <span className='text-xl' >Debtors</span>
        </li>

      </ul>
      
    </div>
  );
};

export default Sidebar;
