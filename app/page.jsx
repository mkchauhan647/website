// import { useState,useEffect } from "react";
import Home from '@componets/home/Home';
import { getdatas } from '@componets/loading/delay';
import { ToastContainer } from 'react-toastify';

const HomeRoute = async () => {
  // console.log("Homello")
  const data = await getdatas();

  return (
    <>
      <Home />
     
    </>
  );
};

export default HomeRoute;
