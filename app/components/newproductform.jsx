'use client';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { closeForm } from '../redux/features/productformslice';
import { addProducts } from '../redux/features/productslice';


const Newproductform = () => {

  let productform = useSelector(state => state.productForm.isFormOpen)
  const dispatch = useDispatch()
  
  const [productdata , setproductdata] = useState({
    productName:'',
    quantityAvailable:'',
    sellingPrice:''
  })

  const handlechange = (event) => {
    setproductdata((prevdata) => ({...prevdata, [event.target.name]:event.target.value }) )
  }


  async function addProduct(event){
    
    event.preventDefault()
    console.log(productdata.productName)

    if(typeof(productdata.productName) !== 'string'){
      alert('Product name should be a string')
    }else{
    
      const resp = await fetch("http://localhost:4000/products", {
        method :"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(productdata)
      })

      const data = await resp.json()
      console.log(data)
    
      dispatch(closeForm())
      dispatch(addProducts(data))
    }
  }


  return (
    <div className={` ${productform ? 'fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50' : 'hidden'} `}>
      <div className='w-[400px] max-w-[450px] border-2 p-5 rounded-lg bg-white ' >
        <form className=" flex flex-col gap-10">
          <div className=" flex flex-col gap-2">
              <label htmlFor="productName">Product Name :</label>
              <input type="text" name="productName" id="productName" className='border-2 rounded-lg outline-none px-3 h-10'
              onChange={handlechange} />
          </div>
          <div className="flex flex-col gap-2">
              <label htmlFor="quantityAvailable">Quantity Available:</label>
              <input type="number" name="quantityAvailable" id="quantityAvailable" className='border-2 rounded-lg outline-none px-3 h-10'
              onChange={handlechange}/>
          </div>
          <div className=" flex flex-col gap-2">
              <label htmlFor="sellingPrice">Selling Price</label>
              <input type="number" name="sellingPrice" id="sellingPrice" className='border-2 rounded-lg outline-none px-3 h-10'
              onChange={handlechange} />
          </div>
          <div className=" flex justify-end gap-4">
            <button className="bg-[#8c8c8c] hover:bg-[#595959] outline-none text-white font-bold py-2 px-4 rounded"
            onClick={ (event) => {
              event.preventDefault()
              dispatch(closeForm())
            }
          }
            >
                Discard
            </button>
            <button className="bg-[#635fc7] hover:bg-[#3c397e] outline-none text-white font-bold py-2 px-4 rounded"
            onClick={(event) => addProduct(event)}
            >
                Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Newproductform
