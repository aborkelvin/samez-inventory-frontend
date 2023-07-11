'use client'

import { useSelector } from "react-redux"

const Debtors = (props) => {

    const debtorsInfo = useSelector(state => state.debtors)
    {/* {debtorsInfo[0].customername} */}
    return(
        <div className="py-8 px-3 xl:p-10 " >
            <h1 className="text-2xl mb-4 font-bold" >Debtors</h1>
            
            <div className="bg-white w-full max-w-[1000px] ">
                <div className="w-full max-w-[1000px] h-2 bg-purple-800  rounded-t-lg " ></div>
                <table className=" w-full max-w-[1000px] shadow-lg rounded-t-lg text-left bg-white ">
                    <thead className="rounded-t-lg" >
                        <tr className="border-b " >
                            <th className="py-3  px-2 sm:px-6 " >Customer</th>
                            <th className="py-3 px-1 " >Amount owed</th>
                            <th className=" py-3 px-1 " >Transaction date</th>
                        </tr>
                    </thead>
                    <tbody>
                        { debtorsInfo.map((debtor,i) => (
                                    <tr key={i} className="border-b hover:bg-gray-100 text-left ">
                                        <td className="py-3 px-2 sm:px-6 ">
                                            {debtor.customername}
                                        </td>
                                        <td className="py-3 px-1 " >
                                            {debtor.amountowed}
                                        </td>
                                        <td className="py-3 px-1 " >
                                            {debtor.date}
                                        </td>
                                    </tr>
                
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
            
        </div>
    )
}

export default Debtors