import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Compnents/Layout'
import Home from './Pages/Home/Home'
import Features from './Pages/Features/Features'
import Pricing from './Pages/PricingPlan/PricingPlan'
import Docs from './Pages/Docs/Docs'
import Blog from './Pages/Blog/Blog'

import './App.css'

function App() {
  let paths = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "features", element: <Features /> },
        { path: "pricing", element: <Pricing /> },
        { path: "docs", element: <Docs /> },
        { path: "blog", element: <Blog /> }
      ]
    }
  ]);


  return (
    <>
    
    <RouterProvider router={paths} />

    </>
  )
}

export default App
