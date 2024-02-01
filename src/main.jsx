import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbar from  './components/Navbar';
import Footer from  "./components/Footer";
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";

const router=createBrowserRouter([
  {
    path:"/",
    element:<App />,
    errorElement: <h1>404 not found</h1>
  },
  {
    path:"/flat",
    element: <Navbar />, 
  },
  {
    path:"/about",
    element: <Navbar />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
