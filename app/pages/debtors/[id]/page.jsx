'use client'
import { useRouter } from 'next/navigation';
import React from 'react';
import { useSelector } from 'react-redux';

const DetailedDebtorpage = ({ params }) => {

  const router = useRouter()
  const debtors = useSelector((state) => state.debtors);
  const debtor = debtors[params.id];

  const records = useSelector((state) => state.records.records);
  console.log(debtor.receiptid)
  const record = records.find(record => record._id == debtor.receiptid)
  console.log(record)

  return (
    <div className="py-10 px-2 sm:px-10">

        <button className='py-2 px-12 bg-[#635fc7] text-white font-bold rounded mb-10 ' 
        onClick={()=>{
            router.back()
        }}  >
            Back
        </button>
      <h1 className="text-2xl font-bold mb-4">
        {debtor.customername}
      </h1>
      {debtor && (
        <div className="bg-white p-4 border border-gray-300 shadow rounded">
          
          <div className="mb-2">
            <span className="font-semibold">Date:</span> {debtor.date}
          </div>
          <div className="mb-5">
            <span className="font-semibold">Total Debt:</span>{' '}
            {debtor.amountowed}
          </div>
          
          <p className='font-bold mb-5 text-xl ' >
            Transaction History
          </p>
          
          <div className='bg-white ' > 
            <table className='w-full text-left ' >
                <thead>
                    <tr className=' border-b ' >
                        <th className=' py-2 px-1 ' >Product</th>
                        <th className=' py-2 px-1 '>Quantity</th>
                        <th className=' py-2 px-1 ' >Date</th>                        
                    </tr>
                </thead>
                <tbody>
                    {
                        record.productdescription.map((item,i) => (
                            <tr key={i} className='border-b ' >
                                <td className=' py-2 px-1 '>{item.productName}</td>
                                <td className=' py-2 px-1 '>{item.buyquantity}</td>
                                <td>{record.date}</td>
                            </tr>
                            
                        ))
                    }
                </tbody>
            </table>
          </div>

        </div>
      )}
    </div>
  );
};

export default DetailedDebtorpage;
