import React from 'react'
import { useRoutes } from "react-router-dom";
import Collection from '../pages/Collection';
import Error from '../pages/Error';
import LandingPage from '../pages/LandingPage';


export default function WebRouter() {
    let routes = useRoutes([
        { path: "/", element: <LandingPage /> },
        { path: "collections", element: <Collection /> },
        { path: "*", element: <Error /> },
      ]);
      return routes;
}
