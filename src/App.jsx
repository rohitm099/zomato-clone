import { useState } from 'react'
import { createBrowserRouter, RouterProvider, Route, Link, } from "react-router-dom";
<<<<<<< HEAD
import Home from './pages/home';
import Navbar from './components/navbar';
import Login from "./pages/login"

//import routes
=======
import Home from './home';
import Navbar from './components/navbar';

>>>>>>> a2a61d43cc7403e3f01ce48af90c90e12c68ee65
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
<<<<<<< HEAD
  },
  {
    path: '/login',
    element: <Login />
=======
>>>>>>> a2a61d43cc7403e3f01ce48af90c90e12c68ee65
  }

]);

function App() {

  return (
    <>
      <div className='top'>
        <Navbar />
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
