import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sign from "./views/Sign";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Sign />} />
        </Routes>
      </Router>
    </>
  );
}
