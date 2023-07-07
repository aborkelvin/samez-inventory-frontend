'use client'
import { useSelector } from "react-redux";
import Link from "next/link";

function RecordsPage() {
  const records = useSelector((state) => state.records.records);

  return (
    <div className="py-10 px-2 sm:px-8">
      <h1 className="text-2xl font-bold mb-4">Sales Records</h1>
      <div className="flex flex-col w-full xl:w-[70%] md:max-w-[500px] xl:max-w-[700px] gap-4">
        {records.map((record, index) => (
          <Link key={index} href={`/pages/records/${index}`}>
            <div className="bg-white p-4 border border-gray-300 shadow hover:bg-gray-100 rounded cursor-pointer">
              <div className="flex justify-between gap-3 ">
                  <div className="mb-2 font-bold ">
                    {/* <span className="font-semibold">Customer Name:</span>{" "} */}
                    {/* {record.customername} */}
                    {record.recordtype}
                  </div>
                  <div className="mb-2">
                    <span className="font-semibold">Total Price:</span>{" "}
                    ₦ {record.finalprice}
                  </div>
              </div>
              <div className="flex justify-between gap-3">
                  <div className="mb-2">
                    {/* <span className="font-semibold">Date:</span> */} {record.date}
                  </div>
                  
                  <div className="mb-2">
                    <span className="font-semibold">Amount Paid:</span>{" "}
                    ₦ {record.amountpaid}
                  </div>
              </div>
              {/* Add any other relevant summary information here */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RecordsPage;
