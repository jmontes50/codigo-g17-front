import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//hay que dejar este import para que funcione tailwind
import './index.css'
import 'react-toastify/dist/ReactToastify.min.css';
//css para react slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "leaflet/dist/leaflet.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
