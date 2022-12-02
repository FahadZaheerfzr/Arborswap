import React from 'react'
import { useRoutes } from "react-router-dom";
import CollectionPage from '../pages/CollectionPage';
import Error from '../pages/Error';
import LandingPage from '../pages/LandingPage';
import NftPage from '../pages/NftPage';


export default function WebRouter() {
    let routes = useRoutes([
        { path: "/", element: <LandingPage /> },
        { path: "/collections/:id", element: <CollectionPage /> },
        { path: "/nfts/:id", element: <NftPage /> },
        { path: "*", element: <Error /> },
      ]);
      return routes;
}
