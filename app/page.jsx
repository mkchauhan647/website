// import { useState,useEffect } from "react";
import Home from '@componets/home/Home';
import { getdatas } from '@componets/loading/delay';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const HomeRoute = async () => {
  // console.log("Homello")
  const data = await getdatas();

  return (
    <>
      <Home />
      <ToastContainer
        position='bottom-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </>
  );
};

export default HomeRoute;
