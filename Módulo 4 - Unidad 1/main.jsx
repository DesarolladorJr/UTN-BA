import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import vehicles from "./data/vehicles.js";

var routes = [
  {
    path: "/",
    element: <App />
  },
];

vehicles.forEach((h) => {
  routes.push({
    path: h.name,
    element: (
      <div className='Auto'>
        <div className='texto'>{h.name}</div>
        <div>{h.description}</div>
        <div>{h.informacion}</div>
        <img src={h.image} alt="" />
      </div>

    )
  });
});

var router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
