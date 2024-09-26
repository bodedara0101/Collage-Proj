import React, { useContext, useEffect } from "react";
import { UserContext } from "./UserContext";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  console.log(user)
  const prf = JSON.parse(localStorage.getItem("Profile"))
  const logout = () => {
    setUser(null);
    toast.warn("Logged out")
    localStorage.setItem("Profile",null)
    console.log(prf)
  };
  
  return (
    <>
      {prf ? (
        <>
          <div className="bg-slate-400 p-3 rounded-[50%] w-12 flex justify-center" title={prf.email}>
            <button className="text-black font-extrabold text-center">{prf.userName[0].toUpperCase()}</button>
          </div>
          <button className="text-white bg-red-400 px-3 rounded py-2" onClick={(e)=>{
            e.preventDefault()
            logout();
          }}>Logout</button>
        </>
      ) : (
        <>
          <NavLink
            to="/login"
            className="relative inline-flex items-center justify-center p-0.5 mb-2  overflow-hidden text-xs sm:text-sm md:text-base lg:text-base font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-700 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 w-14 sm:w-full"
          >
            <span className="relative px-4 py-2 text-xs sm:text-sm md:text-base lg:text-base transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              LOGIN
            </span>
          </NavLink>
        </>
      )}
    </>
  );
};

export default Profile;
