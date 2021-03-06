import React,{useState,useEffect} from 'react'
import Link from 'next/link';
import {useRouter} from 'next/router';
import styles from '../styles/component.module.scss'
import Image from 'next/image';

const NavBar = () => {

  const router = useRouter()

  const [activePath,setActivePath] = useState("")

  useEffect(() => {
    setActivePath(window.location.toString().split("/")[3])
  },[router])
  return (
    <nav className={styles.nav}>
        <div className={styles.nav__logo__container}>
          <Link href="/" >
            <Image width={80} height={60} src={"/logo.png"} alt="logo" className={styles.nav__logo} />
          </Link>
        </div>
        <ul className={styles.nav__list}>
          <li className={styles.nav__item} ><Link href="/" ><a className={activePath === "/" || activePath === "" ? styles.active : ""}>Home</a></Link></li>
          <li className={styles.nav__item}><Link href="/#about" ><a className={activePath === "#about" ? styles.active : ""}>about</a></Link></li>
          <li className={styles.nav__item}><Link href="/#portfolio" ><a className={activePath === "#portfolio" ? styles.active : ""}>portfolio</a></Link></li>
          <li className={styles.nav__item}><Link href="/blog" ><a className={activePath === "blog" ? styles.active : ""}>blog</a></Link></li>
          <li className={styles.nav__item}><Link href="/#contact" ><a className={activePath === "#contact" ? styles.active : ""}>contact</a></Link></li>
        </ul>
    </nav>
  )
}

export default NavBar