'use client';

import Login from '@componets/Login';
import MyCampaigns from '@componets/MyCampaigns';
import SignUp from '@componets/SignUp';
import StartCampaign from '@componets/StartCampaign';
import { ToastContainer } from 'react-toastify';

// import Login from "@app/login/page"

const Home = () => {
  return (
    <>
      <Login />

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

export default Home;
