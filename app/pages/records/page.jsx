'use client'
import { useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/navigation";

function RecordsPage() {
  const records = useSelector((state) => state.records.records);
  const router = useRouter()

  return (
    <div className="py-10 px-2 sm:px-8">
      <h1 className="text-2xl font-bold mb-4">Sales Records</h1>
      <div className="w-full max-w-[1000px] overflow-x-auto ">
        <div className="w-full max-w-[1000px] h-2 bg-purple-800  rounded-t-lg " ></div>
        <table className="w-full bg-white border shadow-lg text-left ">
          <thead>
            <tr className="border-b">
              <th className="py-3 px-4">Customer</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Final Price</th>
              <th className="py-3 px-4">Amount Paid</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, index) => (              
                <tr key={index} className="hover:bg-gray-100 border-b cursor-pointer "
                  onClick={ () => {
                    router.push(`/pages/records/${index}`)
                  } }
                  >                  
                    <td className="py-3 px-4">
                      {record.customername}
                    </td>
                    <td className="py-3 px-4">{record.date}</td>
                    <td className="py-3 px-4">₦ {record.finalprice}</td>
                    <td className="py-3 px-4">₦ {record.amountpaid}</td>                  
                </tr>
              
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecordsPage;
