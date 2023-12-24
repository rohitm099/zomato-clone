import { useState } from 'react'
import { createBrowserRouter, RouterProvider, Route, Link, } from "react-router-dom";
import Home from './home';
import Navbar from './components/navbar';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
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
