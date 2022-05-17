/* eslint-disable @next/next/no-page-custom-font */
import React from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import NavBar from '../components/NavBar';

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
        <h1>Hello, <span>I&apos;m Silambarasu</span>.<br />I&apos;m a full-stack web developer.</h1>
      </main>

    </div>
  )
}
