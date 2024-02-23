import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/cartContext";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import AllProducts from "./views/AllProducts";
import ProductDetail from "./views/ProductDetail";
import Checkout from "./views/Checkout";
import Register from "./views/Register";

export default function App() {
  return (
    <Router>
      {/* El provider va a funcionar como una envoltura */}
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/detail/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </CartContextProvider>
    </Router>
  )
}
