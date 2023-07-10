'use client';

import Newproductform from "@/app/components/newproductform";
import Table from "@/app/components/producttable";
import Loader from "@/app/loading";
import { openForm } from "@/app/redux/features/productformslice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts, setProducts } from "@/app/redux/features/productslice";
import { useRouter } from "next/navigation";

const Inventory = () => {
  const dispatch = useDispatch();
  const router = useRouter()

  const products = useSelector((state) => state.products.products);

  async function fetchProductsData() {
    try {
      const response = await fetch("http://localhost:4000/products");
      const data = await response.json();
      dispatch(setProducts(data));
      console.log(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    fetchProductsData();
  }, []);


  //Creating state I will pass back up so as to select selectedproducts for checkout
  const [selectedproducts , setselectedproducts] = useState([{
    _id:1,
    productName : 'Oxygen',
    quantityAvailable : 200,
    sellingPrice: 450    
  }])

  const handlecheckout = (event) => {
    event.preventDefault()
    
    //should i check for already existing products in reduxstore selectedproducts ?, answer that later
    
    dispatch(selectProducts(selectedproducts.filter(item => item.checked == true)))    
    router.push('/pages/inventory/checkout')
  }

  return (
    <div className="py-8 px-3 sm:px-6 xl:p-10" >
      <h1 className="text-2xl font-bold mb-5">Inventory</h1>

      <div className="w-full max-w-[1000px] bg-white rounded-lg p-4 md:p-7 shadow-lg ">
        <div className="flex items-center justify-between mb-8 pl-3 pr-2 ">
          <h2 className="font-medium text-xl hidden sm:inline-block ">Products</h2>
          <div className="flex gap-4">
            <button
              className="bg-[#635fc7] hover:bg-[#3c397e] outline-none text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                dispatch(openForm());
              }}
            >
              Add Product
            </button>

            <button
              className="bg-[#635fc7] hover:bg-[#3c397e] outline-none text-white font-bold py-2 px-4 rounded"              
            onClick={handlecheckout}
            >
              Checkout
            </button>
          </div>
        </div>

        <div className="h-fit mb-5">
        { products.length === 0 ? (
            <Loader />
          ) : (
            <Table data={products} selectedproducts = {selectedproducts} setselectedproducts ={setselectedproducts} />
          )}
        </div>
        <Newproductform />
      </div>
    </div>
  );
};

export default Inventory;
