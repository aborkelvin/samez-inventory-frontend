import React from 'react';
import Header from '../components/header';
import Sidebar from '../components/sidebar';

const Pageslayout = ({ children }) => {
  return (
    <div className='min-h-screen flex'>
      <div className='fixed min-w-[350px] h-screen'>
        <Sidebar />
      </div>
      <div className='flex flex-col flex-grow ml-[350px]'>
        <Header />
        <div className='overflow-y-auto flex-grow'>{children}</div>
      </div>
    </div>
  );
};

export default Pageslayout;
