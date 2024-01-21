import { useState } from 'react'
import { createBrowserRouter, RouterProvider, Route, Link, } from "react-router-dom";
import Home from './pages/home';
import Login from "./pages/login"
import Register from "./pages/register"
import Restaurant from './pages/Restaurant';

//import routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/restaurant/:restaurantName',
    element: <Restaurant />
  }

]);

function App() {

  return (
    <>
      <div className='top'>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
