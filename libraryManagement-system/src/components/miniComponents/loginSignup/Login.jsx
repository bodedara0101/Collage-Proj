import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Login = () => {

  const navigate = useNavigate();

  const [userIn, setUserIn] = useState({
    userName : '',
    email : '',
    password : ''
  })

  const login = async() =>{
    try {
      const sendUserInfo = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userIn), // Send form data as JSON
      });

      const status = await sendUserInfo.status;
      const json = await sendUserInfo.json();

      if(json.message === "Login success"){
        navigate('/');
        toast.success(`${json.message} as ${json.email}`)
        console.log(status,json)
      }
      else{
        toast.warn(`${json.message}`)
        console.log(status,json)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="h-screen w-screen  flex ">
        <div className=" max-[639px]:hidden sm:w-[50%] lg:w-[60%] overflow-hidden flex justify-center items-center bg-[#5d87ff] bg-opacity-[12.5%]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 750 750"
            className="w-[100%] lg:w-[70%] mx-auto"
            viewBox="0 0 750 750"
          >
            <path
              fill="#fc6054"
              d="M455.6,603.3c-2.9,7.2-5.7,15.2-7.7,22.5c-1.8,6.9-2.9,13.1-2.5,17.6c0.5,5.1,4.5,9.2,9.6,9.6        c21,2,74.4,5.6,75.8-0.3c2.3-9.9-11.2-17.9-20.7-22.7c-4.5-2.2-7.9-5.9-9.9-10.3c-1.1-2.4-1.8-5.1-1.9-7.8L455.6,603.3z"
            />
            <path
              fill="#e64b38"
              d="M455.6,603.3c-2.9,7.2-5.7,15.2-7.7,22.5c15.7,10,39.4,0.6,52.2-6c-1.1-2.4-1.8-5.1-1.9-7.8L455.6,603.3z        "
            />
            <path
              fill="#112544"
              d="M496.5 650.1c-14.1 0-31.5-1.2-46.5-5.7-.5-.2-.8-.7-.7-1.2.2-.5.7-.8 1.2-.7 31 9.4 72.7 4.2 73.1 4.2.6-.1 1 .3 1.1.9.1.5-.3 1-.9 1.1C523.8 648.7 512.1 650.1 496.5 650.1zM503.7 630.5c-.3 0-.6-.1-.8-.4-.3-.4-.2-1.1.2-1.4l4.5-3.2c.4-.3 1.1-.2 1.4.2.3.4.2 1.1-.2 1.4C504.2 630.3 504.3 630.5 503.7 630.5zM506.7 633.5c-.3-.4-.2-1.1.2-1.4l4.5-3.2c.4-.3 1.1-.2 1.4.2.3.4.2 1.1-.2 1.4l-4.5 3.2C507.6 634 507 633.9 506.7 633.5zM499.1 626.6c-.3-.4-.2-1.1.2-1.4l4.5-3.2c.4-.3 1.1-.2 1.4.2.3.4.2 1.1-.2 1.4l-4.5 3.2C500.1 627.2 499.4 627.1 499.1 626.6z"
            />
            <path
              fill="#fc6054"
              d="M183.6,579.6c-5.6,5.4-11.4,11.6-16.2,17.4c-4.5,5.5-8,10.8-9.4,15c-1.7,4.9,0.4,10.2,4.8,12.7        c18.4,10.3,65.8,35.3,69.4,30.5c6.1-8.1-3-21-9.7-29.1c-3.2-3.8-4.9-8.6-4.9-13.4c0-2.7,0.4-5.4,1.4-7.9L183.6,579.6z"
            />
            <path
              fill="#e64b38"
              d="M183.6,579.6c-5.6,5.4-11.4,11.6-16.2,17.4c10.3,15.5,35.8,16.5,50.2,15.7c0-2.7,0.4-5.4,1.4-7.9        L183.6,579.6z"
            />
            <path
              fill="#112544"
              d="M227.7 648.8c-.4-.1-41-12.5-65.9-33.9-.4-.4-.5-1-.1-1.4.4-.4 1-.5 1.4-.1 24.6 21.1 64.7 33.4 65.1 33.5.5.2.8.7.7 1.2C228.7 648.7 228.2 649 227.7 648.8zM215.9 623.3c-.1-.5.2-1.1.8-1.2l5.4-1.1c.5-.1 1.1.2 1.2.8.1.5-.2 1.1-.8 1.2l-5.4 1.1C216.6 624.1 216 623.8 215.9 623.3zM218 627.9c-.1-.5.2-1.1.8-1.2l5.4-1.1c.5-.1 1.1.2 1.2.8s-.2 1.1-.8 1.2l-5.4 1.1C218.6 628.8 218.1 628.5 218 627.9zM213.9 618.6c-.1-.5.2-1.1.8-1.2l5.4-1.1c.5-.1 1.1.2 1.2.8.1.5-.2 1.1-.8 1.2l-5.4 1.1C214.5 619.5 214 619.1 213.9 618.6zM306.9 122.6h-10.1c-.6 0-1-.4-1-1s.4-1 1-1h10.1c.6 0 1 .4 1 1S307.4 122.6 306.9 122.6z"
            />
            <path
              fill="#8d95ff"
              d="M508.8,598.2c-1.7,9-2.9,14.5-2.9,14.5c-3.3,5.8-65.2,0.6-65.2-4.6c1.9-47.1,18-88.3-0.8-118      c-12.3-19.5-37.6-19.8-62.7-40.4c-8.3,15.9-29.3,55.7-40.5,69.7c-20.8,25.9-103.1,89.3-103.1,89.3c-10,8.9-73.3-16.9-65.7-27.6      c0,0,87.1-74.3,99.8-109c19.8-54.1,48.3-97.8,78-120.9l55.8,8.6l22.8,3.5c0,0,4.2,3.2,10.8,8.5c22.9,18.4,74.8,62.4,83.2,87.6      C528,488.7,515,565.9,508.8,598.2z"
            />
            <path
              fill="#757bff"
              d="M508.8,598.2c-1.7,9-2.9,14.5-2.9,14.5c-3.3,5.8-65.2,0.6-65.2-4.6c1.9-47.1,18-88.3-0.8-118      c-12.3-19.5-37.6-19.8-62.7-40.4c4.7,5.4,34.1-114.8,54.6-100.3c6.6,4.1,6.2,15.9,3.4,22.6c-0.2,0.6-0.5,1.1-0.8,1.6      c-3.5,6.2-9.4,10.7-15,15c-5.7,4.4-11.4,9-14.5,15.5c-4.5,9.4-2.1,21.1,3.7,29.8c5.8,8.7,14.4,15.1,23.2,20.8      s17.8,11.1,25.2,18.6c10.1,10.3,16.3,24.4,17,38.8c0.7,14.1-3.6,27.9-4.4,42c-0.8,14.1,3.1,30,15.2,37.1      c6.5,3.8,14.2,4.5,21.5,6.3C507.1,597.7,507.9,597.9,508.8,598.2z"
            />
            <path
              fill="#112544"
              d="M346.9,404.2c0-0.6,0.4-1,1-1c15.2-0.6,19.7-9.8,17-18.7c-0.2-0.5,0.1-1.1,0.7-1.2c0.5-0.2,1.1,0.1,1.2,0.7      c3,10.2-2.4,20.6-18.8,21.2C347.3,405.2,346.9,404.8,346.9,404.2z"
            />
            <path
              fill="#fcbba4"
              d="M345,394.2c4.8,2.7,13.4,11.9,12.2,18.1c-1.1,5.5-9.8-4.1-9.8-4.1s4.5,17.8,1.1,19.7      c-1.9,1.1-6.1-5.9-6.9-14.3c0,0,2.1,16.2-1.5,17c-4.4,1-4.3-15-4.3-15s1.4,15.5-2.7,15.8c-4,0.3-2.1-18.1-2.1-18.1      s-0.5,14.4-4,14c-2.9-0.4-2.6-15.2-2.2-20.3C325.1,401.1,327.6,384.5,345,394.2z"
            />
            <path
              fill="#112544"
              d="M365.8,471.1c-0.5-0.3-0.6-0.9-0.4-1.4c30.4-52.1,40.9-102.6,41-103.1c0.1-0.5,0.6-0.9,1.2-0.8      c0.5,0.1,0.9,0.6,0.8,1.2c-0.1,0.5-10.7,51.3-41.3,103.7C366.9,471.2,366.3,471.4,365.8,471.1z"
            />
            <path
              fill="#112544"
              d="M427.9,479.2c-5.4-3.7-11.7-6.6-18.5-9.7c-10.1-4.6-21.5-9.8-32.8-19.1c-0.4-0.3-0.5-1-0.1-1.4      c0.3-0.4,1-0.5,1.4-0.1c11.1,9.1,22.4,14.3,32.4,18.8c6.8,3.1,13.3,6.1,18.8,9.8c0.5,0.3,0.6,0.9,0.3,1.4      C429,479.4,428.4,479.5,427.9,479.2z"
            />
            <path
              fill="#66d3d8"
              d="M338.5,357.4c0,0,1.4-41.6,14.5-62.2c0,0-10.7-73.7,57.3-67.8c49.9,4.3,73.9,31,73.9,31      s-15.5,120.3-31.5,127.9c-17.3,8.2-43.6-33.2-73.3-22C349.5,375.5,338.5,357.4,338.5,357.4z"
            />
            <path
              fill="#66d3d8"
              d="M588,300.5c-36.7,53.6-74.1,87.8-108,78.5c-3.2-0.9-6.3-2.3-9.1-4.3c-35.4-23.8-44.6-120.9-44.6-120.9      l21.1-18c62,17.6,57.7,86.4,57.7,86.4c4.6-7,10.2-13.4,16.1-19.1c20.1-19.4,43.9-30.5,43.9-30.5L588,300.5z"
            />
            <path
              fill="#47b6c3"
              d="M588,300.5c-36.7,53.6-74.1,87.8-108,78.5c-3.2-0.9-6.3-2.3-9.1-4.3c2.6-2.2,6-3.8,9.1-5      c9.8-3.8,20.2-6.2,29.8-10.4c9.6-4.3,18.8-10.7,23.5-20.1c4.7-9.4,3.7-22.2-4.3-29c-2.6-2.2-5.3-3.3-7.8-7.1      c20.1-19.4,43.9-30.5,43.9-30.5L588,300.5z"
            />
            <path
              fill="#fff"
              d="M624,358.6c-0.5,0.5-1.1,0.8-1.8,0.9c-48.8,5.7-89.9-45.6-117.3-130.1c-0.5-1.6,0.5-3.3,2.2-3.6      c28.6-5.1,51-25.6,57.3-31.9c1-1,2.6-1.1,3.8-0.2c16.6,13.5,36.1,24.2,58.3,32.2c0.8,0.3,1.4,0.9,1.7,1.6      C647.7,279,653.9,325.3,624,358.6z"
            />
            <path
              fill="#ff987a"
              d="M449.4 184.5l.2-.1c.4-.2.7.3.3.5-.1 0-.1.1-.2.1C449.3 185.2 449 184.7 449.4 184.5zM449.7 184.7l.1.3L449.7 184.7zM441.2 186.3C441.2 186.3 441.2 186.3 441.2 186.3c-.4 0-.8-.1-1.2-.1-.2 0-.3-.3-.2-.5.1-.1.2-.1.3-.1.4 0 .8.1 1.2.1C441.6 185.7 441.6 186.3 441.2 186.3z"
            />
            <path
              fill="#ff987a"
              d="M441.2,186.3L441.2,186.3C441.2,186.3,441.2,186.3,441.2,186.3c-0.2,0-0.3-0.2-0.3-0.3      c0-0.2,0.2-0.3,0.3-0.3c1.1,0.1,1.7,0.1,1.9,0.1c0,0,0,0,0,0c0.4,0,0.4,0.6,0,0.6C442.6,186.4,441.9,186.4,441.2,186.3z"
            />
            <path
              fill="#ff987a"
              d="M443.4,186.4c-0.4,0-0.4-0.6,0-0.6c0.3,0,0.7,0,1,0c0.2,0,0.3,0.1,0.3,0.3c0,0.2-0.1,0.3-0.3,0.3      C444.1,186.3,443.7,186.4,443.4,186.4C443.4,186.4,443.4,186.4,443.4,186.4z"
            />
            <path
              fill="#fcbba4"
              d="M410.8,232.1c1.7,2.4,4.1,5.7,7.3,8.4c8.9,7.7,22.8,3.7,26.3-7.5l4.1-13.1c0,0,11,2.6,14.6-7.9      c1-2.9,0.8-8.1-0.2-14c-0.3-2.2-0.8-4.5-1.3-6.9c-1.1-5.4-2.6-11-4.1-15.8c-3.1,1.6-7.7,2.2-14.4,1.2c0,0-4,8.5-15.9,3      c0,0,6.4,12.7-5.3,16.7c-2.1,0.7-4.4,0.2-6.7-1c0.6,3.5,1.9,4.9,4.4,7.7l-9.7,21.8C409,227.1,409.3,229.9,410.8,232.1z"
            />
            <path
              fill="#112544"
              d="M417.4,241.3c-3.3-2.9-5.9-6.3-7.5-8.6c-1.1-1.6-1.6-3.5-1.5-5.4c0-0.6,0.5-1,1.1-0.9c0.6,0,1,0.5,0.9,1.1      c-0.1,1.5,0.3,2.9,1.2,4.1c1.5,2.2,4,5.5,7.1,8.2c8.1,7,20.6,3.8,24.4-6c0.2-0.5,0.8-0.8,1.3-0.6c0.5,0.2,0.8,0.8,0.6,1.3      C440.7,245.5,426.7,249.3,417.4,241.3z"
            />
            <path
              fill="#112544"
              d="M409.4 228.4c-.6 0-1-.5-.9-1.1.1-1.1.3-2.1.8-3.1.2-.5.8-.7 1.3-.5.5.2.7.8.5 1.3-.3.8-.5 1.6-.6 2.4C410.4 228 410 228.4 409.4 228.4zM462.2 156.4c2.6 6.4 4.4 23.8-19 20.1 0 0-4 8.5-15.9 3 0 0 6.4 12.7-5.3 16.7-11.6 3.9-31-28.5-8.5-32.2 0 0-1.6-7.2 6.4-4.8 0 0 2.6-15.1 17.6-6.4C437.5 152.8 454.8 138.2 462.2 156.4z"
            />
            <path
              fill="#112544"
              d="M460.1 184.1c-.8-3-1.6-6-2.4-8.8 4.2-2.2 5.8-6.1 6.1-10C466.1 169.2 470.4 178.5 460.1 184.1zM443.8 191.3c.3 1.2 1.2 1.9 2.1 1.7.9-.2 1.3-1.3 1-2.5-.3-1.1-1.2-1.9-2.1-1.7C444 189.1 443.5 190.2 443.8 191.3zM457.5 188.8c.3 1.2 1.2 1.9 2.1 1.7.9-.2 1.3-1.3 1-2.5-.3-1.1-1.2-1.9-2.1-1.7C457.6 186.6 457.2 187.7 457.5 188.8zM439.9 185.3c-.8.5-.5 1.1.4 1.2 2.5.5 5.1-.2 7.1-1.7.7-.5.4-1.2-.4-1.4-.7-.2-1.6 0-2.2.1C443.1 183.9 441.4 184.5 439.9 185.3z"
            />
            <path
              fill="#112544"
              d="M453.6,182c-0.7,0.4-0.6,1,0.4,1.2c2.5,0.5,5.1-0.2,7.1-1.7c0.7-0.5,0.4-1.2-0.4-1.4      c-0.7-0.2-1.6,0-2.2,0.1C456.9,180.5,455.2,181.1,453.6,182z"
            />
            <path
              fill="#f97a5d"
              d="M451.6,208.5c-0.4-0.3-0.5-1-0.2-1.4c0.3-0.4,1-0.5,1.4-0.2c3.3,2.5,5.3,0.4,5.5,0.1      c0.4-0.4,1-0.5,1.4-0.1c0.4,0.4,0.5,1,0.1,1.4C458.1,210.4,454.8,211,451.6,208.5z"
            />
            <path
              fill="#e2805d"
              d="M448.5,219.9c0,0-8.6-1.6-16.2-8.2c-0.5-0.5-1.3,0.1-1,0.8c1.7,4.1,6,11.6,15.1,14.2L448.5,219.9z"
            />
            <path
              fill="#fcbba4"
              d="M411.1,196.1c1.3,5,5.7,8.5,9.7,7.8c4.1-0.7,6.3-5.4,5-10.4c-1.3-5-5.7-8.5-9.7-7.8      C412.1,186.3,409.8,191,411.1,196.1z"
            />
            <path
              fill="#f97a5d"
              d="M418.4 196.9l-1-1.9c-.3-.5-.1-1.1.4-1.4.5-.3 1.1-.1 1.4.4l1 1.9c.3.5.1 1.1-.4 1.4C419.3 197.5 418.7 197.3 418.4 196.9zM452.9 198.8c0-.6.4-1 .9-1.1.1 0 2.2-.2 2.3-.3.4-1-2-4.8-4.3-7.5-.4-.4-.3-1.1.1-1.4.4-.4 1.1-.3 1.4.1 1.3 1.6 5.6 6.9 4.6 9.5-.2.4-.6 1.2-1.8 1.4-.8.1-1.5.2-2.2.3C453.4 199.8 452.9 199.3 452.9 198.8z"
            />
            <path
              fill="#112544"
              d="M503.9,229.7c-0.7-2.2,0.7-4.5,3-4.9c28.3-5.1,50.6-25.5,56.7-31.6c1.4-1.4,3.6-1.5,5.1-0.2      c16.2,13.2,35.7,24,58,32c1.1,0.4,1.9,1.2,2.3,2.2c10.9,28.7,16.4,52.4,16.6,72.7c0.3,24-6.6,43.5-20.9,59.4      c-0.6,0.7-1.5,1.1-2.4,1.2C561.1,367.7,522.9,288.3,503.9,229.7z M565,194.6c-6.3,6.2-28.9,27-57.8,32.2      c-1.1,0.2-1.8,1.3-1.4,2.3c18.7,57.7,56.3,136.4,116.2,129.4c0.7-0.1,1.1-0.5,1.2-0.6c26-29,27.2-69.1,3.9-130.1      c-0.2-0.5-0.6-0.9-1.1-1.1c-22.5-8.1-42.2-19-58.6-32.3C566.7,193.9,565.7,193.9,565,194.6z"
            />
            <path
              fill="#fff"
              d="M333.7,140.6v176.1c0,11-8.9,20-20,20H125.3c-11,0-20-8.9-20-20V140.6H333.7z"
            />
            <path
              fill="#e1e5ff"
              d="M332.4,249.5c0.6-4.2,1-8.3,1.3-12.5v79.7c0,11-8.9,20-20,20H125.3c-5.2,0-10-2-13.5-5.3       c45.4-5.2,92,7.5,137.3,0.1c23.7-3.9,47.3-13.9,62.6-32C323.6,285.5,329.9,267.5,332.4,249.5z"
            />
            <path
              fill="#ffc25e"
              d="M333.7,140.6V124c0-11-8.9-20-20-20H125.3c-11,0-20,8.9-20,20v16.6H333.7z"
            />
            <path
              fill="#efa130"
              d="M333.7,124v16.6H105.4V134h211.3c5.8,0,10.5-4.7,10.5-10.5v-6.2c0-3.8-1.1-7.4-2.9-10.4       C329.9,110.5,333.7,116.8,333.7,124z"
            />
            <path
              fill="#112544"
              d="M313.7,337.7H125.3c-11.6,0-21-9.4-21-21V140.6c0-0.6,0.4-1,1-1h228.3c0.6,0,1,0.4,1,1v176.1       C334.7,328.3,325.3,337.7,313.7,337.7z M106.4,141.6v175.1c0,10.5,8.5,19,19,19h188.4c10.5,0,19-8.5,19-19V141.6H106.4z"
            />
            <path
              fill="#e1e5ff"
              d="M260.3,199.8c0,22.5-18.2,40.7-40.7,40.7c-22.5,0-40.7-18.2-40.7-40.7c0-22.5,18.2-40.7,40.7-40.7       C242,159.1,260.3,177.3,260.3,199.8z"
            />
            <path
              fill="#ccd2ff"
              d="M260.3,199.8c0,22.5-18.2,40.7-40.7,40.7c-11.2,0-21.4-4.5-28.8-11.9c6.1,3.7,13.3,5.8,20.9,5.8       c22.5,0,40.7-18.2,40.7-40.7c0-11.3-4.6-21.5-12-28.8C252.3,172,260.3,184.9,260.3,199.8z"
            />
            <path
              fill="#e1e5ff"
              d="M283.2,263.6v15.8c0,2.3-1.9,4.2-4.2,4.2H160.1c-2.3,0-4.2-1.9-4.2-4.2v-15.8c0-2.3,1.9-4.2,4.2-4.2h118.8       C281.3,259.4,283.2,261.3,283.2,263.6z"
            />
            <path
              fill="#ccd2ff"
              d="M283.2,263.6v15.8c0,2.4-1.9,4.2-4.2,4.2H160.1c-2.3,0-4.2-1.9-4.2-4.2c0.2,0,0.3,0,0.5,0h118.8       c2.3,0,4.2-1.9,4.2-4.2v-15.8C281.6,259.7,283.2,261.5,283.2,263.6z"
            />
            <path
              fill="#112544"
              d="M333.7,141.6H105.4c-0.6,0-1-0.4-1-1V124c0-11.6,9.4-21,21-21h188.4c11.6,0,21,9.4,21,21v16.6       C334.7,141.1,334.3,141.6,333.7,141.6z M106.4,139.6h226.3V124c0-10.5-8.5-19-19-19H125.3c-10.5,0-19,8.5-19,19V139.6z"
            />
            <circle cx="124.4" cy="124" r="4.8" fill="#fff" />
            <circle cx="142" cy="124" r="4.8" fill="#fff" />
            <circle cx="159.6" cy="124" r="4.8" fill="#fff" />
            <path
              fill="#e1e5ff"
              d="M129.2 124c0 2.7-2.2 4.8-4.8 4.8-2 0-3.7-1.2-4.4-2.9 3.9 1.7 8-2.4 6.3-6.4C128 120.3 129.2 122 129.2 124zM146.8 124c0 2.7-2.2 4.8-4.8 4.8-2 0-3.7-1.2-4.4-2.9 4.1 1.7 8-2.5 6.3-6.4C145.6 120.3 146.8 122 146.8 124zM164.4 124c0 2.7-2.2 4.8-4.8 4.8-2 0-3.7-1.2-4.4-2.9 3.9 1.7 8.1-2.4 6.3-6.4C163.2 120.3 164.4 122 164.4 124z"
            />
            <path
              fill="#112544"
              d="M124.4 129.9c-3.2 0-5.8-2.6-5.8-5.8s2.6-5.8 5.8-5.8c3.2 0 5.8 2.6 5.8 5.8S127.6 129.9 124.4 129.9zM124.4 120.2c-2.1 0-3.8 1.7-3.8 3.8s1.7 3.8 3.8 3.8c2.1 0 3.8-1.7 3.8-3.8S126.5 120.2 124.4 120.2zM142 129.9c-3.2 0-5.8-2.6-5.8-5.8s2.6-5.8 5.8-5.8c3.2 0 5.8 2.6 5.8 5.8S145.2 129.9 142 129.9zM142 120.2c-2.1 0-3.8 1.7-3.8 3.8s1.7 3.8 3.8 3.8c2.1 0 3.8-1.7 3.8-3.8S144.1 120.2 142 120.2zM159.6 129.9c-3.2 0-5.8-2.6-5.8-5.8s2.6-5.8 5.8-5.8c3.2 0 5.8 2.6 5.8 5.8S162.8 129.9 159.6 129.9zM159.6 120.2c-2.1 0-3.8 1.7-3.8 3.8s1.7 3.8 3.8 3.8c2.1 0 3.8-1.7 3.8-3.8S161.7 120.2 159.6 120.2z"
            />
            <path
              fill="#fc6054"
              d="M247.7,302.8v15.8c0,2.3-1.9,4.2-4.2,4.2h-47.9c-2.3,0-4.2-1.9-4.2-4.2v-15.8c0-2.3,1.9-4.2,4.2-4.2h47.9       C245.8,298.6,247.7,300.5,247.7,302.8z"
            />
            <path
              fill="#e64b38"
              d="M247.7,302.8v15.8c0,2.4-1.9,4.2-4.2,4.2h-47.9c-2.3,0-4.2-1.9-4.2-4.2v0c0,0,0,0,0,0h47.9       c2.3,0,4.2-1.9,4.2-4.2v-15.8C245.9,298.6,247.7,300.5,247.7,302.8z"
            />
            <path
              fill="#112544"
              d="M278.9,284.7H160.1c-2.9,0-5.2-2.4-5.2-5.2v-15.8c0-2.9,2.4-5.2,5.2-5.2h118.8c2.9,0,5.2,2.4,5.2,5.2v15.8       C284.2,282.3,281.8,284.7,278.9,284.7z M160.1,260.4c-1.8,0-3.2,1.5-3.2,3.2v15.8c0,1.8,1.5,3.2,3.2,3.2h118.8       c1.8,0,3.2-1.5,3.2-3.2v-15.8c0-1.8-1.5-3.2-3.2-3.2H160.1z"
            />
            <path
              fill="#fff"
              d="M175.6,271.5c0,2.3-1.9,4.2-4.2,4.2c-2.3,0-4.2-1.9-4.2-4.2c0-2.3,1.9-4.2,4.2-4.2         C173.7,267.3,175.6,269.2,175.6,271.5z"
            />
            <path
              fill="#112544"
              d="M171.4,276.7c-2.9,0-5.2-2.3-5.2-5.2c0-2.9,2.3-5.2,5.2-5.2c2.9,0,5.2,2.3,5.2,5.2         C176.6,274.4,174.3,276.7,171.4,276.7z M171.4,268.3c-1.8,0-3.2,1.4-3.2,3.2c0,1.8,1.4,3.2,3.2,3.2c1.8,0,3.2-1.4,3.2-3.2         C174.6,269.7,173.2,268.3,171.4,268.3z"
            />
            <path
              fill="#fff"
              d="M191.7,271.5c0,2.3-1.9,4.2-4.2,4.2c-2.3,0-4.2-1.9-4.2-4.2c0-2.3,1.9-4.2,4.2-4.2         C189.8,267.3,191.7,269.2,191.7,271.5z"
            />
            <path
              fill="#112544"
              d="M187.4,276.7c-2.9,0-5.2-2.3-5.2-5.2c0-2.9,2.3-5.2,5.2-5.2c2.9,0,5.2,2.3,5.2,5.2         C192.7,274.4,190.3,276.7,187.4,276.7z M187.4,268.3c-1.8,0-3.2,1.4-3.2,3.2c0,1.8,1.4,3.2,3.2,3.2c1.8,0,3.2-1.4,3.2-3.2         C190.7,269.7,189.2,268.3,187.4,268.3z"
            />
            <path
              fill="#fff"
              d="M207.7,271.5c0,2.3-1.9,4.2-4.2,4.2c-2.3,0-4.2-1.9-4.2-4.2c0-2.3,1.9-4.2,4.2-4.2         C205.8,267.3,207.7,269.2,207.7,271.5z"
            />
            <path
              fill="#112544"
              d="M203.5,276.7c-2.9,0-5.2-2.3-5.2-5.2c0-2.9,2.3-5.2,5.2-5.2c2.9,0,5.2,2.3,5.2,5.2         C208.7,274.4,206.4,276.7,203.5,276.7z M203.5,268.3c-1.8,0-3.2,1.4-3.2,3.2c0,1.8,1.4,3.2,3.2,3.2c1.8,0,3.2-1.4,3.2-3.2         C206.7,269.7,205.3,268.3,203.5,268.3z"
            />
            <path
              fill="#fff"
              d="M223.7,271.5c0,2.3-1.9,4.2-4.2,4.2c-2.3,0-4.2-1.9-4.2-4.2c0-2.3,1.9-4.2,4.2-4.2         C221.9,267.3,223.7,269.2,223.7,271.5z"
            />
            <path
              fill="#112544"
              d="M219.5,276.7c-2.9,0-5.2-2.3-5.2-5.2c0-2.9,2.3-5.2,5.2-5.2c2.9,0,5.2,2.3,5.2,5.2         C224.7,274.4,222.4,276.7,219.5,276.7z M219.5,268.3c-1.8,0-3.2,1.4-3.2,3.2c0,1.8,1.4,3.2,3.2,3.2c1.8,0,3.2-1.4,3.2-3.2         C222.7,269.7,221.3,268.3,219.5,268.3z"
            />
            <path
              fill="#fff"
              d="M239.8,271.5c0,2.3-1.9,4.2-4.2,4.2c-2.3,0-4.2-1.9-4.2-4.2c0-2.3,1.9-4.2,4.2-4.2         C237.9,267.3,239.8,269.2,239.8,271.5z"
            />
            <path
              fill="#112544"
              d="M235.6,276.7c-2.9,0-5.2-2.3-5.2-5.2c0-2.9,2.3-5.2,5.2-5.2c2.9,0,5.2,2.3,5.2,5.2         C240.8,274.4,238.5,276.7,235.6,276.7z M235.6,268.3c-1.8,0-3.2,1.4-3.2,3.2c0,1.8,1.4,3.2,3.2,3.2c1.8,0,3.2-1.4,3.2-3.2         C238.8,269.7,237.4,268.3,235.6,268.3z"
            />
            <path
              fill="#fff"
              d="M255.8,271.5c0,2.3-1.9,4.2-4.2,4.2c-2.3,0-4.2-1.9-4.2-4.2c0-2.3,1.9-4.2,4.2-4.2         C254,267.3,255.8,269.2,255.8,271.5z"
            />
            <path
              fill="#112544"
              d="M251.6,276.7c-2.9,0-5.2-2.3-5.2-5.2c0-2.9,2.3-5.2,5.2-5.2c2.9,0,5.2,2.3,5.2,5.2         C256.8,274.4,254.5,276.7,251.6,276.7z M251.6,268.3c-1.8,0-3.2,1.4-3.2,3.2c0,1.8,1.4,3.2,3.2,3.2c1.8,0,3.2-1.4,3.2-3.2         C254.8,269.7,253.4,268.3,251.6,268.3z"
            />
            <g>
              <path
                fill="#fff"
                d="M271.9,271.5c0,2.3-1.9,4.2-4.2,4.2c-2.3,0-4.2-1.9-4.2-4.2c0-2.3,1.9-4.2,4.2-4.2         C270,267.3,271.9,269.2,271.9,271.5z"
              />
              <path
                fill="#112544"
                d="M267.7,276.7c-2.9,0-5.2-2.3-5.2-5.2c0-2.9,2.3-5.2,5.2-5.2c2.9,0,5.2,2.3,5.2,5.2         C272.9,274.4,270.6,276.7,267.7,276.7z M267.7,268.3c-1.8,0-3.2,1.4-3.2,3.2c0,1.8,1.4,3.2,3.2,3.2c1.8,0,3.2-1.4,3.2-3.2         C270.9,269.7,269.4,268.3,267.7,268.3z"
              />
            </g>
            <g>
              <path
                fill="#112544"
                d="M243.5,323.9h-47.9c-2.9,0-5.2-2.4-5.2-5.2v-15.8c0-2.9,2.4-5.2,5.2-5.2h47.9c2.9,0,5.2,2.4,5.2,5.2v15.8       C248.7,321.5,246.4,323.9,243.5,323.9z M195.6,299.6c-1.8,0-3.2,1.5-3.2,3.2v15.8c0,1.8,1.5,3.2,3.2,3.2h47.9       c1.8,0,3.2-1.5,3.2-3.2v-15.8c0-1.8-1.5-3.2-3.2-3.2H195.6z"
              />
            </g>
            <g>
              <path
                fill="#8d95ff"
                d="M246.2,230.6c-18.6,16.2-47.3,12.2-60.8-8.6c6.2-1.8,13-2.5,20.6-2l0,0c0.2,0,0.4,0,0.5,0        c9.7,0.4,17.9,2.2,24.7,4.5c0,0,0,0,0,0C237.1,225.9,242,228,246.2,230.6z"
              />
              <path
                fill="#ff987a"
                d="M231 191.1c-.1-.1 0-.3.1-.4l.1-.1c.1-.1.3 0 .4.1l0 0c.1.1.1.2.1.2C231.6 191.2 231.1 191.4 231 191.1zM231.4 190.9l.1.3L231.4 190.9zM225.8 192.2C225.8 192.2 225.8 192.2 225.8 192.2L225.8 192.2 225.8 192.2c-.3 0-.5 0-.8 0-.2 0-.3-.2-.2-.4.1-.1.2-.2.3-.2.3 0 .5 0 .8 0C226.2 191.7 226.2 192.2 225.8 192.2z"
              />
              <path
                fill="#ff987a"
                d="M226.3,192.3c-0.3,0-0.4,0-0.5,0h0c-0.2,0-0.3-0.1-0.3-0.3c0-0.2,0.1-0.3,0.3-0.3h0l0,0l0,0        c0.4,0,0.9,0,1.3,0c0.4,0,0.4,0.6,0,0.6C226.8,192.2,226.6,192.3,226.3,192.3z"
              />
              <path
                fill="#ff987a"
                d="M227.3,192.2c-0.4,0-0.4-0.6,0-0.6c0.2,0,0.4,0,0.7-0.1c0.2,0,0.3,0.1,0.3,0.3c0,0.2-0.1,0.3-0.3,0.3        C227.7,192.2,227.5,192.2,227.3,192.2C227.3,192.2,227.3,192.2,227.3,192.2z"
              />
              <path
                fill="#fcbba4"
                d="M207,223.1c1.2,1.6,2.9,3.6,5,5.3c6.1,4.8,15.1,1.9,17.1-5.6l2.4-8.7c0,0,7.3,1.4,9.4-5.6        c0.6-2,0.3-5.4-0.5-9.2c-0.3-1.4-0.6-3-1-4.5c-0.9-3.5-2-7.1-3.1-10.3c-2,1.1-5,1.7-9.4,1.2c0,0-2.4,5.7-10.4,2.4        c0,0,4.5,8.2-3,11.1c-1.3,0.5-2.9,0.3-4.4-0.5c0.5,2.3,1.4,3.2,3.1,4.9l-5.8,14.6C205.7,219.8,205.9,221.7,207,223.1z"
              />
              <path
                fill="#112544"
                d="M211.4 229.3c-1.8-1.5-3.6-3.3-5.2-5.5-.8-1.1-1.2-2.4-1.2-3.7 0-.6.5-1 1-1 .6 0 1 .5 1 1 0 .9.3 1.8.8 2.5 1 1.4 2.7 3.5 4.9 5.2 5.3 4.2 13 1.9 15.3-4.2.2-.5.8-.8 1.3-.6.5.2.8.8.6 1.3C227.1 231.5 217.8 234.3 211.4 229.3zM238.9 171.9c1.9 4.1 3.5 15.6-12 13.7 0 0-2.4 5.7-10.4 2.4 0 0 4.5 8.2-3 11.1s-21.2-17.9-6.5-21c0 0-1.2-4.7 4.1-3.3 0 0 1.3-10 11.4-4.7C222.5 170.2 233.5 160.1 238.9 171.9z"
              />
              <path
                fill="#112544"
                d="M238.2 190.2c-.6-2-1.2-3.9-1.8-5.7 2.7-1.5 3.7-4.2 3.7-6.8C241.8 180.2 244.9 186.3 238.2 190.2zM227.7 195.4c.2.8.9 1.2 1.4 1.1.6-.2.8-.9.6-1.7-.2-.7-.9-1.2-1.4-1.1C227.7 193.9 227.5 194.6 227.7 195.4zM236.6 193.4c.2.8.9 1.2 1.4 1.1.6-.2.8-.9.6-1.7-.2-.7-.9-1.2-1.4-1.1C236.6 191.9 236.4 192.6 236.6 193.4zM224.9 191.5c-.5.3-.4.7.3.8 1.6.2 3.4-.2 4.6-1.3.4-.4.2-.8-.3-.9-.4-.1-1 .1-1.4.1C227 190.5 225.9 190.9 224.9 191.5z"
              />
              <path
                fill="#112544"
                d="M233.9,189c-0.5,0.3-0.4,0.7,0.3,0.8c1.6,0.2,3.4-0.2,4.6-1.3c0.4-0.4,0.2-0.8-0.3-0.9        c-0.4-0.1-1,0.1-1.4,0.1C236,187.9,234.9,188.4,233.9,189z"
              />
              <path
                fill="#e2805d"
                d="M233 206.8c-.5-.3-.6-.9-.2-1.4.3-.5.9-.6 1.4-.2 2 1.4 3 .2 3.1 0 .3-.4 1-.5 1.4-.2.4.3.5 1 .2 1.4C237.7 207.9 235.4 208.4 233 206.8zM231.5 214.1c0 0-5.7-.8-10.9-5-.4-.3-.9.1-.7.5 1.2 2.6 4.2 7.5 10.3 8.9L231.5 214.1z"
              />
              <path
                fill="#fcbba4"
                d="M206.3,199.4c1,3.3,3.9,5.5,6.6,4.9c2.7-0.6,4-3.7,3-7c-1-3.3-3.9-5.5-6.6-4.9        C206.7,192.9,205.3,196.1,206.3,199.4z"
              />
              <path
                fill="#e2805d"
                d="M210.8 199.9l-.7-1.2c-.3-.5-.1-1.1.3-1.4.5-.3 1.1-.1 1.4.3l.7 1.2c.3.5.1 1.1-.3 1.4C211.7 200.5 211.1 200.3 210.8 199.9zM233.5 200.1c-.1-.5.3-1 .9-1.1.4 0 .8-.1 1.2-.2-.1-.8-1.4-2.7-2.9-4.4-.4-.4-.3-1 .1-1.4.4-.4 1-.3 1.4.1 1.2 1.3 4 4.6 3.4 6.5-.1.4-.5 1-1.4 1.2-.5.1-1 .2-1.5.2C234.1 201 233.6 200.7 233.5 200.1z"
              />
            </g>
            <g>
              <path
                fill="#112544"
                d="M219.5,241.5c-23,0-41.7-18.7-41.7-41.7c0-23,18.7-41.7,41.7-41.7c23,0,41.7,18.7,41.7,41.7       C261.3,222.8,242.5,241.5,219.5,241.5z M219.5,160.1c-21.9,0-39.7,17.8-39.7,39.7c0,21.9,17.8,39.7,39.7,39.7       c21.9,0,39.7-17.8,39.7-39.7C259.3,177.9,241.4,160.1,219.5,160.1z"
              />
            </g>
            <g>
              <path
                fill="#112544"
                d="M424.2,377.8c-13.4-8.7-28.5-18.5-44.5-12.5c-8,3-15.4,4.2-22.1,3.5c-0.5-0.1-1-0.5-0.9-1.1      c0.1-0.5,0.5-0.9,1.1-0.9c6.3,0.6,13.4-0.5,21.2-3.4c17-6.4,32.6,3.7,46.3,12.7c10.6,6.9,19.7,12.8,26.9,9.4      c8-3.8,18.1-41.5,27.6-103.3c0.1-0.5,0.6-0.9,1.1-0.8c0.5,0.1,0.9,0.6,0.8,1.1c-6.9,44.9-17.5,99.4-28.7,104.8      C444.2,391.5,433.2,383.6,424.2,377.8z"
              />
            </g>
            <g>
              <path
                fill="#66d3d8"
                d="M375.5,258.3c4.6,39.1-23.5,56.5-23.5,56.5c7.1,14.2,6.4,43.9,5,64c-0.9,11.8-2,20.2-2,20.2      c-13.3-5.6-24.2-3.9-33.3,3.8c-10.8-31.3-13.9-59.6-13.3-81c0.4-13.9,2.5-24.8,5.1-31.8c12.2-32.3,41.8-68.6,94-62.8      L375.5,258.3z"
              />
            </g>
            <g>
              <path
                fill="#47b6c3"
                d="M357,378.9c-0.9,11.8-2,20.2-2,20.2c-13.3-5.6-24.2-3.9-33.3,3.8c-10.8-31.3-13.9-59.6-13.3-81      c0.7-0.1,1.4-0.1,2.1,0.1c3.3,0.9,4.5,4.7,5.2,8c2.7,13.6,3.8,27.4,3.3,41.2c-0.1,3.3-0.3,6.8,0.9,9.9c1.2,3.1,4.2,5.8,7.5,5.5      c5.3-0.6,7.2-7.6,11.7-10.4c3.1-1.9,7.1-1.6,10.6-0.4C352.2,376.6,354.5,377.8,357,378.9z"
              />
            </g>
            <g>
              <path
                fill="#112544"
                d="M321.7,403.9c-0.3,0-0.6-0.1-0.8-0.4c-0.4-0.4-0.3-1.1,0.1-1.4c9.4-8,20.5-9.4,33.2-4.5      c1.1-9,7-62.2-3.1-82.4c-0.2-0.5-0.1-1,0.4-1.3c0.3-0.2,27.5-17.6,23-55.5c-0.1-0.5,0.3-1,0.9-1.1c0.6-0.1,1,0.3,1.1,0.9      c4.2,35.6-18.7,53.8-23.2,57c10.7,23.1,3,81.5,2.7,84.1c0,0.3-0.2,0.6-0.5,0.7c-0.3,0.2-0.6,0.2-0.9,0.1      c-12.5-5.3-23.1-4.1-32.3,3.6C322.1,403.8,321.9,403.9,321.7,403.9z"
              />
            </g>
            <g>
              <path
                fill="#e1e5ff"
                d="M622.8,269.6c4.7,20.2-8,36.6-28.2,36.6c-11.5,0-23-5.3-31.6-13.6c7.9,5.9,17.3,9.5,26.8,9.5       c20.2,0,32.8-16.4,28.2-36.6c-2-8.7-6.9-16.7-13.4-23C613.5,249.2,620.3,258.8,622.8,269.6z"
              />
              <path
                fill="#112544"
                d="M594.6,307.2c-20.6,0-41.2-16.8-46-37.4c-4.8-21,8.4-37.8,29.2-37.8c20.6,0,41.3,16.8,46,37.4l0,0       C628.6,290.4,615.4,307.2,594.6,307.2z M577.8,234c-19.5,0-31.7,15.7-27.2,35.4c4.5,19.8,24.3,35.8,44,35.8       c19.5,0,31.8-15.6,27.2-35.4C617.3,250,597.5,234,577.8,234z"
              />
              <path
                fill="#66d3d8"
                d="M610.9,269.6c3.1,13.6-5.4,24.7-19,24.7s-27.2-11-30.3-24.7c-3.1-13.6,5.4-24.7,19-24.7       C594.2,244.9,607.7,255.9,610.9,269.6z"
              />
              <path
                fill="#47b6c3"
                d="M610.9,269.6c3.1,13.6-5.4,24.7-19,24.7c-9.2,0-18.4-5-24.3-12.5c23.6,23.4,55.9-0.5,34.7-27.3       C606.4,258.6,609.6,263.9,610.9,269.6z"
              />
              <path
                fill="#fff"
                d="M581,275.3l-5.2-6.3c-1.2-1.4-1.1-3.2,0.1-4c1.2-0.8,3.1-0.4,4.3,1l3,3.6l7.8-6.5c1.1-0.9,3-0.6,4.2,0.7        c1.2,1.3,1.3,3.1,0.2,4.1l-9.9,8.4C584.2,277.2,582.1,276.6,581,275.3z"
              />
            </g>
            <g>
              <path
                fill="#ccd2ff"
                d="M538.9 158.9l-21.5-27.6c-.3-.4-.3-1.1.2-1.4.4-.3 1.1-.3 1.4.2l21.5 27.6c.3.4.3 1.1-.2 1.4C539.9 159.4 539.3 159.3 538.9 158.9zM552.1 175.8l-5.3-6.8c-.3-.4-.3-1.1.2-1.4.4-.3 1.1-.3 1.4.2l5.3 6.8c.3.4.3 1.1-.2 1.4C553.1 176.3 552.4 176.2 552.1 175.8zM501.3 184l-3.1-.7c-.5-.1-.9-.7-.8-1.2.1-.5.7-.9 1.2-.7l3.1.7c.5.1.9.7.8 1.2C502.4 183.8 501.8 184.2 501.3 184zM541.7 193.4L510 186c-.5-.1-.9-.7-.7-1.2.1-.5.7-.9 1.2-.7l31.7 7.3c.5.1.9.7.7 1.2C542.8 193.2 542.2 193.5 541.7 193.4zM573 135.6c-.5-.1-.9-.6-.9-1.1l.6-4.5c.1-.5.6-.9 1.1-.9.5.1.9.6.9 1.1l-.6 4.5C574.1 135.3 573.6 135.7 573 135.6zM568.2 173c-.5-.1-.9-.6-.9-1.1l3.1-24.2c.1-.5.6-.9 1.1-.9.5.1.9.6.9 1.1l-3.1 24.2C569.2 172.7 568.7 173.1 568.2 173z"
              />
            </g>
            <g>
              <path
                fill="#e1e5ff"
                d="M203.4,464.3c0,9.5,5.1,17.3,4,27c-1,9-7.9,18.6-16.8,23.4c-10.9,5.8-22.9,3.5-29.8-2.8       c-0.4-0.4-0.9-0.8-1.3-1.2c17.2,7.3,38.8-7.4,42.7-23.9c2.2-9.3-2-16.9-0.9-26.1c1.2-10.5,9.3-21.6,15.5-29.9       C215.1,433.6,203.4,452.7,203.4,464.3z"
              />
              <path
                fill="#ccd2ff"
                d="M160.1,512.6c-4-3.7-9-7-9.8-13.2c-0.9-6.3,2.4-13.8,8-18.8l0.7,0.8l-0.7-0.8c6.6-5.7,15.9-8.1,19.8-15.1       c3-5.3,1.6-10.3,0.5-26.1c-1.8-22.1-0.5-45.6,20.7-57.7c13.7-7.8,27.3-3.2,31.1,7.6c4.8,13.5-5.6,30.3-12.6,41.6       c-6,9.7-13.5,21.8-13.5,33.2c0,9.3,5.1,17.2,4,27.1c-1.1,9.3-8.2,19.3-17.3,24.1C180.2,521.4,167.6,519.4,160.1,512.6z        M200.3,383.6c-20.3,11.6-21.5,34.2-19.7,55.8c1.3,16.2,2.5,21.6-0.7,27.2c-4.2,7.6-13.9,10.1-20.2,15.6       c-5.1,4.4-8.1,11.4-7.4,17c0.7,5.3,5.4,8.5,9.2,12c6,5.5,17.5,8.6,28.6,2.6c8.6-4.6,15.2-13.9,16.2-22.6c1.1-9.4-4-17.3-4-26.9       c0-11.9,7.6-24.2,13.8-34.2c6.5-10.6,16.9-27.1,12.4-39.9C224.7,379,211.3,377.3,200.3,383.6z"
              />
              <path
                fill="#ccd2ff"
                d="M167.2,558.7c-0.4,0-0.7-0.2-0.9-0.5c-0.2-0.3-17.3-32.4,12-76.8c26.2-39.6,23.9-72.9,23.9-73.2       c0-0.6,0.4-1,0.9-1.1c0.6,0,1,0.4,1.1,0.9c0,0.3,2.4,34.3-24.2,74.5c-28.7,43.4-12.1,74.4-11.9,74.7       C168.4,557.9,168,558.7,167.2,558.7z"
              />
              <path
                fill="#ccd2ff"
                d="M165.4,497.7c-3.9-1.8-9.8-0.2-12.2-4c-1.3-2.2-1.1-5.5-0.7-8.7c1.6-15,2.9-24.3,1.3-32.3       c-5.7-27.9-40.5-5.2-28.7,20.1c2.2,4.7,5.5,8.5,8.2,12.8c2.7,4.3,4.9,9.4,4.7,15.4c-0.3,6.9-3.7,14.5-3.3,21.2       c0.4,6.2,4.5,10.8,9.9,11.1c6.7,0.4,14.3-5.7,18.8-12.8c2.5-3.9,5.7-8.1,6.3-12.6C170.4,503.4,168.7,499.2,165.4,497.7z"
              />
              <path
                fill="#ccd2ff"
                d="M144.6,533.9c-5.7-0.3-9.9-5.1-10.4-11.6c-0.4-6.8,3-14.4,3.3-21.3c0.2-5-1.3-9.8-4.6-15.1       c-2.7-4.3-5.9-8.1-8.2-12.9c-1.9-4-3.6-10.2-1.6-17.3c5.1-17.6,26.8-24.1,31.2-3.1c1.7,8.1,0.3,17.4-1.3,32.4       c-0.3,2.6-0.6,6.2,0.7,8.3c1.3,2.2,4,2.5,6.7,2.8c1.8,0.2,3.6,0.4,5.2,1.1l0,0c3.5,1.6,5.4,6,4.6,10.9       c-0.7,4.7-3.9,8.9-6.4,12.8C159.8,527.3,152,534.3,144.6,533.9z M131.6,444.5c-3.4,2.9-6.2,7.2-7.5,11.5       c-2,6.8-0.3,12.8,1.5,16.6c2.2,4.7,5.4,8.5,8.1,12.8c3.4,5.5,4.9,10.5,4.7,15.7c-0.3,6.8-3.7,14.7-3.3,21.2       c0.4,6,4.3,10.4,9.4,10.6c6.9,0.4,14.4-6.2,18.4-12.5c2.5-3.9,5.6-8,6.3-12.4c0.6-4.4-1-8.4-4.1-9.8l0,0       c-1.4-0.7-3.2-0.8-4.9-1c-2.9-0.3-5.9-0.6-7.5-3.2c-1.4-2.3-1.2-5.4-0.8-9c1.5-14.6,3-24.1,1.3-32.1       C150.7,440.2,140.6,436.9,131.6,444.5z"
              />
              <path
                fill="#ccd2ff"
                d="M161 532.2c-.4-10.2-3.4-19-9.1-26.3-15.7-20.1-13.3-46-13.2-46.2.1-.5.6-.9 1.1-.9.5.1.9.5.9 1.1 0 .3-2.4 25.4 12.8 44.8 5.9 7.6 9.1 16.8 9.5 27.5 0 .6-.4 1-1 1C161.5 533.2 161 532.8 161 532.2zM180.2 558.7h-23.3c-.6 0-1-.4-1-1s.4-1 1-1h23.3c.6 0 1 .4 1 1S180.7 558.7 180.2 558.7z"
              />
            </g>
            <g>
              <path
                fill="#ccd2ff"
                d="M398.2,124.8h-8.5c-0.6,0-1-0.4-1-1s0.4-1,1-1h7.2c-3.2-13.5,2.5-21.4,14-15.2c-1-21.3,22.8-15.2,38.3,2.9     c0.8-3.8,4.1-3.5,7.7-2h8.2c0.6,0,1,0.4,1,1s-0.4,1-1,1h-8.4c-1.7,0-5.9-3.7-5.6,2.6c0,1-1.2,1.4-1.8,0.7     c-14.1-17.8-38.7-26.8-36.2-4.4c0.1,0.8-0.8,1.4-1.5,1c-11.5-7.3-15.9,0.2-12.4,13.3C399.3,124.2,398.8,124.8,398.2,124.8z"
              />
            </g>
          </svg>
        </div>
        <div className="w-[100%] sm:w-[50%] lg:w-[40%] bg-white pt-10 sm:pt-0">
          <section className="bg-gray-50">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <a
                href="#"
                className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
              >
                Welcome To City Library
              </a>
              <div className="w-full bg-white rounded-md shadow border md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                    Sign in to your account
                  </h1>
                  <form className="space-y-4 md:space-y-6" onSubmit={(e)=>{
                    e.preventDefault();
                    login();
                  }}>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Your email
                      </label>
                      <input
                        type="text"
                        name="email"
                        onChange={(e)=>{
                          userIn.email = e.target.value
                          userIn.userName = e.target.value
                        }}
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="name@gmail.com"
                        required={true}
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
                        onChange={(e)=>{
                          userIn.password = e.target.value
                        }}
                        id="password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        required={true}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      Sign in
                    </button>
                    <div className="flex items-center justify-end">
                      <NavLink
                        to="/adminlogin"
                        className="text-sm font-medium text-primary-600 hover:underline"
                      >
                        Admin?
                      </NavLink>
                    </div>
                    <p className="text-sm font-light text-gray-500">
                      Don’t have an account yet?{" "}
                      <NavLink
                        to="/signup"
                        className="font-medium text-primary-600 hover:underline"
                      >
                        Sign up
                      </NavLink>
                    </p>
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
export default Login;
