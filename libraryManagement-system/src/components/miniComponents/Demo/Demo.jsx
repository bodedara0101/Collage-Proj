import React, { useEffect, useState } from "react";
import SingleUser from "../../../adminPanel/UI/pages/users/SingleUser";

const Demo = () => {
  const [Data, setData] = useState({
    email: "",
  });
  const [Users, setUsers] = useState([]);

  const getusers = async () => {
    const response = await fetch("http://localhost:5000/getusers");
    const users = await response.json();
    console.log(users.users);
    setUsers(users.Nausers);
  };

  const getUsers = async () => {
    const response = await fetch("http://localhost:5000/getdemousers", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(Data),
    });
    const users = await response.json();
    console.log(users);
  };

  useEffect(() => {
    getusers();

    const intervalId = setInterval(getusers, 3000); // Fetch every 10 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="demo w-full bg-slate-800">
        <form className="w-[80%] mx-auto h-52 flex justify-center align-middle gap-3" onSubmit={(e)=>{
          e.preventDefault()
          getUsers();
        }}>
          <input
            type="email"
            placeholder="Email"
            className="w-[30%] h-10 mt-20 px-2"
            required={true}
            onChange={(e) => {
              Data.email = e.target.value;
            }}
          />
          <button
            type="submit"
            
            className="border-black bg-black px-5 text-white mt-20 h-10"
          >
            Delete
          </button>
        </form>
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {Users.map((obj, index) => (
              <SingleUser key={index} index={index} name={obj.userName} email={obj.email} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Demo;
