import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//hay que dejar este import para que funcione tailwind
import './index.css'
import 'react-toastify/dist/ReactToastify.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
