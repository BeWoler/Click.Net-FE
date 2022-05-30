import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/home.module.sass'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Click.Net</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}

export default Home
