import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
  
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}

export default App
