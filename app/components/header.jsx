import React from 'react';

const Header = () => {
  return (
    <div className='bg-[#ffffff] px-4 py-2 h-[100px] flex items-center border-b-[#E4EBFA] border-b-[1px] '>
      <input
        type='text'
        placeholder='Search products...'
        className='w-[40%] h-[40px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 text-black text-lg bg-gray-200'
      />
    </div>
  );
};

export default Header;
