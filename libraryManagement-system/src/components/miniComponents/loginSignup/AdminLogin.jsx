import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const AdminLogin = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  console.log(isAdmin)
  const handleCheckboxChange = () => {
    setIsAdmin(!isAdmin); // Toggle checkbox state
  };

  const adminLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/adminlogin",{
        method : "POST",
        headers : {
          "Content-type" : "application/json"
        },
        body : JSON.stringify({email,password})
      }); 
  
      const status = await response.status
      const result = await response.json()
  
      console.log(status)
      if(status == 200){
        toast.success(`${result.message} as ${result.admin.userName}`)
        navigate("/dashboard")
      }else if(status == 401){
        toast.warn(`${result.email} ${result.message}`)
      }else{
        toast.warn(`${result.message}`)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="h-screen w-screen  flex justify-center items-center">
        <div className="w-[100%]  bg-white ">
          <section className="bg-gray-50">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <div className="w-full bg-white rounded-md shadow border md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                    Welcome Back!!
                  </h1>
                  <form className="space-y-4 md:space-y-6" onSubmit={(e)=>{
                    e.preventDefault();
                    adminLogin()
                  }}>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        ID
                      </label>
                      <input
                        name="email"
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Admin"
                        required="true"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        value={password}
                        minLength={8}
                        maxLength={12}
                        onChange={(e)=> setPassword(e.target.value)}
                        id="password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        required="true"
                      />
                    </div>
                    <div className="flex gap-3 justify-between">
                      <div className="checkbox flex justify-center items-center gap-3">
                      <input
                        type="checkbox"
                        checked={isAdmin}
                        onChange={handleCheckboxChange}
                      />
                      check if you admin
                      </div>
                      <button
                      type="submit"
                        className="w-[50%] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                      >
                        LOGIN
                      </button>
                    </div>
                    <div className="flex items-center justify-end">
                      <NavLink
                        to="/login"
                        className="text-sm font-medium text-primary-600 hover:underline"
                      >
                        Goto User Login
                      </NavLink>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
export default AdminLogin;
