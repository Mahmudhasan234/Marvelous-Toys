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
import ErrorPAge from './Component/ErrorPAge';
import ToyDetails from './SharedCOmponent/ViewDetails/ToyDetails';
import PrivateRoutes from './Component/Private Route/PrivateRoutes';
import AllToys from './Component/All toy/AllToys';
import AddToy from './Component/AddToy';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
      {
        path: "/toydetails/:id",
        element: <PrivateRoutes><ToyDetails></ToyDetails></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://marvel-toys-server.vercel.app/alltoys/${params.id}`)
      },
      {
        path: "/alltoys",
        element: <AllToys></AllToys>,
        loader: () => fetch("https://marvel-toys-server.vercel.app/alltoys")
      },
      {
        path: "/addtoys",
        element: <AddToy></AddToy>
      }
    ]
  },
  {
    path: "*",
    element: <ErrorPAge></ErrorPAge>
  }

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
