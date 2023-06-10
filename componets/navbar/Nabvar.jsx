'use client'
import Link from "next/link"
import styles from './navbar.module.css'
import { useState } from "react"

const Nabvar = () => {

const [display,setDisplay] = useState(false);

const handleClick = (e) => {
setDisplay(!display)

// e.target.addEventListener("mouseleave",()=>setDisplay(!display));

console.log(e);



}
  return (

        <>
        
        <div className={styles.container}>

        <header className={styles.header}>
            <h1 className={styles.header_text}>Inspirational</h1>
            <nav className={styles.navlinks}>
                <ul>
                    <li className={styles.navlink}><Link href="/">Home</Link></li>
                    <li className={styles.navlink}><Link href="/blog">Blog</Link></li>
                    <li className={styles.navlink}><Link href="/about">About</Link></li>
                    <li className={styles.navlink}><Link href="/about">About</Link></li>
                    <li className={styles.navlink}><Link href="/about">About</Link></li>
                    <li className={styles.navlink}><Link href="/about">About</Link></li>
                    <li className={styles.navlink}><Link href="/about">About</Link></li>
                    <div className={styles.dropdown + ' ' + styles.navlink}>
                        <button>Dropdown</button>
                        <div className={styles.dropdown_list}>
                        <Link href="/about">Dropdown</Link>
                        <Link href="/about">Dropdown</Link>
                        <Link href="/about">Dropdown</Link>
                        <Link href="/about">Dropdown</Link>
                        </div>
                    </div>
                   
                </ul>
            </nav>
        </header>

        </div>

    {/* <div className={styles.test}>Some Testing Text</div> */}
        
        </>



    )
}

export default Nabvar