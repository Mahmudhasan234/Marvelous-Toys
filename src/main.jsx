import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Main from './Component/Main';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
<div className='max-w-7xl mx-auto'>
<React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
</div>
)
