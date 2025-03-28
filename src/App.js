import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import { useSelector } from "react-redux";



function App() {
  const user = useSelector((state)=>state.user.currentUser)
  console.log(user)
  return (
    <BrowserRouter>
    <Routes>

    <Route path="/" element={<Home />} />
    <Route path="/products/:category" element={<ProductList />} />
    <Route path="/product/:id" element={<Product />} />
    <Route path="/success" element={<Success />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/login" element={user ?<Home /> :<Login />} />
    <Route path="/register" element={user ?<Home />: <Register />} />
   
    </Routes>
    </BrowserRouter>
  );
}

export default App;
