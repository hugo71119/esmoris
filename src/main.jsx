import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Error from './components/Error'
import Layout from './components/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Contacto from './components/Contacto'
import Nosotros from './components/Nosotros'
import Productos from './components/Productos'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <App/>
      },
      {
        path: '/nosotros',
        element: <Nosotros/>
      },
      {
        path: '/productos',
        element: <Productos/>
      },
      {
        path: '/contacto',
        element: <Contacto/>,
        errorElement: <Error/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
