'use client'

import { format, parseISO } from 'date-fns';
import { useRouter } from "next/navigation";
import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useReactToPrint } from "react-to-print";
import { addDebtor } from '../redux/features/debtorslice';
import { updateRecord } from "../redux/features/recordslice";

const Receiptpage = () =>{


  const router = useRouter()
  const dispatch = useDispatch()

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })

  const receiptinfo = useSelector(state => state.receipts.receiptInfo)

  const date = new Date();

  const formattedDate = format(date, "MMM d', 'HH:mm");

  console.log(formattedDate); // Output: "Jun 28th 14:21"


  return(
    <div className="p-7">
      <div className="bg-white w-[910px] h-[1100px] mx-auto mt-14 p-7" ref={componentRef} >
      
        <div className="bg-blue-400 h-5 " ></div>
        <div className="bg-gray-100 h-44 pl-4 pr-10 pt-6 flex justify-between mb-5 " >
          <div className="">
            <h1 className="font-bold text-xl mb-1 " >Samez Paints</h1>
            <p className="font-medium" >No. 14 Obinwanne line, Buildings</p>
            <p className="font-medium">08032012042</p>
            <p className="font-medium">09012345678</p>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-3" >Receipt</h1>
            <p className="mb-[5px]" >Date: <span className="border-b-2 border-black " >{date.toLocaleDateString()}</span> </p>
            <p>Receipt No: <span className="border-b-2 border-black" >12343</span> </p>
          </div>
        </div>
        <div className="w-[50%] flex flex-col gap-3 mb-7 ">
          <p className="" >Sold To: </p>
          <p className="border-b-2 border-black mb-2" >{receiptinfo.customername}</p>
          <p className="border-b-2 border-black mb-6 " >09123456789</p>
          <p className="border-b-2 border-black mb-2 " > </p>
          <p className="border-b-2 border-black mb-6 " >{receiptinfo.paymentmode} payment </p>
        </div>
        <div>
          <table className="w-full border-2 border-gray-300 mb-5" >
            <thead>
              <tr className="bg-blue-400" >
                  <th className="py-2 px-1 text-left w-[45%] ">DESCRIPTION</th>
                  <th className="py-2 px-1 text-left">QUANTITY</th>
                  <th className="py-2 px-1 text-left">UNIT PRICE</th>
                  <th className="py-2 px-1 text-left">TOTAL</th>
              </tr>
            </thead>
            <tbody>
              {receiptinfo.productdescription.map((item) => (
                <tr className="border-b hover:bg-gray-100 text-left">
                  <td className="py-2 px-1 border-r">{item.productName}</td>
                  <td className="py-2 px-1 border-r">{item.buyquantity} kg</td>
                  <td className="py-2 px-1 border-r">₦ {item.sellingPrice}</td>
                  <td className="py-2 px-1">₦ {item.subtotal}</td>
                </tr>
              ))}
              {Array.from({ length: receiptinfo.productdescription.length > 5 ? 3 : 5 }).map((_, index) => (
                <tr className="h-10 border-b hover:bg-gray-100 text-left" key={index}>
                  <td className="py-2 px-1 border-r"></td>
                  <td className="py-2 px-1 border-r"></td>
                  <td className="py-2 px-1 border-r"></td>
                  <td className="py-2 px-1 border-r"></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="ml-auto pr-2 flex flex-col gap-3 w-[320px] " >
            <div className="flex gap-2 items-end ">
              <p>Subtotal: </p>
              <p className="border-b-2 border-black w-full text-right " >₦ {receiptinfo.totalprice}</p>
            </div>
            <div className="flex gap-2 items-end ">
              <p className="flex-shrink-0" >Discount fdjn: </p>
              <p className="border-b-2 w-full border-black text-right " >₦ {receiptinfo.discountamount}</p>
            </div>
      
            <div className="flex gap-2 ">
              <p className="flex-shrink-0" >Final Price: </p>
              <p className="border-b-2 border-black w-full text-right " >₦ {receiptinfo.finalprice}</p>
            </div>
            <div className="flex gap-2 ">
              <p className="flex-shrink-0" >Amount Paid: </p>
              <p className="border-b-2 border-black w-full text-right " >₦ {receiptinfo.amountpaid}</p>
            </div>
            <div className="flex gap-2 ">
              <p className="flex-shrink-0" >Amount owed: </p>
              <p className="border-b-2 border-black w-full text-right " >₦ {receiptinfo.finalprice - receiptinfo.amountpaid}</p>
            </div>
          </div>
      
        </div>
      
      </div>

      <button className="py-2 px-5 bg-blue-600 hover:bg-blue-700 text-white font-bold block mx-auto rounded-md shadow-lg mt-5 " 
        onClick={ () =>{
          //window.print()
          handlePrint() 
          
          let Recordsinfo  = {...receiptinfo};
          Recordsinfo['recordtype'] = 'Sales';
          Recordsinfo['date'] = formattedDate;
                    
          dispatch(updateRecord(Recordsinfo)) // this will be calling an api later and then updating the redux store with the api result
          
          if(receiptinfo.amountpaid < receiptinfo.finalprice){
            let debtor = {
              finalprice:receiptinfo.finalprice,
              customername: receiptinfo.customername ,
              amountpaid: receiptinfo.amountpaid,
              amountowed: receiptinfo.finalprice - receiptinfo.amountpaid,        
              paymentmode: receiptinfo.paymentmode ,
              date:formattedDate,
              receiptid: receiptinfo.receiptid 
            }            
            dispatch(addDebtor(debtor))
          }

          router.push('/pages/records')      
        } }
        >
          Print / Download Receipt
      </button>

      <button className="py-2 px-5 min-w-[210px] bg-blue-600 hover:bg-blue-700 text-white font-bold block mx-auto rounded-md shadow-lg mt-5 " 
        onClick={ () =>{          
          router.back()
        } }
        >
          Go Back
      </button>

      
    </div>
  )
}

export default Receiptpage