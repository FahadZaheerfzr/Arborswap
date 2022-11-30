import React from 'react'
import { useRoutes } from "react-router-dom";
import CollectionPage from '../pages/CollectionPage';
import Error from '../pages/Error';
import LandingPage from '../pages/LandingPage';


export default function WebRouter() {
    let routes = useRoutes([
        { path: "/", element: <LandingPage /> },
        { path: "/collections/:id", element: <CollectionPage /> },
        { path: "*", element: <Error /> },
      ]);
      return routes;
}
