
import { createRoot } from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import SummerCollection from './pages/SummerCollection.jsx'
import WinterCollection from './pages/WinterCollection.jsx'
import NewArrivals from './pages/NewArrivals.jsx'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
const router = createBrowserRouter([
  {
  path : '/',
  element : <Layout />,
  children : [
   {
    path : "Home" ,
    element : <Home/>
   },
   {
    path : "SummerCollection" ,
    element : <SummerCollection />
   },
   {
    path : "WinterCollection" ,
    element : <WinterCollection/>
   },
   {
    path : "NewArrivals" ,
    element : <NewArrivals/>
   },
   {
    path : "Login" ,
    element : <Login/>
   },
   {
    path : "SignUp" ,
    element : <SignUp/>
   },
   {
    path : "*" ,
    element : <h1>Not found</h1>
   },

  ]
}
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
  
  </RouterProvider>
)
   
  

