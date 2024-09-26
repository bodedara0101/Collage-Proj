import { useEffect, useState } from "react";
import Header from "../../commonComponents/Header";
import SingleOrder from "./SingleOrder";

const Orders = () => {

  const [Orders, setOrders] = useState([])
  const [search, setSearch] = useState('')

  const getorders = async()=>{
    const result = await fetch("http://localhost:5000/getorder")

    const data = await result.json();
    setOrders(data)
    console.log(data)
}

useEffect(() => {
  getorders();
  const intervalId = setInterval(getorders, 3000); // Fetch every 10 seconds

    return () => clearInterval(intervalId);
}, [])

  return (
    <>
      <div className="sm:flex bg-slate-300 w-full h-screen">
        <div className="header lg:w-[20%] sm:w-[25%] w-full sm:h-full h-[10%]"><Header /></div>
        <div className="lg:w-[80%] sm:w-[75%] w-full sm:h-full h-[85%]">
          <h1 className="text-[2rem] font-semibold text-center my-5">
            Orders
          </h1>
          <div className="search w-full mx-auto">
            <form className="w-[50%] mx-auto">
              <input type="text" placeholder="Search" className="w-full mx-auto p-2 rounded-lg mb-5" onChange={(e) =>{
                setSearch(e.target.value)
              }}/>
            </form>
          </div>
          <div className="relative overflow-x-auto overflow-y-auto shadow-md sm:rounded-lg w-[90%] max-h-[75%] mx-auto">
            <table className="w-full text-sm text-left text-gray-700">
              <thead className="text-xs text-gray-700 uppercase bg-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3 hidden md:table-cell">
                    Order Id
                  </th>
                  <th scope="col" className="px-6 py-3 hidden md:table-cell">
                    Customer Name
                  </th>
                  <th scope="col" className="px-6 py-3 hidden md:table-cell">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3 hidden md:table-cell">
                    City
                  </th>
                  <th scope="col" className="px-6 py-3 hidden md:table-cell">
                    Address
                  </th>
                  <th scope="col" className="px-6 py-3 hidden md:table-cell">
                    Contact
                  </th>
                  <th scope="col" className="px-6 py-3 hidden md:table-cell">
                    Order Date
                  </th>
                  <th scope="col" className="px-6 py-3 hidden md:table-cell">
                    Items
                  </th>
                  <th scope="col" className="px-6 py-3 hidden md:table-cell">
                    Total Amount
                  </th>
                  <th scope="col" className="px-6 py-3 hidden md:table-cell">
                    Payment Method
                  </th>
                  <th scope="col" className="px-6 py-3 hidden md:table-cell">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {Orders.length > 0 ? (
                  Orders.map((order) => (
                    (order.uname.includes(search))?(
                    <SingleOrder
                      key={order._id}
                      id={order._id}
                      name={order.uname}
                      mail={order.uemail}
                      city={order.city}
                      address={order.address}
                      contact={order.number}
                      date={new Date(order.date).toLocaleString('en-IN',{timeZone : 'Asia/Kolkata'})}
                      items={order.items}
                      amount={order.totalAmount}
                      method={order.paymentMethod}
                      status={order.status}
                    />
                  ):null))
                ) : (
                  <tr>
                    <td colSpan="12" className="px-6 py-3 text-center">
                      No orders available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
