// import React from 'react';

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from './../Pages/Home';
import Statistics from "../Pages/Statistics";
import Donation from "../Pages/Donation";
import ErrorPage from "../Pages/ErrorPage";
import DonationDetails from "../component/DonationDetails/DonationDetails";

const Router  = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement:<ErrorPage/>,
      children: [
        {
          path: "/",
          loader: ()=>fetch('donation.json'),
          element: <Home/>,
        },
        {
          path: "/donation",
          element: <Donation/>,
        },
        {
          path: "/statistics",
          element: <Statistics/>,
        },
        {
          path: "/donationDetail/:id",
          element: <DonationDetails/>,
          loader: ()=>fetch('donation.json')
        },
      ],
    },
    
  ]);

export default Router;