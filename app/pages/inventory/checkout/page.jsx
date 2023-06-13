'use client'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { setReceiptInfo } from '@/app/redux/features/receiptslice';

const Checkout = () => {


    const dispatch = useDispatch()
    const router = useRouter()  

    const selectedProducts = useSelector((state) => state.products.selectedProducts);
    const [quantities, setQuantities] = useState({});

    const [discountamount, setdiscountamount] = useState()
    const [discount, setdiscount] = useState("true")  
    const [paymentamount, setpaymentamount] = useState()
    const [paymenttype, setpaymenttype] = useState("fullpayment")
    
    const [paymentmode ,setpaymentmode] = useState("cash")

    const handlediscountchange = (event) => {
        setdiscount(event.target.value)
        event.target.value == "true" ? setdiscountamount(500) : setdiscountamount(0)
    }
  
    const handlepaymenttype = (event) =>{
        setpaymenttype(event.target.value)
    }
  
    const handleQuantityChange = (productId, quantity) => {
        setQuantities((prevQuantities) => ({
          ...prevQuantities,
        [productId]: quantity,
        }));
    };

    const calculateSubtotal = (product) => {
        const quantity = quantities[product._id] || 0;
        return product.sellingPrice * quantity;
    };

    const calculateTotalPrice = () => {
        let totalPrice = 0;
        selectedProducts.forEach((product) => {
        const quantity = quantities[product._id] || 0;
        totalPrice += product.sellingPrice * quantity;
        });
        return totalPrice;
    };

/*  const [receiptinfo, setreceiptinfo] = useState({})

    setreceiptinfo(
        (receiptinfo) => ({
            ...receiptinfo,
            totalprice,
            discount,
            discountamount,
            finalprice,
            customername:customername.value,
            amountpaid:paymentamount ? paymentamount : 0 ,        
            productdescription:selectedProducts.map((product,index) => ({
                ...product,
                buyquantity: quantities[product._id],
                subtotal: product.sellingPrice * quantities[product._id]
                
                })
            )
        })
    )
 */
    const handlegetreceipt = (event) => {
        event.preventDefault()

        let totalprice = calculateTotalPrice()
        let finalprice;
        discountamount > 0 && totalprice > 0  ? finalprice = totalprice - discountamount  : finalprice = totalprice

        const receiptInfo = {        
            totalprice,
            discount,
            discountamount,
            finalprice,
            customername:customername.value,
            amountpaid:paymentamount ? paymentamount : 0 ,
            paymenttype,
            paymentmode,
            productdescription:selectedProducts.map((product,index) => ({
                ...product,
                buyquantity: quantities[product._id],
                subtotal: product.sellingPrice * quantities[product._id]
                
                })
            )
        }

        dispatch(setReceiptInfo(receiptInfo))    
        router.push('/receiptpage')
    }    

    return (
        <div className="p-10 min-h-screen w-full">
            <h1 className="text-2xl font-bold mb-5">Checkout</h1>

            <div className="w-full max-w-[1000px] bg-white rounded-lg p-7 mb-10 ">
                {selectedProducts.length === 0 ? (
                <>
                    <p className='mb-5' >No products selected</p>
                    <Link href="/pages/inventory" className="bg-blue-500 hover:bg-blue-600 outline-none text-white font-bold py-2 px-4 rounded">
                        Go to inventory      
                    </Link>
                    
                </>          
                ) : (
                <table className="w-full">
                    <thead>
                    <tr>
                        <th className="py-2 px-1 text-left">Product Name</th>
                        <th className="py-2 px-1 text-left">Quantity Available</th>
                        <th className="py-2 px-1 text-left">Selling Price</th>
                        <th className="py-2 px-1 text-left">Quantity to Buy</th>
                        <th className="py-2 px-1 text-left">Subtotal</th>
                    </tr>
                    </thead>
                    <tbody>
                    {selectedProducts.map((product) => (
                        <tr key={product._id} className="border-b hover:bg-gray-100 text-left">
                            <td className="py-2 px-1">{product.productName}</td>
                            <td className="py-2 px-1">{product.quantityAvailable} Kg</td>
                            <td className="py-2 px-1">N {product.sellingPrice}</td>
                            <td className="py-2 px-1">
                                <input
                                type="number"
                                min="1"
                                max={product.quantityAvailable}                        
                                className="w-16 py-1 px-2 border border-gray-300 rounded outline-[#EEE2DE] "
                                onChange={(e) => handleQuantityChange(product._id, parseInt(e.target.value))}
                                />
                            </td>
                            <td className="py-2 px-1">N {calculateSubtotal(product)}</td>
                        </tr>
                    ))}
                    <tr className="h-10">
                        <td className="py-2 px-1" colSpan={5}></td>
                    </tr>
                    <tr className='' >
                        <td className="py-2 px-1" colSpan={3}></td>
                        <td className="py-2 px-1 text-right font-bold">Total Price:</td>
                        <td className="py-2 px-1 font-bold">N {calculateTotalPrice()}</td>
                    </tr>
                    {/* <tr className="">
                            <td className="py-2 px-1" colSpan={5}></td>
                    </tr>
                    <tr>
                        <td className='text-right pr-20 ' colSpan={5}  >
                            <button className="bg-blue-500 hover:bg-blue-600 outline-none text-white font-bold py-2 px-4 rounded">
                                Checkout
                            </button>
                        </td>
                    </tr> */}
                    </tbody>
                </table>
                )}           
            </div>

            <div className="w-fit xl:min-w-[800px] max-w-[1000px] bg-white rounded-lg p-7">
                <form action="" className='max-w-[400px] lg:max-w-full flex flex-col lg:flex-row gap-9 xl:gap-[90px]' >
                    <div className=" flex flex-col gap-7 flex-1 ">
                        <div className="flex flex-col gap-2 w-full">
                            <label htmlFor="customername">
                                Customer Name:
                            </label>
                            <input type="text"
                                name="customername"
                                id="customername"
                                className='border-2 border-[#EEE2DE] rounded-md h-9 px-2 outline-none '                                            
                            />
                        </div>
                        <div>
                            <p className='mb-1' >Discount available ?</p>
                            <div className=" flex gap-2 items-center ">
                                <input type="radio"
                                    name="discount"
                                    id="yes"
                                    value = "true"
                                    className='cursor-pointer'
                                    checked={discount === "true"}
                                    onChange = {handlediscountchange}
                                />
                                <label htmlFor="yes" className='cursor-pointer' >Yes</label>
                            </div>
                            <div className=" flex gap-2 items-center">
                                <input type="radio"
                                    name="discount"
                                    id="no"
                                    value={false}
                                    className='cursor-pointer'
                                    checked = {discount === "false"}
                                    onChange={handlediscountchange}
                                />
                                <label htmlFor="no" className='cursor-pointer' >No</label>
                            </div>
                        </div>
                        
                        <div className={` ${discount == "true" ? "block" : "hidden"} `}>
                            <label htmlFor="discountamount">Discount amount:</label>
                            <input type="number"
                            name="discountamount"
                            id="discountamount"
                            className='border-2 border-[#EEE2DE] rounded-md h-9 px-2 outline-none block'
                            min={0}
                            value = {discountamount}
                            onChange = {(event)=>{
                                setdiscountamount(parseInt(event.target.value))
                            }}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-7 flex-1">
                        <div>
                            <p className='mb-1' >Payment mode:</p>
                            <div className=" flex gap-2 cursor-pointer items-center ">
                                <input type="radio" 
                                name="paymentmode" 
                                id="cash" 
                                value="cash" 
                                className='cursor-pointer' 
                                checked = {paymentmode == 'cash'} 
                                onChange = {() => { setpaymentmode('cash') }}
                                />
                                <label htmlFor="cash" className='cursor-pointer' >Cash</label>
                            </div>
                            <div className=" flex gap-2 cursor-pointer items-center mb-5 ">
                                <input type="radio" 
                                name="paymentmode" 
                                id="transfer" 
                                value="transfer" 
                                className='cursor-pointer' 
                                checked = {paymentmode == 'transfer'} 
                                onChange = {() => { setpaymentmode('transfer') }}
                                />
                                <label htmlFor="transfer" className='cursor-pointer' >Transfer</label>
                            </div>
                            <div className=" flex gap-2 cursor-pointer items-center">
                                <input type="radio"
                                name="paymenttype"
                                id="fullpayment"
                                value="fullpayment"
                                className='cursor-pointer'
                                checked={paymenttype === "fullpayment"}
                                onChange = {handlepaymenttype}/>
                                <label htmlFor="fullpayment" className='cursor-pointer' >Full payment</label>
                            </div>
                            <div className=" flex gap-2 cursor-pointer items-center">
                                <input type="radio"
                                name="paymenttype"
                                id="partpayment"
                                value="partpayment"
                                className='cursor-pointer'
                                checked={paymenttype === "partpayment"}
                                onChange = {handlepaymenttype}/>
                                <label htmlFor="partpayment" className='cursor-pointer' >Part payment</label>
                            </div>
                        </div>
                        <div className={` ${paymenttype == "partpayment" ? "block" : "hidden"} `}>
                            <label htmlFor="amounttopay">Amount to pay:</label>
                            <input type="number"
                            name="amounttopay"
                            id="amounttopay"
                            className='border-2 border-[#EEE2DE] rounded-md h-9 px-2 outline-none block'
                            min={0}
                            value = {paymentamount}
                            onChange = {(event)=>{
                                setpaymentamount(parseInt(event.target.value))
                            }}
                            />
                        </div>
                        <div className="font-bold text-lg ">
                            Final Price:
                            <span className='text-xl'> N {(() => {
                            let totalprice = calculateTotalPrice()
                            let finalprice;
                            discountamount > 0 && totalprice > 0  ? finalprice = totalprice - discountamount  : finalprice = totalprice
                            return finalprice
                            })() }
                            </span>
                        </div>
                        <button className="bg-blue-500 hover:bg-blue-600 outline-none text-white font-bold py-2 px-4 rounded text-center"
                        onClick={handlegetreceipt}
                        >
                            Pay & Get receipt {/* Checkout */}
                        </button>
                    </div>

                </form>
            </div>


        </div>
    );
};

export default Checkout;
