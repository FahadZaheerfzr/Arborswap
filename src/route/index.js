import React from 'react'
import { useRoutes } from "react-router-dom";
import CollectionPage from '../pages/CollectionPage';
import CollectionRankings from '../pages/CollectionRankings';
import CreateNft from '../pages/CreateNft';
import Error from '../pages/Error';
import LandingPage from '../pages/LandingPage';
import NftPage from '../pages/NftPage';
import ProfilePage from '../pages/ProfilePage';


export default function WebRouter() {
  let routes = useRoutes([
    { path: "/", element: <LandingPage /> },
    { path: "/collections/:id", element: <CollectionPage /> },
    { path: "/nfts/:id", element: <NftPage /> },
    { path: "create_nft", element: <CreateNft /> },
    { path: "rankings", element: <CollectionRankings />},
    { path: "my_profile", element: <ProfilePage /> },
    { path: "*", element: <Error /> },
  ]);
  return routes;
}
