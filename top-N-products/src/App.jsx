import { useState } from 'react'
import { RouterProvider , createBrowserRouter } from 'react-router-dom'
import Home from './Home'
import Header from './components/Header'
import Products from './components/Products'

function App() {
  // const [count, setCount] = useState(0)
  const router= createBrowserRouter([
    {
      path:"/",
      element:<Layout />,
      children:[
        {
          path:"/Home",
          element:<Home />
        },{
          path:"/header",
          element:<Header />

        },
        {
          path:"/top",
          element:<TopN />
        },{
          path:"/products",
          element:<Products />
        }
      ]
    }
      ])

  
  return (
    <>
    <RouterProvider router={router}/>   
    </>
  )
}

export default App
