'use client';
import Link from 'next/link';
import styles from './navbar.module.css';
import { useState } from 'react';

const Nabvar = () => {
  const [display, setDisplay] = useState(false);

  const handleClick = (e) => {
    setDisplay(!display);

    // e.target.addEventListener("mouseleave",()=>setDisplay(!display));

    console.log(e);
  };
  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.header_text}>DBMS Project</h1>
          <nav className={styles.navlinks}>
            <ul>
              <li className={styles.navlink}>
                <Link href='/'>Home</Link>
              </li>
              <li className={styles.navlink}>
                <Link href='/dashboard/start-campaign'>Start Campaigns</Link>
              </li>
              <li className={styles.navlink}>
                <Link href='/dashboard/my-campaign'>My Campaign</Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>

      {/* <div className={styles.test}>Some Testing Text</div> */}
    </>
  );
};

export default Nabvar;
