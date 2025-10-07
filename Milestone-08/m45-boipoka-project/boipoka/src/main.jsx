import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// import { createBrowserRouter } from 'react-router';
import { RouterProvider } from "react-router/dom";
import { router } from './Routes/Routes.jsx';


// step 1
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello World jata</div>,
//   },
// ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  {/* step 2 */}
  <RouterProvider router={router} /> 
  
  </StrictMode>,
)
