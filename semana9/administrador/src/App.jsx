import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import ManageProduct from "./views/ManageProduct";
import Navbar from "./components/Navbar";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* dentro de Routes solamente van las rutas */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/crearproducto" element={<ManageProduct />} />
      </Routes>
    </Router>
  )
}
