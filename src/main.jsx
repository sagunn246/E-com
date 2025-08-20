import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter,createBrowserRouter,RouterProvider } from 'react-router'
import Cart from './components/Cart/Cart.jsx'
import MainAuth from './components/Authentication/MainAuth.jsx'
import DashboardMain from './components/Dashboard/DashboardMain.jsx'
import Setting from './components/Setting/Setting.jsx'
import Home from './Home.jsx'
import AddProduct from './components/AddProduct/AddProduct.jsx'
import ProductMain from './components/ProductList/ProductMain.jsx'
const router = createBrowserRouter([
  
  {
    path:'/',
    element:<Home />,
    children:[
      {
    path: "/",
    element: <div><App /></div>,
  },
  {
    path: "/cart",
    element: <div><Cart/></div>,
  },
  
  {
    path: "/dashboard",
    element: <DashboardMain />,
  },
  { path: "/setting", element: <Setting /> },
  { path: "/addProduct", element: <AddProduct /> },
  { path: "/products", element: <ProductMain /> },

    ]
  }
  
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
