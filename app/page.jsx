// import { useState,useEffect } from "react";
import Home from '@componets/home/Home';
import { getdatas } from '@componets/loading/delay';
import { ToastContainer } from 'react-toastify';

import styles from '@styles/page.module.css'
const HomeRoute = async () => {
  // console.log("Homello")
  const data = await getdatas();

  return (
    <>
      <Home />
      <address className={styles.address}>
        <div>
        <h3>Team Members:</h3>
        </div>
        <div>
        <h4>Aashish Bhatt</h4>
        <h4>Manoj Kumar Chauhan</h4>
        <h4>Willson Ghimire</h4>
        <h4>Bikram Bashyal</h4>
        </div>
      </address>
      <address className={styles.address}>
        <div>
        <h3>Team Members:</h3>
        </div>
        <div>
        <h4>Aashish Bhatt</h4>
        <h4>Manoj Kumar Chauhan</h4>
        <h4>Willson Ghimire</h4>
        <h4>Bikram Bashyal</h4>
        </div>
      </address>
    </>
  );
};

export default HomeRoute;
