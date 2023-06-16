import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthProvider, { AuthContext } from './Provider/AuthProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes/Routes.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async'





const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
   <div >
   <HelmetProvider><RouterProvider router={router}></RouterProvider></HelmetProvider>
   </div>
    </QueryClientProvider>
    </AuthProvider>

  
  </React.StrictMode>,
)
