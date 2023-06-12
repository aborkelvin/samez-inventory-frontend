import React from 'react';
import Image from 'next/image';

const Sidebar = () => {
  return (
    <div className='w-full max-w-[450px] min-h-screen py-11 pl-8 pr-5 bg-[#f4f7fd] border-2'>
      <h1 className='mb-20 text-2xl font-bold text-[#27374D]'>Samez</h1>

      <ul className='flex flex-col gap-10 text-lg'>
        <li className='text-[#5D6679] flex gap-4 font-medium hover:font-bold cursor-pointer'>
          {/* <Image src='/images/dashboardicon.png' alt='dashboardicon' width={28} height={20} /> */}
          <span>Dashboard</span>
        </li>
        <li className='text-[#5D6679] font-medium hover:font-bold cursor-pointer'>Inventory</li>
        <li className='text-[#5D6679] font-medium hover:font-bold cursor-pointer'>Reports</li>
        <li className='text-[#5D6679] font-medium hover:font-bold cursor-pointer'>Sales Records</li>
        <li className='text-[#5D6679] font-medium hover:font-bold cursor-pointer'>Debtors</li>
      </ul>
    </div>
  );
};

export default Sidebar;
