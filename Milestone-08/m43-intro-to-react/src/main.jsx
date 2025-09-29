import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'

const router=createBrowserRouter([
  {
    path:'/',
    element: <h1>Hello i'm Sachin Dey!!</h1>
  },
  {
    path:'about',
    element: <h1>I am from about section</h1>
  },
  {
    path:'blogs',
    element: <h1>I am from blogs section</h1>
  },
  {
    path:'app',
    Component: App
  },
  {
    path:'app2',
    element: <App/>

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
