import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import Home from "./components/Home";
import SingleBook from "./components/miniComponents/SingleBook";
import Login from "./components/miniComponents/loginSignup/Login";
import Signup from "./components/miniComponents/loginSignup/Signup";
import Cart from "./components/miniComponents/Cart/Cart";

// Admin Pages
import AdminLogin from "./components/miniComponents/loginSignup/AdminLogin";
import AddSAdmin from "./adminPanel/UI/pages/superadmin/AddSAdmin";
import Dasboard from "./adminPanel/UI/pages/Dashboard";
import Orders from "./adminPanel/UI/pages/orders/Orders";
import Inbox from "./adminPanel/UI/pages/inbox/Inbox";
import Users from "./adminPanel/UI/pages/users/Users";
import Billing from "./adminPanel/UI/pages/ecommerce/Bill";
import SuperAdmins from "./adminPanel/UI/pages/superadmin/Superadmins";
import Invoice from "./adminPanel/UI/pages/ecommerce/invonce/Invonce";
import AddProduct from "./adminPanel/UI/pages/productPages/AddProduct";
import DelateProduct from "./adminPanel/UI/pages/productPages/DelateProduct";
import Checkout from "./components/miniComponents/Cart/checkout/Checkout";
import Placed from "./components/miniComponents/Cart/Placed";
import Projects from './components/miniComponents/projects/Home';
import Todolist from './components/miniComponents/projects/Todolist';
import Message from './adminPanel/UI/pages/inbox/Message';
import MyProduct from "./adminPanel/UI/pages/superadmin/MyProducts";
function App() {
  return (
    <>
      <Router>
        <ToastContainer />
        <Routes>
          {/* Public Routes */}
          <Route path="*" element={"Error"} />
          <Route path="/" element={<Home />} />
          <Route path="/singlebook/:name" element={<SingleBook />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/OurWork" element={<Projects />} />
          <Route path="/OurWork/TodoList" element={<Todolist />} />
          <Route
            path="/placed/:date/:method/:name/:address/:phone/:price/:items"
            element={<Placed />}
          />
          <Route path="/checkout/:items/:total" element={<Checkout />} />

          {/* Admin Routes */}
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/dashboard" element={<Dasboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/inbox/message/:id" element={<Message />} />
          <Route path="/users" element={<Users />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/superadmins" element={<SuperAdmins />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/myproducts" element={<MyProduct />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/delateproduct" element={<DelateProduct />} />
          <Route path="/addsuperadmin" element={<AddSAdmin />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
