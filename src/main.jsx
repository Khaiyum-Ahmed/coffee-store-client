import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import App from './App.jsx'
import AddCoffee from './Components/AddCoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path:'addCoffee',
    element: <AddCoffee></AddCoffee>

  },
  {
    path:'updateCoffee',
    element:<UpdateCoffee></UpdateCoffee>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />,
  </StrictMode>,
)
