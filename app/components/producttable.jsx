import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const TableRow = ({ productName, quantityAvailable, sellingPrice , _id , selectedproducts ,setselectedproducts }) => {
  
  const selectedproductsinstore = useSelector(state => state.products.selectedProducts)
  
  const [checkvalue, setcheckvalue] = useState(selectedproductsinstore.some(product => product._id === _id))
  //const isSelected = selectedproductsinstore.some(product => product._id === _id);
  //setcheckvalue(isSelected)

  const handlechange = (event) => {    
    let existingProductIndex = selectedproducts.findIndex((item) => item._id === _id);
    if (existingProductIndex !== -1) {
      let updatedProducts = [...selectedproducts];
      updatedProducts[existingProductIndex] = {
        ...updatedProducts[existingProductIndex],
        checked: event.target.checked,
      };
      setselectedproducts(updatedProducts);
    }else{
      let newlyselectedproduct = { 
        _id,
        productName,
        quantityAvailable,
        sellingPrice,
        checked:event.target.checked      
      }
      
      setselectedproducts((selectedproducts) => ([...selectedproducts, newlyselectedproduct]))
    }    
  };

  useEffect(()=>{
    //console.log(selectedproducts)
  }, [selectedproducts])
  

  return (    
    <tr className="border-b hover:bg-gray-100 text-left">        
        <td className="py-2 px-1">{productName}</td>
        <td className="py-2 px-1">{quantityAvailable}</td>
        <td className="py-2 px-1">₦ {sellingPrice}</td>
        <td className='p-0' >
          <input type="checkbox" name="selectproduct" id="selectproduct" className='cursor-pointer w-10 h-5' onChange={handlechange}  />
        </td>        
    </tr>    
  );
};

const Table = ({ data, selectedproducts,setselectedproducts }) => {


  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className="py-2 px-1 text-left ">Product Name</th>
          <th className="py-2 px-1 text-left ">Quantity Available</th>
          <th className="py-2 px-1 text-left ">Selling Price</th>
        </tr>
      </thead>
      <tbody>
        {data && data.length > 0 ? (
          data.map((row, index) => <TableRow key={row._id} {...row} selectedproducts = {selectedproducts} setselectedproducts = {setselectedproducts} />)
        ) : (
          <tr className='pt-10' >
            <td colSpan="3" className='text-center text-lg font-medium relative right-9 ' >No products available</td>
          </tr>
        )}
      </tbody>

    </table>
  );
};

export default Table;
