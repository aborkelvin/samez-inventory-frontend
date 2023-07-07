'use client'
import { useRouter } from 'next/navigation';
import React from 'react';
import { useSelector } from 'react-redux';

const DetailedRecordpage = ({ params }) => {

  const router = useRouter()
  const records = useSelector((state) => state.records.records);
  const record = records[params.id];

  return (
    <div className="py-10 px-2 sm:px-8">

        <button className='py-2 px-12 bg-[#635fc7] text-white font-bold rounded mb-10 ' 
        onClick={()=>{
            router.back()
        }}  >
            Back
        </button>
      <h1 className="text-2xl font-bold mb-4">Detailed Record</h1>
      {record && (
        <div className="bg-white p-4 border border-gray-300 shadow rounded">
          <div className="mb-2">
            <span className="font-semibold">Customer Name:</span>{' '}
            {record.customername}
          </div>
          <div className="mb-2">
            <span className="font-semibold">Date:</span> {record.date}
          </div>
          <div className="mb-2">
            <span className="font-semibold">Total Price:</span>{' '}
            {record.totalprice}
          </div>
          <div className="mb-2">
            <span className="font-semibold">Amount Paid:</span>{' '}
            {record.amountpaid}
          </div>
          <div className="mb-4">
            <span className="font-semibold">Product Details:</span>
            <ul className="list-disc pl-8">
              {record.productdescription.map((product) => (
                <li key={product._id}>
                  <div>
                    <span className="font-semibold">Product Name:</span>{' '}
                    {product.productName}
                  </div>
                  <div>
                    <span className="font-semibold">Quantity Available:</span>{' '}
                    {product.quantityAvailable}
                  </div>
                  <div>
                    <span className="font-semibold">Selling Price:</span>{' '}
                    {product.sellingPrice}
                  </div>
                  {/* Add any other relevant details here */}
                </li>
              ))}
            </ul>
          </div>
          {/* Add any other relevant details here */}
        </div>
      )}
    </div>
  );
};

export default DetailedRecordpage;
