import { useState } from "react";
import { NavLink } from "react-router-dom";
import ShowBook from "../miniComponents/populorSales/ShowBook";
import { productData } from "../miniComponents/allProducts/allproductdata";
import Profile from "../miniComponents/loginSignup/userContext/Profile";

const Header = () => {
  const [hideBar, sHideBar] = useState(false); // For Hamburger Menu
  const [name, sname] = useState("all");

  const Find = () => {
    let search = "";
    console.log(search);

    return (
      <>
        <div className="backdrop-blur-md bg-black/40 absolute z-50 w-[100%] lg:h-screen">
          <div>
            <button
              onClick={() => sHideBar(!hideBar)}
              className=" text-white rounded-lg focus:ring-2 focus:ring-blue-400  hover:bg-blue-200 inline-flex items-center justify-center h-10 m-2 w-10 dark:bg-gray-800  dark:hover:bg-gray-700"
              aria-label="Close"
            >
              <span className="sr-only">Dismiss</span>
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
            <form className="max-w-md mx-auto pb-2 px-3 sm:px-0 ">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  onChange={(obj) => (search = obj.target.value)}
                  id="default-search"
                  className="block w-full p-2 sm:p-4 ps-10 sm:ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Mockups, Logos..."
                />
                <input
                  value="Search"
                  type="button"
                  placeholder="Search"
                  onClick={() => sname(search)}
                  className="text-white absolute end-1.5 bottom-1.5 sm:end-2.5 sm:bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 sm:px-4 py-1 sm:py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                />
              </div>
            </form>
          </div>
          <div className="flex flex-col   ">
            <div className="pt-3 w-full flex gap-6 flex-wrap justify-center items-center">
              {productData.map((obj, index) =>
                (obj.name == name) | (name == "all") ? (
                  <ShowBook
                    key={index}
                    name={obj.name}
                    image={obj.image}
                    oPrice={obj.oPrice}
                    author={obj.author}
                    year={obj.year}
                    discount={obj.discount}
                    rating={obj.rating}
                    price={obj.price}
                    catagory={obj.catagory}
                    desc={obj.desc}
                  />
                ) : null
              )}
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="flex z-50 w-full absolute justify-between  sm:px-4 sm:py-3 py-1 px-2 items-center  ">
        <div className="flex items-center gap-2">
          <svg
            //-------------------------------------- BOOK LOGO-----------------------------
            id="Layer_1"
            className="h-[54px] w-[54px] max-[426px]:h-[45px] max-[426px]:w-[35px]"
            data-name="Layer 1"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 122.88 96.44"
          >
            <title>open-book</title>
            <path d="M12,73.51q.2-34.74.39-69.38A3.21,3.21,0,0,1,15,1h0C23.4-.75,36.64-.31,45.63,3.14a35.46,35.46,0,0,1,16,11.65,37.34,37.34,0,0,1,16-11.15C86.12.4,99-.38,108.23,1A3.2,3.2,0,0,1,111,4.14h0V73.8A3.21,3.21,0,0,1,107.77,77a3.49,3.49,0,0,1-.74-.09A53.45,53.45,0,0,0,83.58,79.1a71,71,0,0,0-15.77,8.26,69.09,69.09,0,0,1,21.24-3.1,125.42,125.42,0,0,1,27.41,3.48V14.84h3.21a3.21,3.21,0,0,1,3.21,3.21V91.94a3.21,3.21,0,0,1-3.21,3.21,3.18,3.18,0,0,1-1-.17A121.77,121.77,0,0,0,89,90.65a61.89,61.89,0,0,0-25.76,5.26,3.39,3.39,0,0,1-3.64,0,61.86,61.86,0,0,0-25.76-5.26A121.77,121.77,0,0,0,4.24,95a3.18,3.18,0,0,1-1,.17A3.21,3.21,0,0,1,0,91.94V18.05a3.21,3.21,0,0,1,3.21-3.21H6.42v72.9a125.42,125.42,0,0,1,27.41-3.48,68.84,68.84,0,0,1,22.71,3.57A48.7,48.7,0,0,0,41,79.39c-7-2.3-17.68-3.07-25.49-2.4A3.21,3.21,0,0,1,12,74.06a5,5,0,0,1,0-.55ZM73.64,64.4a2.3,2.3,0,1,1-2.5-3.85,51.46,51.46,0,0,1,11.8-5.4,53.73,53.73,0,0,1,13-2.67,2.29,2.29,0,1,1,.25,4.58,49.42,49.42,0,0,0-11.79,2.46A46.73,46.73,0,0,0,73.64,64.4Zm.2-17.76a2.29,2.29,0,0,1-2.46-3.87,52.71,52.71,0,0,1,11.74-5.3A54.12,54.12,0,0,1,95.9,34.85a2.3,2.3,0,0,1,.25,4.59,49.3,49.3,0,0,0-11.63,2.4,48,48,0,0,0-10.68,4.8Zm.06-17.7a2.3,2.3,0,1,1-2.46-3.89,52.54,52.54,0,0,1,11.72-5.27,53.71,53.71,0,0,1,12.74-2.6,2.29,2.29,0,1,1,.25,4.58,49.35,49.35,0,0,0-11.59,2.39A47.91,47.91,0,0,0,73.9,28.94ZM51.74,60.55a2.3,2.3,0,1,1-2.5,3.85,46.73,46.73,0,0,0-10.72-4.88,49.42,49.42,0,0,0-11.79-2.46A2.29,2.29,0,1,1,27,52.48a53.73,53.73,0,0,1,13,2.67,51.46,51.46,0,0,1,11.8,5.4ZM51.5,42.77A2.29,2.29,0,0,1,49,46.64a48,48,0,0,0-10.68-4.8,49.3,49.3,0,0,0-11.63-2.4A2.3,2.3,0,0,1,27,34.85a54.12,54.12,0,0,1,12.78,2.62,52.71,52.71,0,0,1,11.74,5.3Zm-.06-17.72A2.3,2.3,0,1,1,49,28.94a47.91,47.91,0,0,0-10.66-4.79,49.35,49.35,0,0,0-11.59-2.39A2.29,2.29,0,1,1,27,17.18a53.71,53.71,0,0,1,12.74,2.6,52.54,52.54,0,0,1,11.72,5.27ZM104.56,7c-7.42-.7-18.06.12-24.73,2.65A30,30,0,0,0,64.7,21.46V81.72a76.76,76.76,0,0,1,16.72-8.66,62.85,62.85,0,0,1,23.14-2.87V7ZM58.28,81.1V21.37c-3.36-5.93-8.79-9.89-14.93-12.24-7-2.67-17.75-3.27-24.56-2.3l-.36,63.56c7.43-.27,17.69.68,24.52,2.91a54.94,54.94,0,0,1,15.33,7.8Z" />
          </svg>

          <h1 //-------------------------------------- LIBRARY NAME-----------------------------
            className="font-extrabold text-[1.4rem] max-[426px]:text-[1rem] max-[345px]:text-[0.8rem] text-slate-300"
          >
            CITY LIBRARY
          </h1>
        </div>

        <div className="flex gap-2">
          <div className="flex justify-center items-center gap-5">
            <NavLink className="" to="/">
              <svg
                className="fill-white h-[26px] max-[480px]:h-[20px] "
                viewBox="0 0 24 24"
              >
                <path d="M 12 2 A 1 1 0 0 0 11.289062 2.296875 L 1.203125 11.097656 A 0.5 0.5 0 0 0 1 11.5 A 0.5 0.5 0 0 0 1.5 12 L 4 12 L 4 20 C 4 20.552 4.448 21 5 21 L 9 21 C 9.552 21 10 20.552 10 20 L 10 14 L 14 14 L 14 20 C 14 20.552 14.448 21 15 21 L 19 21 C 19.552 21 20 20.552 20 20 L 20 12 L 22.5 12 A 0.5 0.5 0 0 0 23 11.5 A 0.5 0.5 0 0 0 22.796875 11.097656 L 12.716797 2.3027344 A 1 1 0 0 0 12.710938 2.296875 A 1 1 0 0 0 12 2 z"></path>
              </svg>
            </NavLink>
            <button
              className="font-bold flex justify-center items-center font-serif font-bold-400 text-slate-300 hover:text-white cursor-pointer "
              onClick={() => sHideBar(!hideBar)}
            >
              <svg
                className="h-[26px] max-[480px]:h-[20px]  fill-white"
                viewBox="0 0 400 400"
                id="cart"
              >
                <g>
                  <path
                    d="M342.598,42.402C315.254,15.058,278.899-0.001,240.229,0c-0.002,0,0,0-0.002,0c-38.666,0-75.025,15.06-102.368,42.402
		c-27.343,27.344-42.402,63.7-42.402,102.37c0,26.388,7.018,51.696,20.161,73.801L10.252,323.938C3.642,330.55,0,339.34,0,348.69
		c0,9.35,3.641,18.14,10.252,24.75l1.307,1.307C18.17,381.359,26.96,385,36.311,385s18.14-3.641,24.751-10.252l105.365-105.366
		c22.104,13.144,47.413,20.161,73.801,20.161c38.67,0,75.026-15.059,102.37-42.402C369.942,219.798,385,183.442,385,144.772
		C385,106.102,369.943,69.747,342.598,42.402z M43.384,357.07c-1.89,1.89-4.402,2.93-7.074,2.93c-2.671,0-5.183-1.041-7.073-2.93
		l-1.308-1.309c-1.889-1.889-2.93-4.4-2.93-7.071c0-2.673,1.041-5.185,2.93-7.074l102.489-102.488
		c2.369,2.748,4.849,5.421,7.44,8.013c2.591,2.592,5.265,5.072,8.013,7.44L43.384,357.07z M324.92,229.463
		c-22.622,22.622-52.7,35.08-84.691,35.08c-31.992,0-62.069-12.458-84.69-35.08c-22.622-22.622-35.081-52.699-35.08-84.69
		c0-31.993,12.458-62.07,35.08-84.692s52.698-35.081,84.69-35.08c31.993,0,62.07,12.458,84.692,35.08s35.081,52.7,35.08,84.692
		C360,176.764,347.542,206.841,324.92,229.463z"
                  />
                </g>
              </svg>
            </button>

            <NavLink
              to="/cart"
              className=""
              // cart
            >
              <svg
                className="h-[26px] max-[480px]:h-[20px]  "
                viewBox="0 0 512 512"
                id="cart"
              >
                <path
                  fill="white"
                  d="M169.6 377.6c-22.882 0-41.6 18.718-41.6 41.601 0 22.882 18.718 41.6 41.6 41.6s41.601-18.718 41.601-41.6c-.001-22.884-18.72-41.601-41.601-41.601zM48 51.2v41.6h41.6l74.883 151.682-31.308 50.954c-3.118 5.2-5.2 12.482-5.2 19.765 0 27.85 19.025 41.6 44.825 41.6H416v-40H177.893c-3.118 0-5.2-2.082-5.2-5.2 0-1.036 2.207-5.2 2.207-5.2l20.782-32.8h154.954c15.601 0 29.128-8.317 36.4-21.836l74.882-128.8c1.237-2.461 2.082-6.246 2.082-10.399 0-11.446-9.364-19.765-20.8-19.765H135.364L115.6 51.2H48zm326.399 326.4c-22.882 0-41.6 18.718-41.6 41.601 0 22.882 18.718 41.6 41.6 41.6S416 442.082 416 419.2c0-22.883-18.719-41.6-41.601-41.6z"
                ></path>
              </svg>
            </NavLink>
            <Profile />
          </div>
        </div>
      </div>
      {hideBar ? <Find /> : null}
    </>
  );
};
export default Header;
