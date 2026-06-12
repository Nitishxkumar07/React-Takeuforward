import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx'
import Plus from './pages/Plus.jsx'
import Pricing from './pages/Pricing.jsx'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element:<App/>
  },
  {
    path: '/home',
    element:<Home/>
  },
  {
    path: '/plus',
    element:<Plus/>
  },
  {
    path: '/pricing',
    element:<Pricing/>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
