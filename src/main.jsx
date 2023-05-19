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
import Home from './Component/Home/Home';
import Login from './Component/Login';
import Registration from './Component/Registration';
import AuthProvider from './Component/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/registration",
        element: <Registration></Registration>
      },
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
<div >
<React.StrictMode>
<AuthProvider>
<RouterProvider router={router}></RouterProvider>
</AuthProvider>
  </React.StrictMode>,
</div>
)
