import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Root from './routs/Root'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Event from "./pages/EventP/components/Event"
import About from "./pages/About/component/About"
import NotFound from './pages/NotFound/components/NotFound'



function App() {
  
  const router = createBrowserRouter([
 
    {
      path: "/",
      element: <Root />,
      // errorElement: <NotFound />, // way for showing error when user write a path outside of the project rand of paths , example: localhost.../register
      children:[
        {
          path: "/",
          element:<Event/> ,
        },
        {
          path: "/About",
          element: <About /> ,
        },
       {
          path: "*",              //another way for the error 
          element: <NotFound />
        }
      ]
    },
  
  ]);
  

  return (
    <>
          <RouterProvider router={router} />
          {/* <Root /> */}

    </>
  )
}

export default App
