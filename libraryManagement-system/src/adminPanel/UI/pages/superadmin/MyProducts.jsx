import { useEffect, useState } from "react";
import SingleProduct from "../superadmin/SingleProduct";
import Header from "../../commonComponents/Header";

const MyProduct = () => {
  const [shall, sshall] = useState(false);
  const [filter, sfilter] = useState(false);
  const [catagory, scatagory] = useState("all");

  const [Products, setProducts] = useState([])

  const getProducts = async () => {
    const response = await fetch("http://localhost:5000/getProducts");
    const products = await response.json();
    console.log(products);
    setProducts(products);
  }

  useEffect(() => {
    getProducts();
    const intervalId = setInterval(getProducts, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
    <div className="myproducts sm:flex  justify-between bg-slate-400 h-auto w-full">
    <div className="header xl:w-[15%] lg:w-[20%] md:w-[22%] sm:w-[28%] w-full"><Header /></div>
      <section className="antialiased  md:pb-20  pb-10 sm:w-[85%] mx-auto w-full">
        <h1 className="text-center text-4xl font-bold sm:mt-10 mt-5">My Products {Products.length}</h1>
        <div className="  justify-between space-t-4 sm:flex sm:space-y-0 items-center pb-2 sm:pb-5 px-2 sm:px-4">

          <div className="flex items-center space-x-2 w-20">
            <div
              id="dropdownSort1"
              className={`z-50 mt-32 ${
                filter ? null : "hidden"
              }  absolute  divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700`}
              data-popper-placement="bottom"
            >
              <ul
                className="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400"
                aria-labelledby="sortDropdownButton"
              >
                <li>
                  <button
                    onClick={() => {
                      sfilter(!filter), scatagory("all");
                    }}
                    className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    All
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      sfilter(!filter), scatagory("science fiction");
                    }}
                    className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    science fiction
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      sfilter(!filter), scatagory("thriller");
                    }}
                    className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    thriller
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      sfilter(!filter), scatagory("adventures");
                    }}
                    className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    adventures
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      sfilter(!filter), scatagory("fantasy");
                    }}
                    className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    fantasy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      sfilter(!filter), scatagory("mystery");
                    }}
                    className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    mystery
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      sfilter(!filter), scatagory("horror");
                    }}
                    className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    horror
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      sfilter(!filter), scatagory("romance");
                    }}
                    className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    romance
                  </button>
                </li>
              </ul>
            </div>

            <button
              onClick={() => sfilter(!filter)}
              data-modal-toggle="filterModal"
              data-modal-target="filterModal"
              type="button"
              className="flex w-full items-center justify-center rounded-lg border border-gray-200 hover:text-gray-900 bg-[#1c213e] px-3 py-2 text-sm font-medium text-white hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
            >
              <svg
                className="-ms-0.5 me-2 h-4 w-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z"
                />
              </svg>
              {catagory}
              <svg
                className="-me-0.5 ms-2 h-4 w-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 9-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mb-4 grid gap-4 sm:grid-cols-1 md:mb-8 lg:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 ">
            {Products.map((obj, index) =>
              (catagory === obj.catagory) | (catagory == "all") ? (
                <SingleProduct
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
            {shall
              ? Products.map((obj, index) =>
                  (catagory === obj.catagory) | (catagory == "all") ? (
                    <SingleProduct
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
                )
              : null}
          </div>
          <div className="w-full text-center">
            <button
              type="button"
              className={`${Products.length > 8? 'inline':'hidden'} rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700`}
              onClick={() => sshall(!shall)}
            >
              {Products.length > 8 ?`Show ${shall ? "less" : "more"}`:""}
            </button>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};
export default MyProduct;
