import React from 'react';
import {createBrowserRouter,RouterProvider } from 'react-router-dom'
import Page1 from '../pages/page1';
import Page2 from '../pages/page2';


export default function Router() {
    const router = createBrowserRouter([
        {
            path:'/',
            element:<Page1/>
        },
        {
            path:'/page2',
            element:<Page2/>
        }
    ]);
  return (
    <RouterProvider router={router}/>
  )
}
