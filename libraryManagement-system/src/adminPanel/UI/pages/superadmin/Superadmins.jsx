import { useEffect, useState } from "react";
import Header from "../../commonComponents/Header";
import SingleSAdmin from "./SingleSAdmin";
const SuperAdmins = () => {

  const [superAdmins, setSuperAdmins] = useState([]);

  const getSuperAdmins = async () => {
    const response = await fetch("http://localhost:5000/getusers");
    const users = await response.json();
    console.log(users.users);
    setSuperAdmins(users.users);
  };

  useEffect(() => {
    getSuperAdmins();

    const intervalId = setInterval(getSuperAdmins, 3000); // Fetch every 10 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className=" sm:flex bg-slate-300 ">
      <div className="header md:w-[20%] sm:w-[25%] w-full"><Header /></div>
        <div className=" md:w-[80%] sm:w-[70%] mx-auto">
          <h1 className="text-[2rem] font-semibold text-center mt-10 mb-5">
            SuperAdmins
          </h1>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-5 border rounded">
            <table className="w-full text-sm text-left text-gray-700">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    #
                  </th>
                  <th scope="col" className="px-6 py-3">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {superAdmins.map((obj, index) => (
                  <SingleSAdmin
                    key={index}
                    index={index}
                    id={obj._id}
                    name={obj.userName}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuperAdmins;
