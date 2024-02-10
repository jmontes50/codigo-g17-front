import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import AllProducts from "./views/AllProducts";
import ProductDetail from "./views/ProductDetail";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/detail/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  )
}
