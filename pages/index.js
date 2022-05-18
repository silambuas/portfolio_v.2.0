/* eslint-disable @next/next/no-page-custom-font */
import React from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import NavBar from '../components/NavBar';
import Button from '../components/Button';

export default function Home() {

  return (
    <div className={styles.container}>
      
      <Head>
        <title>Silambarasu</title>
        <meta name="description" content="Look what cool about Silambarasu!" />
        <link rel="icon" href="/love_logo.png" />
      </Head>
      
      <NavBar />
      
      <main className={styles.main}>
        <div className={styles.main__container}>
          <div className={styles.main__text__container}>
            <h1 className={styles.text__heading}>Hello, <span>I&apos;m Silambarasu</span>.</h1>
            <h3 className={styles.text__subheading}>Full-stack web developer</h3>
          </div>
          <div className={styles.button__container}>
            <Button 
              text={"View more!"} 
              bootstrap="p-2 px-4 mt-3"
              customClassName={""} 
            />
          </div>
        </div>
      </main>

    </div>
  )
}
